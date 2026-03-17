import SectionReveal from "@/components/SectionReveal";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import officeImg from "@/assets/differentiator-design-excellence.png";
import heroConsultancy from "@/assets/hero-consultancy-center.png";

const values = [
  { title: "Excellence", desc: "We pursue the highest standard in every detail." },
  { title: "Trustworthiness", desc: "We build lasting relationships through integrity." },
  { title: "Diligence", desc: "Committed to delivering on time and on budget." },
  { title: "Human-Centered Design", desc: "People are at the heart of every space we create." },
  { title: "Purpose-Driven Work", desc: "Every project serves a greater purpose." },
];

const AboutPage = () => {
  return (
    <main className="pt-20">
      <SEO
        title="About Us"
        description="Learn about IndeliCraft & Works Ltd — a Kampala-based architecture and design firm driven by excellence, integrity, and human-centered design across East Africa."
        path="/about"
      />
      <PageHeader
        label="About Us"
        title="Crafting Spaces That Tell Stories"
        backgroundImage={heroConsultancy}
      />

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IndeliCraft & Works Ltd was founded in Kampala, Uganda with a singular vision: to bridge the gap between imagination and built reality. We believe that every space—whether a home, a church, a farm, or an office—deserves thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we are a multidisciplinary design studio offering architecture, interior design, 3D visualization, farm structures, branding, and web development. Our team combines creativity with technical precision to deliver projects that exceed expectations.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <img src={officeImg} alt="Our workspace" className="rounded-lg shadow-xl w-full" loading="lazy" />
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12">
          <SectionReveal>
            <div className="p-10 border border-border rounded-lg bg-background">
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, human-centered design solutions that transform spaces and empower communities across East Africa.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="p-10 border border-border rounded-lg bg-background">
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be East Africa's most trusted multidisciplinary design firm, known for excellence, innovation, and integrity.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 text-center">What Drives Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">Core Values</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.05}>
                <div className="p-8 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-heading text-lg font-semibold mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
