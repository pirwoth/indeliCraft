import { C } from './constants.js';

export default function Footer({ scrollTo }) {
  return (
    <footer style={{ background:C.ink, padding:"3rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"2rem", borderTop:`1px solid rgba(255,255,255,0.05)` }}>
      <div>
        <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:500, fontSize:"1.2rem", letterSpacing:"0.08em", color:C.white, marginBottom:"4px" }}>
          INDELI<span style={{ color:C.gold }}>CRAFT</span>
        </div>
        <div style={{ fontSize:"0.55rem", fontWeight:500, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)" }}>Architecture · Interior Design · Uganda</div>
      </div>
      <div style={{ display:"flex", gap:"2rem" }}>
        {["Studio","Projects","Services","Contact"].map(l => (
          <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:400, fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.32)", transition:"color .25s", padding:0 }}
            onMouseEnter={e => e.target.style.color = C.gold} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}
          >{l}</button>
        ))}
      </div>
      <div style={{ fontSize:"0.62rem", color:"rgba(255,255,255,0.18)", letterSpacing:"0.06em", textAlign:"right" }}>
        © 2025 IndeliCraft and Works Ltd<br />
        <span style={{ color:"rgba(255,255,255,0.1)" }}>Beautiful &amp; Functional</span>
      </div>
    </footer>
  );
}