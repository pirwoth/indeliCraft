import { useState } from "react";
import { C, FEATURED_PROJECTS } from './constants.js';
import { Fade } from './hooks.jsx';

export default function FeaturedProjects({ scrollTo }) {
  const [featSlide, setFeatSlide] = useState(0);

  return (
    <section id="projects" style={{ padding:"6rem 3rem", borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"2.5rem" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2rem,3.5vw,3.5rem)", letterSpacing:"-0.01em" }}>Featured Projects</h2>
            <button onClick={() => scrollTo("work")} className="hover-arrow" style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:500, fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:C.gold }}>
              All Projects <span>→</span>
            </button>
          </div>
        </Fade>

        {/* SPH-style: large main image + two thumbnail strip */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1px" }}>
          {/* Main featured */}
          <Fade>
            <div style={{ position:"relative", height:"55vh", overflow:"hidden", cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
            >
              <img src={FEATURED_PROJECTS[featSlide].img} alt={FEATURED_PROJECTS[featSlide].title} style={{ transition:"transform .7s ease" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(26,25,22,0.7) 0%, transparent 50%)" }} />
              <div style={{ position:"absolute", top:"1.5rem", left:"1.5rem", background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.15)", padding:"0.4rem 0.9rem" }}>
                <span style={{ fontSize:"0.6rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)" }}>Featured Project</span>
              </div>
              <div style={{ position:"absolute", bottom:"2rem", left:"2rem" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"clamp(1.4rem,2.5vw,2.2rem)", color:C.white, marginBottom:"0.4rem" }}>{FEATURED_PROJECTS[featSlide].title}</h3>
                <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.6)", fontWeight:300, letterSpacing:"0.06em" }}>{FEATURED_PROJECTS[featSlide].client}</p>
              </div>
            </div>
          </Fade>

          {/* Thumbnail row */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", marginTop:"1px" }}>
            {FEATURED_PROJECTS.map((p, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div onClick={() => setFeatSlide(i)} style={{ height:"22vh", overflow:"hidden", cursor:"pointer", position:"relative", outline: featSlide === i ? `2px solid ${C.gold}` : "none" }}
                  onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
                >
                  <img src={p.img} alt={p.title} style={{ transition:"transform .6s ease", filter: featSlide !== i ? "brightness(0.65)" : "brightness(0.85)" }} />
                  <div style={{ position:"absolute", bottom:"1rem", left:"1rem", right:"1rem" }}>
                    <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"0.95rem", color:C.white, lineHeight:1.3 }}>{p.title}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}