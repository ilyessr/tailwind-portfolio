import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const initialStatus = {
  type: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus(initialStatus);
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      return "Please fill in all fields.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });
      return;
    }

    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templateId ||
      !EMAILJS_CONFIG.publicKey
    ) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Check your VITE_EMAILJS_* variables and restart the dev server.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus(initialStatus);

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      const details =
        error?.text ||
        error?.message ||
        "Something went wrong. Please verify your EmailJS service, template, and public key.";

      setStatus({
        type: "error",
        message: details,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="align-element">
        <SectionTitle text="Get in touch" />

        <p className="mt-6 text-slate-600">
          If you’d like to collaborate or discuss an opportunity, feel free to
          send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mt-10 space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "error" ? "text-red-500" : "text-emerald-600"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
