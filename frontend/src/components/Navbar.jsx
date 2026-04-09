import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring
} from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();
  const orbX = useMotionValue(0);
  const orbY = useMotionValue(0);
  const smoothOrbX = useSpring(orbX, { stiffness: 260, damping: 28, mass: 0.2 });
  const smoothOrbY = useSpring(orbY, { stiffness: 260, damping: 28, mass: 0.2 });
  const orbBackground = useMotionTemplate`radial-gradient(220px circle at ${smoothOrbX}px ${smoothOrbY}px, rgba(120, 214, 255, 0.2), transparent 65%)`;
  const { scrollYProgress } = useScroll();
  const navProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const handleNavigate = (href) => (event) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) {
      setIsOpen(false);
      return;
    }

    const headerOffset = 104;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: shouldReduceMotion ? "auto" : "smooth"
    });

    setActiveHref(href);
    setIsOpen(false);
  };

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    orbX.set(event.clientX - rect.left);
    orbY.set(event.clientY - rect.top);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: navProgress }}
        className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-[linear-gradient(90deg,rgba(120,214,255,0.3),rgba(120,214,255,0.95),rgba(255,255,255,0.6))]"
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        className={`relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? "border-accent-400/20 bg-base-900/85 shadow-card backdrop-blur-xl"
            : "border-white/5 bg-white/[0.03]"
        }`}
      >
        {!shouldReduceMotion ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ background: orbBackground }}
          />
        ) : null}

        <a
          href="#hero"
          onClick={handleNavigate("#hero")}
          className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:text-accent-300"
        >
          Vansh
        </a>

        <div className="relative z-[1] hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={handleNavigate(item.href)}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
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
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={handleNavigate("#contact")}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="button-primary px-5 py-2.5 text-xs"
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[1] rounded-full border border-white/10 p-2 text-steel-100 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-[2px] md:hidden"
            />

            <motion.div
              key="mobile-nav"
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="mx-auto mt-3 max-w-7xl rounded-3xl border border-accent-400/20 bg-base-900/95 p-4 shadow-card backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigate(item.href)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + index * 0.04, duration: 0.22 }}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-white ${
                      activeHref === item.href
                        ? "border border-accent-400/25 bg-accent-500/10 text-white"
                        : "text-steel-100"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
