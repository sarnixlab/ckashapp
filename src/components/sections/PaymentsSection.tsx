import { motion } from "framer-motion";
import SectionWrapper from "../ck/SectionWrapper";
import TokenBadge from "../ck/TokenBadge";
import { Check } from "lucide-react";
import { cardReveal, liftHover, subtleTap } from "@/lib/motion";

export default function PaymentsSection() {
  return (
    <SectionWrapper
      id="payments"
      eyebrow="Payments"
      title="Pay anywhere. Settle in local currency."
      subtitle="Your stablecoin balance, spendable at checkout."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-lg">
          <p className="text-lg text-bone leading-relaxed text-balance">
            Ckash converts stablecoins to local fiat at the moment of payment — at the rate you see, with no surprise fees.
          </p>
          <div className="space-y-3">
            {["Pay merchants in 40+ currencies", "Real-time FX, no hidden spread", "Instant confirmation"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm text-ash">
                <div className="h-5 w-5 rounded-full bg-ink-3 hairline flex items-center justify-center">
                  <Check className="h-3 w-3 text-bone" />
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -5, scale: 1.01 }}
          className="glass rounded-3xl p-7 max-w-md ml-auto w-full"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ash">Paying</div>
              <div className="mt-1 font-display text-xl text-bone">Lumière Café</div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-ink-3 hairline" />
          </div>

          <div className="my-8 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash">Total</div>
            <div className="font-display text-5xl font-medium text-bone mt-2">€42.<span className="text-ash">00</span></div>
            <div className="mt-2 text-xs text-ash font-mono">≈ 45.78 USDC · rate 1.090</div>
          </div>

          <div className="rounded-2xl bg-ink-3/60 hairline p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TokenBadge token="USDC" />
              <div>
                <div className="text-sm text-bone">USDC</div>
                <div className="text-[11px] text-ash font-mono">Balance 4,060.42</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-ash">Auto</span>
          </div>

          <motion.button
            whileHover={liftHover}
            whileTap={subtleTap}
            className="mt-5 w-full h-12 rounded-[8px] bg-bone text-ink font-medium text-sm">
            Confirm payment
          </motion.button>
          <div className="mt-3 text-center text-[11px] font-mono text-ash">Settles in &lt; 2 seconds</div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
