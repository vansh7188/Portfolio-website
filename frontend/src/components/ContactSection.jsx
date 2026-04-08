import { useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send, TriangleAlert, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo, socialLinks } from "../data/portfolio";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  "Twitter/X": Twitter,
  LeetCode: Mail
};

const initialForm = {
  name: "",
  email: "",
  message: ""
};

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({ tone: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        tone: "error",
        message: "Please fill all fields before sending your message."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setFormState({
        tone: "success",
        message: "Message sent successfully. It is now saved in the database."
      });
      setFormData(initialForm);
      window.setTimeout(() => setFormState({ tone: "idle", message: "" }), 3500);
    } catch (error) {
      setFormState({
        tone: "error",
        message: error.message || "Could not send message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell section-divider">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something sharp, useful, and memorable."
            description="Open to exciting full-stack opportunities, collaborations, and product-focused conversations."
          />

          <div className="mt-10 grid gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-panel glass-hover flex items-center gap-4 rounded-[1.5rem] p-5"
            >
              <span className="rounded-full border border-accent-400/20 bg-accent-500/10 p-3 text-accent-300">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-steel-300">Email</p>
                <p className="mt-1 text-sm text-white">{personalInfo.email}</p>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label] || Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel glass-hover flex items-center gap-4 rounded-[1.5rem] p-5"
                  >
                    <span className="rounded-full border border-white/10 bg-white/5 p-3 text-steel-100">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-steel-300">{link.label}</p>
                      <p className="mt-1 text-sm text-white">Visit profile</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-steel-100">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="premium-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-steel-100">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="premium-input"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-steel-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your idea, role, or collaboration."
                className="premium-input min-h-36 rounded-[1.25rem]"
              />
            </div>

            <button type="submit" className="button-primary w-full sm:w-fit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

            {formState.tone !== "idle" ? (
              <p
                className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${
                  formState.tone === "success"
                    ? "border-accent-400/25 bg-accent-500/10 text-accent-300"
                    : "border-rose-400/30 bg-rose-500/10 text-rose-200"
                }`}
              >
                {formState.tone === "success" ? <CheckCircle2 size={16} /> : <TriangleAlert size={16} />}
                {formState.message}
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
