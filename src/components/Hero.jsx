import { useState, useEffect } from "react";
import { C, HERO_SLIDES } from './constants.js';

export default function Hero() {
  const [slide, setSlide] = useState(0);

  // Auto-rotate hero
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" style={{ height:"100vh", position:"relative", overflow:"hidden", background:C.ink }}>
      {HERO_SLIDES.map((s, i) => (
        <div key={i} style={{ position:"absolute", inset:0, opacity: i === slide ? 1 : 0, transition:"opacity 1.2s ease", pointerEvents: i === slide ? "auto" : "none" }}>
          <div style={{ position:"absolute", inset:0, animation: i === slide ? "imgZoom 6s ease forwards" : "none" }}>
            <img src={s.img} alt={s.project} />
          </div>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(26,25,22,0.2) 0%, rgba(26,25,22,0.55) 100%)" }} />

          {/* SPH-style: logo watermark top-left over image */}
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }}>
            <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(5rem,12vw,11rem)", letterSpacing:"0.08em", color:"rgba(255,255,255,0.06)", lineHeight:1, whiteSpace:"nowrap", userSelect:"none" }}>INDELICRAFT</div>
          </div>

          {/* Bottom info overlay — SPH style: project + material bottom left */}
          <div style={{ position:"absolute", bottom:"4rem", left:"3rem", animation: i === slide ? "fadeUp .8s ease .3s both" : "none" }}>
            <div style={{ display:"inline-block", background:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.15)", padding:"1.2rem 1.6rem", marginBottom:"2rem" }}>
              <div style={{ fontSize:"0.62rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:"0.4rem" }}>Project</div>
              <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"1.1rem", color:C.white, letterSpacing:"0.02em", marginBottom:"0.8rem" }}>{s.project}</div>
              <div style={{ width:"100%", height:"1px", background:"rgba(255,255,255,0.2)", marginBottom:"0.8rem" }} />
              <div style={{ fontSize:"0.62rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:"0.3rem" }}>Service</div>
              <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.8)", fontWeight:300 }}>{s.material}</div>
            </div>
            <div>
              <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2.5rem,5.5vw,5.5rem)", color:C.white, lineHeight:1.05, letterSpacing:"-0.01em", maxWidth:"700px" }}>
                Designing Spaces.<br /><em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.65)" }}>Crafting Vision.</em>
              </h1>
            </div>
          </div>

          {/* Slide counter — SPH style bottom right */}
          <div style={{ position:"absolute", bottom:"4rem", right:"3rem", display:"flex", alignItems:"center", gap:"1rem" }}>
            <div style={{ width:"40px", height:"1px", background:"rgba(255,255,255,0.3)", position:"relative", overflow:"hidden" }}>
              {i === slide && <div style={{ position:"absolute", top:0, left:0, height:"100%", background:C.white, animation:"barGrow 5s linear" }} />}
            </div>
            <span style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"0.95rem", color:"rgba(255,255,255,0.5)" }}>{String(slide + 1).padStart(2,"0")} / {String(HERO_SLIDES.length).padStart(2,"0")}</span>
          </div>
        </div>
      ))}

      {/* Manual slide dots */}
      <div style={{ position:"absolute", bottom:"4rem", left:"50%", transform:"translateX(-50%)", display:"flex", gap:"0.6rem", zIndex:10 }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? "24px" : "6px", height:"6px", borderRadius: i === slide ? "3px" : "50%", background: i === slide ? C.white : "rgba(255,255,255,0.35)", border:"none", cursor:"pointer", padding:0, transition:"all .4s ease" }} />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button onClick={() => setSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} style={{ position:"absolute", left:"1.5rem", top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", width:"44px", height:"44px", borderRadius:"50%", color:C.white, fontSize:"1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s", zIndex:10 }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>←</button>
      <button onClick={() => setSlide(s => (s + 1) % HERO_SLIDES.length)} style={{ position:"absolute", right:"1.5rem", top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", width:"44px", height:"44px", borderRadius:"50%", color:C.white, fontSize:"1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s", zIndex:10 }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>→</button>
    </section>
  );
}