import {
  Braces,
  Database,
  GitBranchPlus,
  Layers3,
  MonitorSmartphone,
  ServerCog
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const categoryMeta = {
  Frontend: {
    icon: MonitorSmartphone,
    hue: "from-sky-300/45 via-accent-500/25 to-transparent"
  },
  Backend: {
    icon: ServerCog,
    hue: "from-cyan-300/40 via-accent-600/30 to-transparent"
  },
  Database: {
    icon: Database,
    hue: "from-teal-200/45 via-cyan-500/25 to-transparent"
  },
  Languages: {
    icon: Braces,
    hue: "from-blue-200/40 via-sky-500/25 to-transparent"
  },
  Tools: {
    icon: GitBranchPlus,
    hue: "from-accent-300/40 via-accent-500/25 to-transparent"
  }
};

const radarAnchors = [
  { top: "8%", left: "10%" },
  { top: "18%", right: "10%" },
  { top: "44%", left: "4%" },
  { top: "58%", right: "2%" },
  { top: "76%", left: "17%" },
  { top: "82%", right: "20%" },
  { top: "33%", left: "38%" },
  { top: "68%", left: "42%" }
];

const topTechStack = ["React", "Node.js", "MongoDB", "Express.js", "Tailwind", "JavaScript", "Git", "Vercel"];

function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-divider">
      <SectionHeading
        eyebrow="Tech Stack"
        title="A modern stack engineered for speed, scale, and clean product feel."
        description="An animated snapshot of the technologies powering frontend polish, backend reliability, and production-ready deployment workflows."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="tech-radar mt-12 overflow-hidden rounded-[2rem] border border-accent-400/20 bg-[linear-gradient(165deg,rgba(120,214,255,0.1),rgba(255,255,255,0.03)_55%,rgba(8,14,21,0.7))] p-6 shadow-card sm:p-8"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-300">
              <Layers3 size={14} />
              Stack Radar
            </div>
            <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">
              Visualizing the technologies behind every product layer.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-steel-200 sm:text-base">
              Core technologies are represented as animated nodes so recruiters and clients can instantly see the practical stack used across design systems, APIs, databases, and deployment.
            </p>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,214,255,0.2),transparent_62%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-400/25"
            >
              <div className="absolute inset-3 rounded-full border border-white/15" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="tech-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-400/30 bg-accent-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white"
            >
              MERN + AI
            </motion.div>

            {topTechStack.map((tech, index) => {
              const anchor = radarAnchors[index];

              return (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.08 * index },
                    scale: { duration: 0.5, delay: 0.08 * index },
                    y: {
                      duration: 2.8 + (index % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  style={anchor}
                  className="absolute rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold tracking-wide text-steel-100 shadow-[0_0_20px_rgba(120,214,255,0.2)]"
                >
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = categoryMeta[group.category]?.icon || Layers3;

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br ${categoryMeta[group.category]?.hue || "from-accent-300/35 via-accent-500/20 to-transparent"} opacity-0 transition duration-500 group-hover:opacity-100`}
              />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-accent-400/25 bg-accent-500/10 p-2 text-accent-300">
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display text-2xl text-white">{group.category}</h3>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative z-[1] flex flex-wrap gap-3">
                {group.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.06 * skillIndex }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="inline-flex items-center rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm font-semibold text-steel-100 shadow-[0_0_18px_rgba(120,214,255,0.1)]"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-300 shadow-[0_0_10px_rgba(120,214,255,0.9)]" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
