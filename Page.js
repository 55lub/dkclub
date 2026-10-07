"use client";
import { useState } from "react";

const QUESTIONS = [
  { q: "5 + 5 =?", opt: ["9","10","11"], ans: "10" },
  { q: "India ni Capital?", opt: ["Delhi","Mumbai","Surat"], ans: "Delhi" },
  { q: "Garba kya no famous?", opt: ["Gujarat","Punjab","Kerala"], ans: "Gujarat" },
];

export default function FinalGame() {
  const [curr, setCurr] = useState(QUESTIONS[0]);
  const [balance, setBalance] = useState(100);
  const [adminProfit, setAdminProfit] = useState(0);

  const playGame = (userAns) => {
    const bet = 10;
    if (balance < bet) return alert("Balance low!");

    const commission = bet * 0.10; // Taro 10% profit
    setAdminProfit(p => p + commission);

    if (userAns === curr.ans) {
      setBalance(b => b + bet * 0.8); // User ne 80% profit
      alert("WIN! 🎉");
    } else {
      setBalance(b => b - bet);
      alert("LOSS! Next try");
    }
    // Navo question
    setCurr(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);
  };

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh", textAlign: "center", padding: 20 }}>
      <h1 style={{ color: "gold" }}>RAJA QUIZ CLUB</h1>
      <h3>Balance: ₹{balance} | Admin Profit: ₹{adminProfit.toFixed(0)}</h3>

      <div style={{ background: "#222", padding: 20, borderRadius: 15, marginTop: 30 }}>
        <h2>{curr.q}</h2>
        {curr.opt.map(o => (
          <button key={o} onClick={() => playGame(o)} style={{ padding: 15, margin: 10, width: "80%", fontSize: 18, borderRadius: 10 }}>
            {o}
          </button>
        ))}
      </div>
      <p style={{ marginTop: 20, opacity: 0.6 }}>100% Fair & Legal | Skill Based | No Ban Risk</p>
    </div>
  );
    }
