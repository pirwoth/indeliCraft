import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

import heroMinistries from "@/assets/hero-edrhon-ministries.png";
import featuredBungalows from "@/assets/featured-bungalows.png";
import heroConsultancy from "@/assets/hero-consultancy-center.png";
import interiorImg from "@/assets/interior.png";
import salonImg from "@/assets/differentiator-integrated.png";
import officeImg from "@/assets/differentiator-design-excellence.png";
import farmImg from "@/assets/sector-farm.png";
import farm3Img from "@/assets/farm3.png";
import tankImg from "@/assets/differentiator-human-centered.png";
import studioImg from "@/assets/hero-dup-studio.png";
import residentialImg from "@/assets/residential.png";
import residential1Img from "@/assets/residential1.png";
import residential3Img from "@/assets/residential3.png";
import designingTodayImg from "@/assets/designing-today.png";
import consultancy2Img from "@/assets/hero-consultancy-center-2.png";
import storiedImg from "@/assets/featured-storied.png";
import sectorResidentialImg from "@/assets/sector-residential.png";
import sectorCommercialImg from "@/assets/sector-commercial.png";
import dup1Img from "@/assets/dup1.png";
import kingdomPurposeImg from "@/assets/differentiator-kingdom-purpose.png";
import designingTomorrowImg from "@/assets/designing-tomorrow.png";
import residential2Img from "@/assets/residential2.png";
import edrhonImg from "@/assets/edrhon.png";
import deskArchImg from "@/assets/desk-architecture.png";
import dup3Img from "@/assets/dup3.png";
import dupImg from "@/assets/dup.png";
import farm2Img from "@/assets/farm2.png";
import sector3dImg from "@/assets/sector-3d.png";
import farm4Img from "@/assets/farm4.png";
import farm6Img from "@/assets/farm6.png";
import interior3Img from "@/assets/interior3.png";
import sectorUtilityImg from "@/assets/sector-utility.png";
import sectorInteriorsImg from "@/assets/sector-interiors.png";
import interior2Img from "@/assets/interior2.png";
import deskImg from "@/assets/desk.png";
import dup2Img from "@/assets/dup2.png";
import eastAfricaImg from "@/assets/differentiator-east-africa.png";
import farm1Img from "@/assets/farm1.png";
import sectorGraphicsImg from "@/assets/sector-graphics.png";

const categories = ["All", "Architecture", "Interior Design", "3D Visualization", "Farm Structures", "Utility Structures"];

const projects = [
  { img: heroMinistries, title: "Ministry Building", category: "Architecture" },
  { img: featuredBungalows, title: "Modern Bungalow", category: "Architecture" },
  { img: heroConsultancy, title: "Consultancy Center", category: "Architecture" },
  { img: residentialImg, title: "Stone & Render Residence", category: "Architecture" },
  { img: consultancy2Img, title: "Modern Family Home", category: "Architecture" },
  { img: storiedImg, title: "Storied Residence", category: "Architecture" },
  { img: sectorResidentialImg, title: "Hip Roof Bungalow", category: "Architecture" },
  { img: kingdomPurposeImg, title: "Prayer House", category: "Architecture" },
  { img: interiorImg, title: "Bathroom Interior", category: "Interior Design" },
  { img: salonImg, title: "Salon Design", category: "Interior Design" },
  { img: officeImg, title: "Office Interior", category: "Interior Design" },
  { img: studioImg, title: "Studio Setup", category: "Interior Design" },
  { img: sectorCommercialImg, title: "Commercial Salon Interior", category: "Interior Design" },
  { img: interior3Img, title: "Kitchen Detail", category: "Interior Design" },
  { img: sectorUtilityImg, title: "Bathroom Vanity", category: "Interior Design" },
  { img: sectorInteriorsImg, title: "Modern Kitchen", category: "Interior Design" },
  { img: interior2Img, title: "Wood Panel Detail", category: "Interior Design" },
  { img: residential1Img, title: "Floor Plan — 3 Bedroom", category: "3D Visualization" },
  { img: residential3Img, title: "Floor Plan — 2 Bedroom", category: "3D Visualization" },
  { img: designingTodayImg, title: "Technical Floor Plan", category: "3D Visualization" },
  { img: designingTomorrowImg, title: "4-Bedroom Floor Plan", category: "3D Visualization" },
  { img: residential2Img, title: "Open Plan Residence", category: "3D Visualization" },
  { img: edrhonImg, title: "EdRhon Centre Floor Plan", category: "3D Visualization" },
  { img: farmImg, title: "Poultry House", category: "Farm Structures" },
  { img: farm3Img, title: "Farm Building", category: "Farm Structures" },
  { img: farm2Img, title: "Chicken House", category: "Farm Structures" },
  { img: sector3dImg, title: "Goat House", category: "Farm Structures" },
  { img: farm4Img, title: "Poultry Render", category: "Farm Structures" },
  { img: farm6Img, title: "Poultry Sketch", category: "Farm Structures" },
  { img: farm1Img, title: "Goat Shelter Design", category: "Farm Structures" },
  { img: sectorGraphicsImg, title: "Poultry Complex", category: "Farm Structures" },
  { img: tankImg, title: "Water Tank Stand", category: "Utility Structures" },
  { img: dup1Img, title: "Portable Display Stand", category: "Utility Structures" },
  { img: deskArchImg, title: "Studio Desk Design", category: "Utility Structures" },
  { img: dup3Img, title: "Steel Monkey Bar Frame", category: "Utility Structures" },
  { img: dupImg, title: "Outdoor Bench Design", category: "Utility Structures" },
  { img: deskImg, title: "Reception Desk & Shelf", category: "Utility Structures" },
  { img: dup2Img, title: "Notice Board Stand", category: "Utility Structures" },
  { img: eastAfricaImg, title: "Steel Support Frame", category: "Utility Structures" },
];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      <SEO
        title="Portfolio"
        description="Browse IndeliCraft's portfolio of architecture, interior design, 3D visualization, and farm structure projects across Uganda and East Africa."
        path="/portfolio"
      />
      <PageHeader
        label="Portfolio"
        title="Our Work Speaks for Itself"
        backgroundImage={studioImg}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm rounded-full font-body transition-colors ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <SectionReveal key={p.title + p.category} delay={i * 0.03}>
                <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
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
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
