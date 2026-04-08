import { useMemo, useState } from "react";
import { ExternalLink, Filter, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/portfolio";

const filters = ["All", "MERN", "AI APIs"];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured Work"
          title="Products built to solve real problems with clarity and speed."
          description="A selection of full-stack projects that combine strong execution, practical value, and a premium product mindset."
        />

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-steel-300">
            <Filter size={14} />
            Filter
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-accent-400/40 bg-accent-500/15 text-white shadow-glow"
                  : "border-white/10 bg-white/5 text-steel-200 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-card transition ${
              project.featured
                ? "border-accent-400/20 bg-[linear-gradient(180deg,rgba(120,214,255,0.12),rgba(255,255,255,0.04))]"
                : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,214,255,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  {project.featured ? (
                    <span className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
                      Featured
                    </span>
                  ) : null}
                  <h3 className="mt-4 font-display text-2xl text-white">{project.name}</h3>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-steel-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <p className="text-sm leading-7 text-steel-200/90">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-steel-300">{project.highlight}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary px-5 py-2.5 text-xs"
                >
                  Live
                  <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary px-5 py-2.5 text-xs"
                >
                  GitHub
                  <Github size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="button-secondary px-5 py-2.5 text-xs"
                >
                  Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default ProjectsSection;
