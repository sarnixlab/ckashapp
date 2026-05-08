import { motion } from "framer-motion";
import { ReactNode } from "react";
import { childReveal, smoothEase } from "@/lib/motion";

export default function PhoneMockup({ children, float = true }: { children: ReactNode; float?: boolean }) {
  return (
    <motion.div
      variants={childReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto"
    >
      <motion.div
        animate={float ? { y: [0, -10, 0] } : undefined}
        transition={{ duration: 7.5, repeat: Infinity, ease: smoothEase }}
        whileHover={{ rotateY: -4, rotateX: 3, y: -6 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="relative w-[300px] h-[620px] rounded-[52px] p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-white/10"
      >
        <div className="relative h-full w-full rounded-[50px] bg-ink-2 hairline-strong overflow-hidden">
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <div className="absolute inset-0 pointer-events-none rounded-[50px]"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.07), transparent 35%)" }} />
          <div className="relative z-10 h-full w-full pt-12 px-5 pb-6">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
