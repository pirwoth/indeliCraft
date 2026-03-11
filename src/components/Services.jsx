import { C, SECTORS } from './constants.js';
import { Fade } from './hooks.jsx';

export default function Services() {
  return (
    <section id="services" style={{ padding:"7rem 3rem", background:C.offwhite, borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:C.mist, marginBottom:"1rem" }}>Our Services</p>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"3rem" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2rem,3.5vw,3.5rem)", letterSpacing:"-0.01em" }}>Services</h2>
            <p style={{ fontSize:"0.82rem", color:C.mist, fontWeight:300, maxWidth:"300px", textAlign:"right", lineHeight:1.7 }}>We specialise in eight key service areas across Uganda and East Africa.</p>
          </div>
        </Fade>

        {/* SPH numbered list + image grid side by side */}
        <div style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:"5rem", alignItems:"start" }}>
          {/* Numbered list */}
          <div style={{ minWidth:"260px" }}>
            {SECTORS.map((s, i) => (
              <Fade key={i} delay={i * 0.05}>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"0.9rem 0", borderBottom:`1px solid ${C.rule}`, cursor:"default" }}
                  onMouseEnter={e => { e.currentTarget.querySelector(".sn").style.color = C.gold; e.currentTarget.querySelector(".st").style.color = C.gold; }}
                  onMouseLeave={e => { e.currentTarget.querySelector(".sn").style.color = C.mist; e.currentTarget.querySelector(".st").style.color = C.ink; }}
                >
                  <span className="sn" style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"0.9rem", color:C.mist, minWidth:"2rem", transition:"color .25s" }}>0{i+1}</span>
                  <span className="st" style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:400, fontSize:"0.85rem", color:C.ink, transition:"color .25s", flex:1 }}>{s.title}</span>
                  <span style={{ fontSize:"0.7rem", color:C.rule }}>→</span>
                </div>
              </Fade>
            ))}
          </div>

          {/* Image grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5px" }}>
            {SECTORS.map((s, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{ height: i < 4 ? "180px" : "150px", overflow:"hidden", position:"relative", cursor:"pointer" }}
                  onMouseEnter={e => { e.currentTarget.querySelector("img").style.transform = "scale(1.06)"; e.currentTarget.querySelector(".overlay").style.opacity = "1"; }}
                  onMouseLeave={e => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".overlay").style.opacity = "0"; }}
                >
                  <img src={s.img} alt={s.title} style={{ transition:"transform .6s ease" }} />
                  <div className="overlay" style={{ position:"absolute", inset:0, background:"rgba(26,25,22,0.55)", display:"flex", alignItems:"flex-end", padding:"0.8rem", opacity:0, transition:"opacity .35s" }}>
                    <div>
                      <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"0.9rem", color:C.white, lineHeight:1.2 }}>{s.title}</p>
                      <p style={{ fontSize:"0.6rem", fontWeight:600, letterSpacing:"0.14em", color:C.gold, marginTop:"0.2rem" }}>→</p>
                    </div>
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