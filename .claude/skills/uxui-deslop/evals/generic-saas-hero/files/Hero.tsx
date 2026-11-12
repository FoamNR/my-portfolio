"use client";

import { useEffect, useState } from "react";

const WORDS = ["Faster", "Smarter", "Seamlessly"];

// Landing page hero for "Ledgerly" — bookkeeping app for Thai freelancers.
// Real facts from the founder (README): 1,200 paying users, exports e-Tax invoices
// accepted by the Revenue Department, reconciles PromptPay + K-Bank statements automatically.
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0b0c10] py-32 text-center">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[160px] -z-10" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-[0.2em] mb-8">
        ✨ Powered by AI
      </div>

      <h1 className="text-6xl font-black tracking-tight text-white mb-6">
        Supercharge your finances,{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          {WORDS[i]}
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
        Ledgerly is the all-in-one, cutting-edge platform that empowers you to seamlessly
        streamline your workflow and unlock the future of financial management.
      </p>

      <div className="flex justify-center gap-4 mb-16">
        <a href="/signup" className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-violet-600/40 hover:scale-105 transition-all">
          Get Started Free 🚀
        </a>
        <a href="/demo" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:scale-105 transition-all">
          Book a Demo
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {["Lightning Fast", "Bank-Grade Security", "AI-Powered Insights"].map((f) => (
          <div key={f} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">★</div>
            <div className="text-white font-bold">{f}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
