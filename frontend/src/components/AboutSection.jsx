import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolio";

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Blending disciplined engineering with product intuition."
          description="A focused approach to building full-stack products that feel refined, reliable, and genuinely useful."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] p-8 sm:p-10"
        >
          <p className="body-copy">{personalInfo.about}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
