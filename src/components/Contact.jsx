import { C } from './constants.js';
import { Fade } from './hooks.jsx';

function ContactForm() {
  const base = { background:"none", border:"none", borderBottom:`1px solid ${C.rule}`, padding:"0.85rem 0", fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.85rem", color:C.ink, outline:"none", width:"100%", transition:"border-color .3s", borderRadius:0 };
  const f = e => e.target.style.borderBottomColor = C.ink;
  const b = e => e.target.style.borderBottomColor = C.rule;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
        <input type="text" placeholder="Full Name" style={base} onFocus={f} onBlur={b} />
        <input type="email" placeholder="Email Address" style={base} onFocus={f} onBlur={b} />
      </div>
      <input type="tel" placeholder="Phone Number" style={base} onFocus={f} onBlur={b} />
      <select defaultValue="" style={{ ...base, color:C.mist }} onFocus={f} onBlur={b}>
        <option value="" disabled>Service Interested In</option>
        {["Architectural Design","Interior Design","3D Visualization","Custom Utility Design","Farm Structures","Graphics & Web Design"].map(s => <option key={s}>{s}</option>)}
      </select>
      <textarea placeholder="Tell us about your project..." rows={4} style={{ ...base, resize:"none", marginTop:"0.5rem" }} onFocus={f} onBlur={b} />
      <button style={{ marginTop:"1.5rem", background:C.gold, border:"none", padding:"1rem", fontFamily:"'DM Sans', sans-serif", fontWeight:600, fontSize:"0.75rem", letterSpacing:"0.12em", textTransform:"uppercase", color:C.white, cursor:"pointer", transition:"background .3s" }}
        onMouseEnter={e => e.target.style.background = C.ink} onMouseLeave={e => e.target.style.background = C.gold}
      >Send Enquiry →</button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding:"7rem 3rem" }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:C.mist, marginBottom:"1rem" }}>Get In Touch</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2rem,3.5vw,3.5rem)", letterSpacing:"-0.01em", marginBottom:"4rem" }}>Contact</h2>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem" }}>
          <Fade>
            <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(1.3rem,2vw,1.9rem)", lineHeight:1.55, color:C.ink, marginBottom:"3rem" }}>
              Tell us about your project. We'll respond within 24 hours with clarity, honesty, and a plan.
            </p>
            {[["Phone","+256 775 671562  ·  +256 779 206448"],["Email","rwogie31@gmail.com"],["Location","Kampala, Uganda"],["ABWA Registration","Architecture Licence No. 2115"]].map(([l,v]) => (
              <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"1rem 0", borderBottom:`1px solid ${C.rule}`, alignItems:"center" }}>
                <span style={{ fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.16em", textTransform:"uppercase", color:C.mist }}>{l}</span>
                <span style={{ fontSize:"0.82rem", color:C.inkMid, fontWeight:300 }}>{v}</span>
              </div>
            ))}
          </Fade>
          <Fade delay={0.2}><ContactForm /></Fade>
        </div>
      </div>
    </section>
  );
}