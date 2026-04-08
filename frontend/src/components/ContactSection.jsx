import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="section-shell">
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
              className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 transition hover:border-accent-400/20 hover:bg-accent-500/10"
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
                    className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
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
                className="w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel-400 focus:border-accent-400/40 focus:ring-accent-400/20"
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
                className="w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel-400 focus:border-accent-400/40 focus:ring-accent-400/20"
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
                className="w-full rounded-[1.5rem] border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel-400 focus:border-accent-400/40 focus:ring-accent-400/20"
              />
            </div>

            <button type="submit" className="button-primary w-full sm:w-fit">
              Send Message
              <Send size={16} />
            </button>

            {submitted ? (
              <p className="rounded-2xl border border-accent-400/20 bg-accent-500/10 px-4 py-3 text-sm text-accent-300">
                Message drafted successfully. Thanks for reaching out!
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
