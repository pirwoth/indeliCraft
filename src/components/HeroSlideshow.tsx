import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroConsultancy from "@/assets/hero-consultancy-center.png";
import heroMinistries from "@/assets/hero-edrhon-ministries.png";
import featuredBungalows from "@/assets/featured-bungalows.png";
import farm1Img from "@/assets/farm1.png";

const slides = [
  {
    img: heroConsultancy,
    project: "Consultancy Center",
    service: "Architectural Design",
  },
  {
    img: heroMinistries,
    project: "EdRhon Ministry Building",
    service: "Institutional Architecture",
  },
  {
    img: featuredBungalows,
    project: "Modern Bungalow",
    service: "Residential Architecture",
  },
  {
    img: farm1Img,
    project: "Poultry Farm Complex",
    service: "Farm Structures",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Slide images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.project}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ))}

      {/* Large watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-[8vw] font-bold text-primary-foreground/5 tracking-[0.15em] uppercase whitespace-nowrap">
          INDELICRAFT
        </span>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content overlay */}
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left: Project info card */}
            <div className="flex flex-col gap-6">
              <div className="bg-primary/80 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 max-w-xs">
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">Project</p>
                <p className="text-primary-foreground font-heading font-semibold text-lg mb-3">
                  {slides[current].project}
                </p>
                <div className="w-12 h-px bg-primary-foreground/20 mb-3" />
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">Service</p>
                <p className="text-primary-foreground/70 text-sm">{slides[current].service}</p>
              </div>

              {/* Tagline */}
              <div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
                  Designing Spaces.
                </h1>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground/60 italic leading-tight">
                  Crafting Vision.
                </h1>
              </div>
            </div>

            {/* Right: CTA + counter */}
            <div className="flex flex-col items-start lg:items-end gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-gold-dark font-body px-8 py-6 text-base"
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10 hover:text-accent font-body px-8 py-6 text-base"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>

              {/* Slide indicators + counter */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-accent"
                          : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-primary-foreground/40 text-sm font-body tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
