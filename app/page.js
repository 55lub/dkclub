"use client";
import { useState } from "react";
const QS = [
  { q: "5 + 5 =?", opt: ["9","10","11"], ans: "10" },
  { q: "India ni Capital?", opt: ["Delhi","Mumbai","Surat"], ans: "Delhi" },
];
export default function Page() {
  const [curr, setCurr] = useState(QS[0]);
  const [bal, setBal] = useState(100);
  const play = (o) => {
    if(o===curr.ans){ setBal(b=>b+8); alert("WIN"); } else { setBal(b=>b-10); alert("LOSS"); }
    setCurr(QS[Math.floor(Math.random()*QS.length)]);
  };
  return (
    <div style={{background:"#111",color:"#fff",minHeight:"100vh",textAlign:"center",padding:20}}>
      <h1>RAJA QUIZ CLUB</h1><h3>Balance: {bal}</h3>
      <h2>{curr.q}</h2>
      {curr.opt.map(x=><button key={x} onClick={()=>play(x)} style={{padding:15,margin:10,width:"80%"}}>{x}</button>)}
    </div>
  );
}￼Enter
