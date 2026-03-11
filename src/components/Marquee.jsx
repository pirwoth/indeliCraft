import { C } from './constants.js';

export default function Marquee() {
  return (
    <div style={{ background:C.ink, padding:"0.8rem 0", overflow:"hidden", whiteSpace:"nowrap" }}>
      <div style={{ display:"inline-flex", gap:"3rem", animation:"marquee 22s linear infinite" }}>
        {[...Array(4)].flatMap(() =>
          ["Architecture","Interior Design","3D Visualization","Utility Design","Farm Structures","Graphics & Web","Beautiful & Functional"].map((s,j) => (
            <span key={`${s}${j}`} style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:500, fontSize:"0.68rem", letterSpacing:"0.18em", color:"rgba(255,255,255,0.45)", textTransform:"uppercase" }}>
              {s} <span style={{ color:C.gold, marginLeft:"1rem" }}>✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}