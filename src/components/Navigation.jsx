import { C } from './constants.js';

export default function Navigation({ scrollY, menuOpen, setMenuOpen, scrollTo }) {
  const navSolid = scrollY > 60;

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 3rem", background: navSolid ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: navSolid ? "blur(20px)" : "none", borderBottom: navSolid ? `1px solid ${C.rule}` : "none", transition:"all .45s ease" }}>
      {/* Logo */}
      <button onClick={() => scrollTo("hero")} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
        <div style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:500, fontSize:"1.3rem", letterSpacing:"0.08em", color: navSolid ? C.ink : C.white, transition:"color .4s" }}>
          INDELI<span style={{ color:C.gold }}>CRAFT</span>
        </div>
        <div style={{ fontSize:"0.48rem", fontWeight:500, letterSpacing:"0.24em", textTransform:"uppercase", color: navSolid ? C.mist : "rgba(255,255,255,0.5)", transition:"color .4s", marginTop:"1px" }}>and works ltd</div>
      </button>

      {/* Nav links */}
      <div style={{ display:"flex", gap:"2.2rem", alignItems:"center" }}>
        {["Studio","Projects","Services","Insights","Contact"].map(l => (
          <button key={l} onClick={() => scrollTo(l.toLowerCase())}
            style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:500, fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color: navSolid ? C.inkMid : "rgba(255,255,255,0.75)", transition:"color .25s, opacity .25s", padding:0 }}
            onMouseEnter={e => e.target.style.color = C.gold}
            onMouseLeave={e => e.target.style.color = navSolid ? C.inkMid : "rgba(255,255,255,0.75)"}
          >{l}</button>
        ))}
        <button onClick={() => scrollTo("contact")}
          style={{ background: navSolid ? C.ink : "rgba(255,255,255,0.12)", border:`1px solid ${navSolid ? C.ink : "rgba(255,255,255,0.3)"}`, padding:"0.5rem 1.3rem", fontFamily:"'DM Sans', sans-serif", fontWeight:500, fontSize:"0.7rem", letterSpacing:"0.12em", textTransform:"uppercase", color: navSolid ? C.white : C.white, cursor:"pointer", transition:"all .3s" }}
          onMouseEnter={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.borderColor = C.gold; }}
          onMouseLeave={e => { e.currentTarget.style.background = navSolid ? C.ink : "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = navSolid ? C.ink : "rgba(255,255,255,0.3)"; }}
        >Enquire</button>
      </div>
    </nav>
  );
}