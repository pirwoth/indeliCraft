import { C } from './constants.js';
import { Fade } from './hooks.jsx';

export default function DesigningSection() {
  return (
    <section style={{ padding:"6rem 3rem", borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:C.mist, marginBottom:"2rem" }}>Our Belief</p>
          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(1.1rem,1.6vw,1.5rem)", color:C.inkMid, lineHeight:1.85, maxWidth:"680px", marginBottom:"5rem" }}>
            We believe that every building should be designed with the assumption that it will last longer than our lifetime — beautiful, functional, and purposeful for generations to come.
          </p>
        </Fade>

        {/* SPH "Designing / Tomorrow / Today" — two-image split with giant type */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5px", position:"relative" }}>
          <Fade delay={0.1}>
            <div style={{ position:"relative", overflow:"hidden" }}>
              <div style={{ height:"60vh" }}>
                <img src="/images/designing-tomorrow.png" alt="Design Tomorrow" />
                <div style={{ position:"absolute", inset:0, background:"rgba(26,25,22,0.35)" }} />
              </div>
              <div style={{ position:"absolute", bottom:"2rem", left:"2rem" }}>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:"0.5rem" }}>Tomorrow</div>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"1.3rem", color:C.white, lineHeight:1.4 }}>Architecture that endures generations</p>
              </div>
            </div>
          </Fade>
          <Fade delay={0.2}>
            <div style={{ position:"relative", overflow:"hidden" }}>
              <div style={{ height:"60vh" }}>
                <img src="/images/designing-today.png" alt="Design Today" />
                <div style={{ position:"absolute", inset:0, background:"rgba(26,25,22,0.35)" }} />
              </div>
              <div style={{ position:"absolute", bottom:"2rem", left:"2rem" }}>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:"0.5rem" }}>Today</div>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"1.3rem", color:C.white, lineHeight:1.4 }}>Interiors that elevate everyday moments</p>
              </div>
            </div>
          </Fade>

          {/* Giant overlapping word — SPH signature */}
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:10, pointerEvents:"none" }}>
            <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(3rem,8vw,8rem)", color:C.white, letterSpacing:"-0.02em", lineHeight:1, textAlign:"center", textShadow:"0 2px 40px rgba(0,0,0,0.4)", whiteSpace:"nowrap" }}>Designing</div>
          </div>
        </div>
      </div>
    </section>
  );
}