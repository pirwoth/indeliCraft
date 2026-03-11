import { C } from './constants.js';
import { Fade } from './hooks.jsx';

export default function CTA({ scrollTo }) {
  return (
    <section style={{ padding:"6rem 3rem", borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"center" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2.5rem,4.5vw,5rem)", lineHeight:1.05, letterSpacing:"-0.01em" }}>
              Your Vision<br />
              <em style={{ fontStyle:"italic", color:C.mist }}>Deserves More</em><br />
              Than Average.
            </h2>
            <div>
              <p style={{ fontSize:"0.88rem", color:C.mist, lineHeight:1.9, fontWeight:300, marginBottom:"2.5rem" }}>
                Let's discuss your project and bring it to life with creativity, precision, and kingdom purpose. We respond to all enquiries within 24 hours.
              </p>
              <button onClick={() => scrollTo("contact")}
                style={{ background:C.gold, border:"none", padding:"1rem 2.5rem", fontFamily:"'DM Sans', sans-serif", fontWeight:600, fontSize:"0.78rem", letterSpacing:"0.1em", textTransform:"uppercase", color:C.white, cursor:"pointer", transition:"all .3s" }}
                onMouseEnter={e => e.target.style.background = C.ink} onMouseLeave={e => e.target.style.background = C.gold}
              >Request a Consultation →</button>
              <div style={{ marginTop:"2.5rem", display:"flex", gap:"2rem" }}>
                {[["+256 775 671562","Primary"],["rwogie31@gmail.com","Email"],["Kampala, Uganda","Location"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize:"0.6rem", fontWeight:600, letterSpacing:"0.16em", textTransform:"uppercase", color:C.mist, marginBottom:"0.25rem" }}>{l}</div>
                    <div style={{ fontSize:"0.8rem", color:C.inkMid, fontWeight:300 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}