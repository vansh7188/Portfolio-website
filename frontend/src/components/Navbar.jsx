import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-35% 0px -45% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? "border-accent-400/20 bg-base-900/85 shadow-card backdrop-blur-xl"
            : "border-white/5 bg-white/[0.03]"
        }`}
      >
        <a
          href="#hero"
          className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:text-accent-300"
        >
          Vansh
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition ${
                activeHref === item.href ? "text-white" : "text-steel-200 hover:text-white"
              }`}
            >
              {activeHref === item.href ? (
                <motion.span
                  layoutId="activeNavPill"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-x-[-10px] inset-y-[-6px] -z-10 rounded-full border border-accent-400/20 bg-accent-500/10"
                />
              ) : null}
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent-400/80 transition-all duration-300 ${
                  activeHref === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <a href="#contact" className="button-primary px-5 py-2.5 text-xs">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/10 p-2 text-steel-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-accent-400/20 bg-base-900/95 p-4 shadow-card backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-white ${
                  activeHref === item.href
                    ? "border border-accent-400/25 bg-accent-500/10 text-white"
                    : "text-steel-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

export default Navbar;
