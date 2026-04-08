function MarqueeStrip() {
  const items = [
    "Modern MERN Applications",
    "AI-Powered Solutions",
    "Premium UI Engineering",
    "Performance-Driven Builds",
    "Scalable Backend Systems"
  ];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-4">
      <div className="flex min-w-max animate-marquee gap-6">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="rounded-full border border-white/10 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-steel-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
