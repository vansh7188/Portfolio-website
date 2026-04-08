import { socialLinks } from "../data/portfolio";

function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(120,214,255,0.35),transparent)]" />
      <div className="section-shell flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel-300">
          © {new Date().getFullYear()} Vansh Gautam. Crafted with a premium MERN-first approach.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-steel-200">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-accent-400/25 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
