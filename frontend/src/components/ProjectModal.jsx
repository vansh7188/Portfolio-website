import { ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-panel relative w-full max-w-2xl rounded-[2rem] p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-steel-100 transition hover:border-white/20 hover:bg-white/5"
              aria-label="Close project details"
            >
              <X size={16} />
            </button>

            <p className="section-kicker mb-3">Project Spotlight</p>
            <h3 className="font-display text-3xl text-white">{project.name}</h3>
            <p className="mt-4 text-base leading-7 text-steel-200">{project.description}</p>
            <p className="mt-5 rounded-2xl border border-accent-400/20 bg-accent-500/10 p-4 text-sm leading-6 text-steel-100">
              {project.highlight}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Live Preview
                <ExternalLink size={16} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Source Code
                <Github size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
