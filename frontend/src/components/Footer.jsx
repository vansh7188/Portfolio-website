import { socialLinks } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel-300">
          © {new Date().getFullYear()} Vansh Gautam. Crafted with a premium MERN-first approach.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-steel-200">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
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
