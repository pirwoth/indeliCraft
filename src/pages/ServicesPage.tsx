import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import {
  Building2, Paintbrush, Box, Tractor, Wrench, Palette, Globe,
} from "lucide-react";

import heroMinistries from "@/assets/hero-edrhon-ministries.png";
import interiorImg from "@/assets/interior.png";
import studioImg from "@/assets/hero-dup-studio.png";
import farmImg from "@/assets/sector-farm.png";
import tankImg from "@/assets/differentiator-human-centered.png";
import salonImg from "@/assets/differentiator-integrated.png";
import bungalowImg from "@/assets/featured-bungalows.png";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    desc: "We design residential homes, rental units, commercial buildings, and church buildings with precision and purpose. Every structure is crafted to balance aesthetics, functionality, and budget.",
    img: heroMinistries,
    examples: ["Residential Homes", "Rental Apartments", "Commercial Buildings", "Church Buildings"],
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "From cozy living rooms to professional office spaces and trendy salons, we create interiors that feel intentional and inspiring.",
    img: interiorImg,
    examples: ["Home Interiors", "Office Spaces", "Salon & Studio Design", "Commercial Interiors"],
  },
  {
    icon: Box,
    title: "3D Visualization",
    desc: "See your project before it's built. Our photorealistic 3D renders and walkthroughs give you crystal-clear visualization of the final product.",
    img: bungalowImg,
    examples: ["Architectural Renders", "Interior Walkthroughs", "Concept Visualization", "Presentation Models"],
  },
  {
    icon: Tractor,
    title: "Farm Structures",
    desc: "Purpose-built agricultural structures designed for productivity, animal welfare, and durability. We design goat houses, chicken houses, pigsties, and more.",
    img: farmImg,
    examples: ["Poultry Houses", "Goat Houses", "Pigsties", "Agricultural Storage"],
  },
  {
    icon: Wrench,
    title: "Custom Utility Structures",
    desc: "From water tank stands to handwashing facilities and sports structures, we design custom installations that serve communities.",
    img: tankImg,
    examples: ["Water Tank Stands", "Handwashing Stations", "Sports Structures", "Community Installations"],
  },
  {
    icon: Palette,
    title: "Graphic & Branding Design",
    desc: "We craft visual identities that make your brand memorable. Logos, posters, social media graphics, and promotional materials.",
    img: salonImg,
    examples: ["Logo Design", "Poster Design", "Social Media Graphics", "Brand Identity"],
  },
  {
    icon: Globe,
    title: "Websites & Software Solutions",
    desc: "Professional business websites, portfolio sites, CMS integration, and web applications built with modern technology.",
    img: studioImg,
    examples: ["Business Websites", "Portfolio Sites", "CMS Integration", "Web Applications"],
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Services"
        description="Architecture, interior design, 3D visualization, farm structures, branding & web development services in Kampala, Uganda. Get a free consultation today."
        path="/services"
      />
      <PageHeader
        label="What We Do"
        title="Comprehensive Design Services"
        description="From architecture to digital, we deliver end-to-end design solutions."
        backgroundImage={heroMinistries}
      />

      {services.map((s, i) => (
        <section
          key={s.title}
          className={`py-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <SectionReveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-accent" />
                  <h2 className="font-heading text-3xl font-bold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {s.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-body">
                    Start a Project
                  </Button>
                </Link>
              </SectionReveal>
              <SectionReveal delay={0.15} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </SectionReveal>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
