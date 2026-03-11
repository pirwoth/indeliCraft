import { useState, useEffect } from "react";
import { C, TESTIMONIALS } from './constants.js';
import { Fade } from './hooks.jsx';

export default function Testimonials() {
  const [testSlide, setTestSlide] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setTestSlide(s => (s + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding:"6rem 3rem", background:C.ink, borderBottom:`1px solid rgba(255,255,255,0.06)` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:"3rem" }}>Client Feedback</p>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <Fade>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"4rem", color:C.gold, lineHeight:1, marginBottom:"1.5rem", opacity:0.5 }}>"</div>
              <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(1.3rem,2vw,1.8rem)", color:C.white, lineHeight:1.55, marginBottom:"2rem", letterSpacing:"0.01em" }}>
                {TESTIMONIALS[testSlide].quote}
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                <div style={{ width:"32px", height:"1px", background:C.gold }} />
                <div>
                  <div style={{ fontWeight:600, fontSize:"0.8rem", color:C.white }}>{TESTIMONIALS[testSlide].name}</div>
                  <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.06em" }}>{TESTIMONIALS[testSlide].org}</div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade delay={0.2}>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {TESTIMONIALS.map((t, i) => (
                <button key={i} onClick={() => setTestSlide(i)} style={{ background:"none", border:"none", borderLeft:`2px solid ${i === testSlide ? C.gold : "rgba(255,255,255,0.1)"}`, padding:"1rem 1.5rem", cursor:"pointer", textAlign:"left", transition:"all .3s" }}>
                  <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"0.95rem", color: i === testSlide ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)", lineHeight:1.5, transition:"color .3s" }}>{t.quote.substring(0, 80)}...</p>
                  <p style={{ fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.12em", color: i === testSlide ? C.gold : "rgba(255,255,255,0.2)", marginTop:"0.5rem", transition:"color .3s" }}>{t.org}</p>
                </button>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}