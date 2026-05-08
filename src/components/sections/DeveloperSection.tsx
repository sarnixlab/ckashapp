import SectionWrapper from "../ck/SectionWrapper";
import { motion } from "framer-motion";
import { cardReveal, staggeredCardTransition } from "@/lib/motion";

const submissions = [
  { name: "Aurora v2.1", status: "Listed", color: "bg-emerald-400" },
  { name: "Loop Payments", status: "Testing", color: "bg-amber-400" },
  { name: "Pixel Arcade", status: "Pending Review", color: "bg-ash" },
];

export default function DeveloperSection() {
  return (
    <SectionWrapper
      id="developers"
      eyebrow="Developers"
      title="Ship to millions of stablecoin users."
      subtitle="Submit your app, run it through testing, and reach the Ckash distribution network."
    >
      <div className="glass soft-edge-refraction gray-holographic rounded-3xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ash">Developer dashboard</div>
            <div className="font-display text-xl text-bone mt-1">My submissions</div>
          </div>
          <button className="h-10 px-4 rounded-[8px] bg-bone text-ink text-sm font-medium">+ New app</button>
        </div>

        <div className="soft-edge-refraction rounded-2xl overflow-hidden hairline-strong">
          <div className="grid grid-cols-12 px-5 py-3 bg-ink-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ash">
            <div className="col-span-5">App</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2">Version</div>
            <div className="col-span-2 text-right">Updated</div>
          </div>
          {submissions.map((s, i) => (
            <motion.div key={s.name}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={staggeredCardTransition(i, 0.08)}
              whileHover={{ backgroundColor: "hsl(var(--ink-2))" }}
              className="grid grid-cols-12 px-5 py-4 items-center border-t border-white/5 bg-ink hover:bg-ink-2 transition-colors"
            >
              <div className="col-span-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl gloss hairline" />
                <span className="text-bone">{s.name}</span>
              </div>
              <div className="col-span-3 flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
                <span className="text-sm text-ash">{s.status}</span>
              </div>
              <div className="col-span-2 font-mono text-sm text-ash">v1.{i + 2}.0</div>
              <div className="col-span-2 font-mono text-sm text-ash text-right">2h ago</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px hairline-strong rounded-2xl overflow-hidden">
          {[
            ["Active users", "2.4M"],
            ["Avg. fee", "$0.001"],
            ["Uptime", "99.99%"],
          ].map(([k, v]) => (
            <div key={k} className="gray-holographic bg-ink p-5">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ash">{k}</div>
              <div className="mt-2 font-mono text-2xl text-bone">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
