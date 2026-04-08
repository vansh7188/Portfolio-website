import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const proficiencyMap = {
  React: 92,
  HTML: 95,
  CSS: 90,
  Tailwind: 88,
  "Node.js": 87,
  "Express.js": 85,
  MongoDB: 84,
  JavaScript: 91,
  "C++": 76,
  Git: 89,
  GitHub: 90,
  Postman: 82,
  Vercel: 86,
  Render: 80
};

function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-divider">
      <SectionHeading
        eyebrow="Capabilities"
        title="The stack behind the experience."
        description="From polished interfaces to dependable backend systems, each layer is built with performance, clarity, and maintainability in mind."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel glass-hover rounded-[2rem] p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl text-white">{group.category}</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-400/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-5">
              {group.items.map((skill) => (
                <div key={skill}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-steel-100">{skill}</span>
                    <span className="text-steel-300">{proficiencyMap[skill] || 80}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proficiencyMap[skill] || 80}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-400 via-accent-500 to-white/80 shadow-[0_0_18px_rgba(120,214,255,0.45)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
