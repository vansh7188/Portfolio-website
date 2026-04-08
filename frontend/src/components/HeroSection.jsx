import {
  ArrowRight,
  BrainCircuit,
  Download,
  Mail,
  Sparkles,
  Trophy,
  Workflow
} from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";

const statIcons = {
  MERN: Workflow,
  AI: BrainCircuit,
  DSA: Trophy
};

const statProgress = {
  MERN: 94,
  AI: 87,
  DSA: 81
};

function HeroSection({ apiStatus }) {
  const shouldReduceMotion = useReducedMotion();
  const spotX = useMotionValue(220);
  const spotY = useMotionValue(220);
  const smoothX = useSpring(spotX, { stiffness: 120, damping: 22, mass: 0.4 });
  const smoothY = useSpring(spotY, { stiffness: 120, damping: 22, mass: 0.4 });

  const [firstName, ...restName] = personalInfo.name.split(" ");
  const lastName = restName.join(" ");

  const handleHeroMove = (event) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    spotX.set(event.clientX - rect.left);
    spotY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[5.25rem] sm:pt-20"
      onMouseMove={handleHeroMove}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-hero-grid bg-[size:44px_44px] opacity-[0.08]" />
        <div className="absolute left-[6%] top-40 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl animate-pulseSlow" />
        <div className="absolute right-[8%] top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute bottom-28 right-[18%] h-48 w-48 rounded-full bg-accent-600/25 blur-3xl animate-float" />
        <div className="absolute -left-20 top-14 h-[38rem] w-64 rotate-12 bg-[linear-gradient(180deg,rgba(120,214,255,0.16),transparent_62%)] blur-2xl" />
        <div className="absolute right-[-5rem] top-0 h-[34rem] w-52 -rotate-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_58%)] blur-2xl" />
        <div className="absolute inset-x-0 top-[28rem] h-px ambient-line opacity-60" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,214,255,0.08),transparent_42%)] animate-drift" />
        <motion.div
          className="hero-spotlight -translate-x-1/2 -translate-y-1/2"
          style={{
            left: smoothX,
            top: smoothY,
            width: 440,
            height: 440,
            opacity: shouldReduceMotion ? 0 : 0.7
          }}
        />
      </div>

      <div className="section-shell pb-20 pt-1 sm:pb-24 sm:pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-400"
            >
              <Sparkles size={14} />
              Premium MERN Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="hero-heading relative max-w-4xl font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="pointer-events-none absolute -left-2 top-2 h-16 w-40 rounded-full bg-accent-500/25 blur-2xl" />
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.72, delay: 0.14 }}
                className="name-shimmer relative inline-block"
              >
                {firstName}
              </motion.span>
              {lastName ? (
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.72, delay: 0.22 }}
                  className="ml-3 inline-block text-white/95"
                >
                  {lastName}
                </motion.span>
              ) : null}
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
            transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 75 }}
            className="glass-panel glass-hover relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(120,214,255,0.14),transparent_40%,rgba(255,255,255,0.04))]" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(120,214,255,0.65),transparent)]" />
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
                {stats.map((stat, index) => {
                  const Icon = statIcons[stat.value] || Sparkles;

                  return (
                  <motion.div
                    key={stat.value}
                    className="group rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:border-accent-400/25"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl border border-accent-400/20 bg-accent-500/10 p-2 text-accent-300 transition group-hover:shadow-[0_0_22px_rgba(120,214,255,0.35)]">
                          <Icon size={16} />
                        </span>
                        <span className="font-display text-2xl text-white">{stat.value}</span>
                      </div>
                      <span className="h-2 w-20 rounded-full bg-gradient-to-r from-accent-400 via-accent-500 to-transparent" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-steel-200/85">
                      {stat.label}
                    </p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${statProgress[stat.value] || 80}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, delay: 0.18 + index * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-400 via-accent-500 to-white/90 shadow-[0_0_22px_rgba(120,214,255,0.5)]"
                      />
                    </div>
                  </motion.div>
                  );
                })}
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
