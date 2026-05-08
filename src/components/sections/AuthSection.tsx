import SectionWrapper from "../ck/SectionWrapper";
import { motion } from "framer-motion";
import { KeyRound } from "lucide-react";
import { cardReveal, liftHover, subtleTap } from "@/lib/motion";

export default function AuthSection() {
  return (
    <SectionWrapper
      id="auth"
      eyebrow="Sign in"
      title="Your wallet. Your keys."
      subtitle="Sign in with the providers you trust, or bring your own recovery phrase."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={liftHover}
          className="glass rounded-3xl p-8 max-w-md"
        >
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 rounded-2xl gloss hairline mb-4" />
            <h3 className="font-display text-2xl text-bone">Welcome to Ckash</h3>
            <p className="text-sm text-ash mt-1">Sign in to continue</p>
          </div>

          <div className="space-y-2.5">
            <motion.button whileTap={subtleTap} className="w-full h-12 rounded-[8px] bg-bone text-ink text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-white transition-colors">
              <span style={{ fontFamily: "system-ui" }}>G</span> Continue with Google
            </motion.button>
            <motion.button whileTap={subtleTap} className="w-full h-12 rounded-[8px] bg-ink-3 hairline text-bone text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-ink-2 transition-colors">
              <span style={{ fontFamily: "system-ui" }}></span> Continue with Apple
            </motion.button>
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ash">or</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <motion.button whileTap={subtleTap} className="w-full h-12 rounded-[8px] bg-transparent hairline text-bone text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-ink-3 transition-colors">
              <KeyRound className="h-4 w-4" /> Use recovery phrase
            </motion.button>
          </div>

          <p className="text-[11px] text-ash text-center mt-6 leading-relaxed">
            Self-custodial. Your keys never leave your device.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-md">
          {[
            { t: "Self-custodial by default", b: "Keys live on your device, encrypted with biometrics." },
            { t: "Recoverable, never lost", b: "Optional encrypted backups via your provider." },
            { t: "Audited end-to-end", b: "Cryptography reviewed by leading security firms." },
          ].map((x) => (
            <div key={x.t}>
              <div className="font-display text-lg text-bone">{x.t}</div>
              <p className="text-sm text-ash mt-1 leading-relaxed">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
