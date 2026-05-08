import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import {
  cardReveal,
  childReveal,
  smoothEase,
} from "@/lib/motion";

const rows = [
  { feature: "Multichain by default", ckash: true, wallets: false, fintech: false },
  { feature: "dApp distribution layer", ckash: true, wallets: false, fintech: false },
  { feature: "Self-custodial", ckash: true, wallets: true, fintech: false },
  { feature: "Google / Apple sign-in", ckash: true, wallets: false, fintech: true },
  { feature: "Free swaps, $0.05 fees", ckash: true, wallets: false, fintech: false },
  { feature: "Borderless payments", ckash: true, wallets: true, fintech: false },
];

const columns = [
  { key: "ckash", label: "Ckash" },
  { key: "wallets", label: "Single-chain wallets" },
  { key: "fintech", label: "Traditional fintech" },
] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase as Transition["ease"],
    },
  },
};

function Mark({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
        active
          ? "bg-white text-[#111]"
          : "border border-white/20 text-white/30"
      }`}
    >
      {active ? (
        <Check className="h-4 w-4" strokeWidth={2} />
      ) : (
        <X className="h-4 w-4" strokeWidth={1.6} />
      )}
    </span>
  );
}

export default function WhyCkashSection() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  return (
    <section
      id="why-ckash"
      className="
        mist-section 
        grain-texture 
        relative 
        block 
        w-full 
        overflow-hidden 
        bg-[#1a1a1a] 
        px-4 
        py-14 
        text-white
        sm:px-6 
        md:px-10 
        lg:py-20
      "
    >
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div
          variants={childReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mb-8 max-w-2xl sm:mb-10"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            <span className="h-px w-8 bg-white/30" /> Compare
          </div>

          <h2 className="font-display text-[clamp(1.75rem,5.8vw,2.45rem)] font-semibold leading-[1.08] tracking-tight text-white md:text-[clamp(2.25rem,3.8vw,3.25rem)]">
            Why Ckash?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            Compare Ckash with single-chain wallets and traditional fintech apps.
          </p>
        </motion.div>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="
            glass 
            soft-edge-refraction 
            gray-holographic 
            w-full 
            overflow-hidden 
            rounded-[16px] 
            border 
            border-white/10
          "
        >
          <div
            className="
              w-full
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              [-webkit-overflow-scrolling:touch]
              [&::-webkit-scrollbar]:h-2
              [&::-webkit-scrollbar-track]:bg-white/[0.04]
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-white/20
            "
          >
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="sticky left-0 z-20 min-w-[190px] bg-[#1a1a1a] px-4 py-4 text-[10px] font-mono uppercase tracking-[0.18em] text-white/40 sm:min-w-[240px] sm:px-6 sm:py-5">
                    Feature
                  </th>

                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className={`min-w-[170px] px-4 py-4 text-center text-xs font-semibold sm:px-6 sm:py-5 sm:text-sm ${
                        column.key === "ckash" ? "text-white" : "text-white/50"
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <motion.tbody
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
              >
                {rows.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    variants={rowVariant}
                    onViewportEnter={() =>
                      setVisibleRows((prev) =>
                        prev.includes(index) ? prev : [...prev, index]
                      )
                    }
                    className="group border-b border-white/5 last:border-b-0"
                  >
                    <td className="sticky left-0 z-10 min-w-[190px] bg-[#1a1a1a] px-4 py-4 text-xs font-medium text-white/85 group-hover:text-white sm:min-w-[240px] sm:px-6 sm:py-5 sm:text-sm">
                      {row.feature}
                    </td>

                    {columns.map((column) => {
                      const isHighlighted =
                        column.key === "ckash" && visibleRows.includes(index);

                      return (
                        <motion.td
                          key={column.key}
                          className="px-4 py-4 text-center sm:px-6 sm:py-5"
                          animate={
                            isHighlighted
                              ? {
                                  backgroundColor: "rgba(255,255,255,0.04)",
                                }
                              : {}
                          }
                          transition={{
                            duration: 0.45,
                            ease: smoothEase as Transition["ease"],
                          }}
                        >
                          <Mark active={row[column.key]} />
                        </motion.td>
                      );
                    })}
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>

          <div className="flex items-center justify-center border-t border-white/5 px-4 py-3 md:hidden">
            <p className="text-[11px] tracking-wide text-white/35">
              Swipe horizontally
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
