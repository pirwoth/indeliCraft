import { C } from './constants.js';
import { Fade } from './hooks.jsx';

export default function Process() {
  return (
    <section id="insights" style={{ padding:"7rem 3rem", borderBottom:`1px solid ${C.rule}` }}>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <Fade>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", color:C.mist, marginBottom:"1rem" }}>How We Work</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(2rem,3.5vw,3.5rem)", letterSpacing:"-0.01em", marginBottom:"4rem" }}>Our Process</h2>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"0", borderLeft:`1px solid ${C.rule}` }}>
          {[["01","Consultation","We listen deeply — understanding your idea, goals, timeline, and budget. No jargon, just honest conversation."],
            ["02","Concept","Initial design direction that reflects your goals, budget, and the specific context of your project."],
            ["03","Design & Viz","Detailed drawings and photorealistic 3D visuals that resolve every detail before construction begins."],
            ["04","Refinement","We present, listen, and refine until the design genuinely and completely represents your vision."],
            ["05","Delivery","Complete drawings, design files, and digital deliverables — ready for construction, print, or launch."],
          ].map(([n,t,d], i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ padding:"2.5rem 2rem", borderRight:`1px solid ${C.rule}` }}>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"3rem", color:C.rule, lineHeight:1, marginBottom:"2.5rem" }}>{n}</div>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:400, fontSize:"1.1rem", color:C.ink, marginBottom:"0.8rem" }}>{t}</div>
                <p style={{ fontSize:"0.78rem", color:C.mist, lineHeight:1.88, fontWeight:300 }}>{d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}