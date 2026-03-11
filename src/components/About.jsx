import { useState } from "react";
import { C, DIFFERENTIATORS } from './constants.js';
import { Fade } from './hooks.jsx';

export default function About() {
  const [diffTab, setDiffTab] = useState(0);

  return (
    <section id="studio" style={{ padding:"7rem 3rem", borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:C.mist, marginBottom:"1.5rem" }}>About IndeliCraft</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2rem,3.5vw,3.5rem)", letterSpacing:"-0.01em", marginBottom:"1rem" }}>About</h2>
          <p style={{ fontSize:"0.9rem", color:C.mist, lineHeight:1.9, maxWidth:"680px", fontWeight:300, marginBottom:"4rem" }}>
            We are architects, interior designers, and creative professionals — yet our role expands the traditional scope of those disciplines. We provide strategic guidance, expert knowledge, and design excellence to our clients across Uganda and East Africa.
          </p>
        </Fade>

        {/* SPH Differentiator tabs + big image */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }}>
          {/* Left: tab list */}
          <div>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:600, fontSize:"0.72rem", letterSpacing:"0.16em", textTransform:"uppercase", color:C.mist, marginBottom:"1.5rem" }}>The IndeliCraft Difference</p>
            {DIFFERENTIATORS.map((d, i) => (
              <button key={i} onClick={() => setDiffTab(i)}
                style={{ width:"100%", display:"flex", alignItems:"center", gap:"1.2rem", padding:"1.1rem 0", borderTop:`1px solid ${C.rule}`, background:"none", border:"none", cursor:"pointer", textAlign:"left", transition:"all .25s" }}
              >
                <span style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"1.1rem", color: diffTab === i ? C.gold : C.mist, minWidth:"1.5rem", transition:"color .25s" }}>{d.n}</span>
                <span style={{ fontFamily:"'DM Sans', sans-serif", fontWeight: diffTab === i ? 600 : 400, fontSize:"0.88rem", color: diffTab === i ? C.ink : C.mist, flex:1, transition:"all .25s" }}>{d.title}</span>
                <span style={{ color: diffTab === i ? C.gold : C.rule, fontSize:"0.85rem", transition:"color .25s" }}>→</span>
              </button>
            ))}
            <div style={{ borderTop:`1px solid ${C.rule}` }} />
          </div>

          {/* Right: image + description */}
          <div>
            <div style={{ height:"380px", overflow:"hidden", marginBottom:"1.5rem" }}>
              <img key={diffTab} src={DIFFERENTIATORS[diffTab].img} alt={DIFFERENTIATORS[diffTab].title} style={{ animation:"fadeIn .5s ease, imgZoom 8s ease forwards" }} />
            </div>
            <div style={{ animation:"slideIn .4s ease" }} key={diffTab}>
              <p style={{ fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.16em", textTransform:"uppercase", color:C.mist, marginBottom:"0.5rem" }}>Featured Project</p>
              <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"1.05rem", color:C.inkMid, marginBottom:"1rem" }}>{DIFFERENTIATORS[diffTab].project}</p>
              <p style={{ fontSize:"0.84rem", color:C.mist, lineHeight:1.85, fontWeight:300 }}>{DIFFERENTIATORS[diffTab].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}