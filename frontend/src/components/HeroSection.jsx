import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";

function HeroSection({ apiStatus }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-hero-grid bg-[size:44px_44px] opacity-[0.08]" />
        <div className="absolute left-[6%] top-40 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl animate-pulseSlow" />
        <div className="absolute right-[8%] top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute inset-x-0 top-[28rem] h-px ambient-line opacity-60" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,214,255,0.08),transparent_42%)] animate-drift" />
      </div>

      <div className="section-shell pb-24 pt-10 sm:pb-28 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-400"
            >
              <Sparkles size={14} />
              Premium MERN Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 max-w-3xl text-lg font-medium text-steel-100/95 sm:text-2xl"
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="body-copy mt-6 max-w-3xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#projects" className="button-primary">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Download Resume
                <Download size={16} />
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(120,214,255,0.14),transparent_40%,rgba(255,255,255,0.04))]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent-400/80">
                    System status
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-white">
                    Built for strong first impressions
                  </h2>
                </div>
                <div className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300">
                  {apiStatus}
                </div>
              </div>

              <div className="space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-2xl text-white">
                        {stat.value}
                      </span>
                      <span className="h-2 w-20 rounded-full bg-gradient-to-r from-accent-400 via-accent-500 to-transparent" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-steel-200/85">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-steel-300">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-7 text-steel-100">
                  Clean architecture, smooth interfaces, and product-minded engineering that translates into real-world impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
