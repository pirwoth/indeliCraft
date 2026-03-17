const services = [
  "ARCHITECTURE",
  "INTERIOR DESIGN",
  "3D VISUALIZATION",
  "UTILITY DESIGN",
  "FARM STRUCTURES",
  "GRAPHICS & WEB",
  "BEAUTIFUL & FUNCTIONAL",
];

const InfiniteMarquee = () => {
  const allItems = [...services, ...services, ...services];

  return (
    <section className="py-5 bg-primary overflow-hidden">
      <div className="relative">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {allItems.map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="text-primary-foreground/70 text-sm tracking-[0.2em] font-body font-medium">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;
