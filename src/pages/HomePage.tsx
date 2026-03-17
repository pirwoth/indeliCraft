import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import SEO from "@/components/SEO";
import {
  Building2, Paintbrush, Box, Tractor, Wrench, Palette, Globe,
} from "lucide-react";

import InfiniteMarquee from "@/components/InfiniteMarquee";
import HeroSlideshow from "@/components/HeroSlideshow";
import featuredBungalows from "@/assets/featured-bungalows.png";
import heroMinistries from "@/assets/hero-edrhon-ministries.png";
import interiorImg from "@/assets/interior.png";
import salonImg from "@/assets/differentiator-integrated.png";
import officeImg from "@/assets/differentiator-design-excellence.png";
import farmImg from "@/assets/sector-farm.png";
import tankImg from "@/assets/differentiator-human-centered.png";

const services = [
  { icon: Building2, title: "Architectural Design", desc: "Residential homes, rental units, commercial buildings, and church buildings." },
  { icon: Paintbrush, title: "Interior Design", desc: "Home interiors, office spaces, salons, studios, and commercial interiors." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic renders, walkthroughs, and concept visualization." },
  { icon: Tractor, title: "Farm Structures", desc: "Goat houses, chicken houses, pigsties, and agricultural structures." },
  { icon: Wrench, title: "Utility Structures", desc: "Water tank stands, handwashing facilities, sports structures." },
  { icon: Palette, title: "Branding Design", desc: "Logos, posters, social media graphics, and promotional design." },
  { icon: Globe, title: "Web Solutions", desc: "Business websites, portfolio sites, CMS integration, and web apps." },
];

const projects = [
  { img: heroMinistries, title: "Ministry Building", category: "Architecture" },
  { img: featuredBungalows, title: "Modern Bungalow", category: "Architecture" },
  { img: interiorImg, title: "Bathroom Interior", category: "Interior Design" },
  { img: salonImg, title: "Salon Design", category: "Interior Design" },
  { img: farmImg, title: "Poultry Structure", category: "Farm Structures" },
  { img: tankImg, title: "Water Tank Stand", category: "Utility Structures" },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We listen to your vision and requirements." },
  { num: "02", title: "Concept Development", desc: "Creating initial design concepts." },
  { num: "03", title: "Design & Visualization", desc: "Detailed plans and 3D renders." },
  { num: "04", title: "Review & Refinement", desc: "Collaborative feedback and revisions." },
  { num: "05", title: "Final Delivery", desc: "Complete documentation and handover." },
];

const testimonials = [
  { text: "IndeliCraft transformed our vision for the rehabilitation center into a space that truly serves our children. The attention to detail and commitment to purpose was evident at every stage.", author: "Director", role: "EdRhon Ministries" },
  { text: "The team understood exactly what we needed — a home that feels both modern and welcoming. They delivered beyond our expectations, on time and with exceptional care.", author: "Homeowner", role: "Kitovu, Wakiso" },
  { text: "From the initial consultation to final handover, the process was seamless. Our studio is exactly what we imagined — and more.", author: "Studio Owner", role: "DUP Studios, Kampala" },
];

const HomePage = () => {
  return (
    <main>
      <SEO
        title="IndeliCraft & Works Ltd | Architecture & Design Studio in Kampala, Uganda"
        description="Kampala's multidisciplinary design studio — architecture, interior design, 3D visualization, farm structures, branding & web development. Designing Spaces. Crafting Vision. Creating Impact."
        path="/"
      />
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Infinite Marquee */}
      <InfiniteMarquee />

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 text-center">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Our Services
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={i * 0.05}>
                <Link to="/services" className="group block p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300">
                  <s.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 text-center">Our Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Featured Projects
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <Link to="/portfolio" className="group relative block overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-accent text-xs tracking-wider uppercase">{p.category}</p>
                      <h3 className="text-primary-foreground font-heading text-xl font-semibold">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body px-8">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">Why Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Why Choose IndeliCraft
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Visionary Thinking", desc: "We see beyond the blueprint to create spaces that inspire." },
                  { title: "Crystal-Clear Visualization", desc: "See your project in stunning 3D before construction begins." },
                  { title: "Budget-Conscious Design", desc: "Practical solutions that respect your financial boundaries." },
                  { title: "Personal Attention", desc: "Every project receives dedicated, hands-on involvement." },
                  { title: "Full-Service Design Firm", desc: "From architecture to branding, we handle it all." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <img
                src={officeImg}
                alt="Professional office design"
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 text-center">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">Our Process</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.08}>
                <div className="text-center">
                  <span className="font-heading text-4xl font-bold text-accent">{step.num}</span>
                  <h4 className="font-heading text-lg font-semibold mt-3 mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 text-center">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="p-8 border border-border rounded-lg">
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-heading font-semibold">{t.author}</p>
                    <p className="text-sm text-accent">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
