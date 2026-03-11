import { useState, useEffect } from "react";
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import DesigningSection from './components/DesigningSection.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// ── MAIN ─────────────────────────────────────────────────────
export default function IndeliCraft() {
  const [scrollY, setScrollY]     = useState(0);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div style={{ background: "#FFFFFF", color: "#1A1916", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::selection { background:#1A1916; color:#FFFFFF; }
        ::-webkit-scrollbar { width:2px; }
        ::-webkit-scrollbar-thumb { background:#B8891A; }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes slideIn  { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:none} }
        @keyframes imgZoom  { from{transform:scale(1.06)} to{transform:scale(1)} }
        @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes barGrow  { from{width:0} to{width:100%} }
        .hover-arrow { display:inline-flex; align-items:center; gap:.5rem; transition:gap .25s; }
        .hover-arrow:hover { gap:.9rem; }
        img { display:block; width:100%; height:100%; object-fit:cover; }
      `}</style>

      <Navigation scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero />
      <Marquee />
      <FeaturedProjects scrollTo={scrollTo} />
      <DesigningSection />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <CTA scrollTo={scrollTo} />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
