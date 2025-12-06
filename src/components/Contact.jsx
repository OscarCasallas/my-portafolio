import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // simple pero efectivo

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  // config validations
  const NAME_MIN = 3;
  const NAME_MAX = 60;
  const MSG_MIN = 10;
  const MSG_MAX = 1200;

  useEffect(() => {
    emailjs.init("A1ibiK3jY29L3_-cu"); // <- tu Public Key
  }, []);

  // validate one field
  const validateField = (field, value) => {
    switch (field) {
      case "name": {
        if (!value || value.trim() === "") return "Please enter your name.";
        if (value.trim().length < NAME_MIN)
          return `Name must be at least ${NAME_MIN} characters.`;
        if (value.trim().length > NAME_MAX)
          return `Name must be at most ${NAME_MAX} characters.`;
        return "";
      }
      case "email": {
        if (!value || value.trim() === "")
          return "Please enter your email address.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Please enter a valid email address.";
        return "";
      }
      case "message": {
        if (!value || value.trim() === "") return "Please write a message.";
        if (value.trim().length < MSG_MIN)
          return `Message must be at least ${MSG_MIN} characters.`;
        if (value.trim().length > MSG_MAX)
          return `Message must be at most ${MSG_MAX} characters.`;
        return "";
      }
      default:
        return "";
    }
  };

  // validate all
  const validateAll = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    // live-validate only if field was touched
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    // mark all touched
    setTouched({ name: true, email: true, message: true });

    if (!validateAll()) {
      setStatus("Please fix the form errors before sending.");
      return;
    }

    setSending(true);
    setStatus("");

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const resp = await emailjs.send(
        "service_f4akmre", // <-- tu Service ID
        "template_awopaaa", // <-- tu Template ID
        templateParams
      );

      console.log("EmailJS success response:", resp);
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Error Sending Message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  // helper to compute input classes
  const inputClass = (field) => {
    const base =
      "w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2";
    const err = errors[field]
      ? "border-red-400 focus:ring-red-300"
      : "border-gray-200 focus:ring-primary";
    return `${base} ${err}`;
  };

  return (
    <section id="contact" className="py-10 bg-light-gray">
      <div className="container mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Me</h2>
          <p className="text-lg text-secondary">
            Feel free to reach out for any inquiries or collaboration
            opportunities!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white p-2 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} ref={formRef} noValidate>
              {/* NAME */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name (e.g., Oscar Casallas)"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass("name")}
                />
                {/* error message */}
                {errors.name ? (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-red-500 opacity-80"
                  >
                    {errors.name}
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-gray-400">
                    Minimum {NAME_MIN} characters.
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium text-secondary mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass("email")}
                />
                {errors.email ? (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-500 opacity-80"
                  >
                    {errors.email}
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-gray-400">
                    I'll reply to this address.
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-xl font-medium text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, question or how can I help"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="6"
                  maxLength={MSG_MAX}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : "message-help"
                  }
                  className={inputClass("message")}
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-sm text-red-500 opacity-80"
                    >
                      {errors.message}
                    </p>
                  ) : (
                    <p id="message-help" className="text-sm text-gray-400">
                      Be descriptive — helps me respond faster.
                    </p>
                  )}
                  <p className="text-sm text-gray-400">
                    {formData.message.length}/{MSG_MAX}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`
                      relative overflow-hidden w-full
                      text-white py-3 rounded-md
                      ${sending ? "bg-gray-400" : "bg-blue-900"}
                      group transition-colors duration-300
                    `}
              >
                {/* TEXT */}
                <span className="relative z-10 block transition-colors duration-300
                      group-hover:font-bold 
                    group-hover:text-blue-900">
                  {sending ? "Sending..." : "Send Message"}
                </span>

                {/* SHUTTER OUT HORIZONTAL */}
                <span
                  className="
                    absolute inset-0 
                    bg-white     /* tono más claro al hacer hover */
                    scale-x-0        /* inicio cerrado */
                    group-hover:scale-x-100
                    transition-transform duration-300 ease-out
                    origin-center    /* se abre horizontal desde el centro */
                  "
                ></span>
              </button>

              {status && (
                <p className="mt-4 text-center text-lg text-secondary">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
