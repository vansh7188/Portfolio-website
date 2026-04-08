function MarqueeStrip() {
  const items = [
    "Modern MERN Applications",
    "AI-Powered Solutions",
    "Premium UI Engineering",
    "Performance-Driven Builds",
    "Scalable Backend Systems"
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(120,214,255,0.07),rgba(255,255,255,0.03))] py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-base-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-base-950 to-transparent" />
      <div className="flex min-w-max animate-marquee gap-6">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-steel-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
