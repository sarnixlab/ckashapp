import { motion } from "framer-motion";
import SectionWrapper from "../ck/SectionWrapper";
import CkButton from "../ck/CkButton";
import { Search } from "lucide-react";
import { cardReveal, staggeredCardTransition, subtleTap } from "@/lib/motion";

const apps = [
  { name: "Aurora", cat: "Finance", desc: "Yield on idle stablecoins" },
  { name: "Tide", cat: "Payments", desc: "Cross-border invoicing" },
  { name: "Forge", cat: "Tools", desc: "On-chain accounting" },
  { name: "Atlas", cat: "Finance", desc: "Stablecoin treasury" },
  { name: "Pixel", cat: "Games", desc: "Pay-to-play arcade" },
  { name: "Loop", cat: "Payments", desc: "Recurring subscriptions" },
];

const cats = ["All", "Finance", "Payments", "Tools", "Games"];

export default function DappSection() {
  return (
    <SectionWrapper
      id="dapps"
      eyebrow="Ecosystem"
      title="A network of apps, in one wallet."
      subtitle="Discover finance, payments, tools and games — built natively on Ckash."
    >
      <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
        <div className="glass flex items-center gap-2 rounded-full px-4 h-10 w-full max-w-sm">
          <Search className="h-4 w-4 text-ash" />
          <input placeholder="Search apps..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-ash text-bone" />
        </div>
        <div className="flex gap-1 glass rounded-full p-1">
          {cats.map((c, i) => (
            <button key={c}
              className={`px-3.5 h-8 text-[12px] rounded-[8px] transition-colors ${i === 0 ? "bg-bone text-ink" : "text-ash hover:text-bone"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="soft-edge-refraction grid grid-cols-2 md:grid-cols-3 gap-px rounded-2xl overflow-hidden hairline-strong">
        {apps.map((a, i) => (
          <motion.div
            key={a.name}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={staggeredCardTransition(i, 0.05)}
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={subtleTap}
            className="gray-holographic bg-ink p-6 hover:bg-ink-2 transition-colors cursor-pointer"
          >
            <div className="h-12 w-12 rounded-2xl gloss hairline" />
            <div className="mt-5 flex items-center justify-between">
              <h3 className="font-display text-base font-medium text-bone">{a.name}</h3>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ash">{a.cat}</span>
            </div>
            <p className="mt-1 text-sm text-ash">{a.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CkButton variant="secondary">Submit your app</CkButton>
      </div>
    </SectionWrapper>
  );
}
