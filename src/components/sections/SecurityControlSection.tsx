import { motion } from "framer-motion";
import { LockKeyhole, ShieldCheck } from "lucide-react";

const securityImage =
  "https://res.cloudinary.com/durncdjje/image/upload/v1778139604/ChatGPT_Image_May_7__2026__08_00_09_AM-removebg-preview_p7ftcr.png";

export default function SecurityControlSection() {
  return (
    <section
      id="security"
      className="snap-section relative flex items-center overflow-hidden bg-[#070707] px-6 py-10 text-white md:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-30%] h-[320px] w-[320px] rounded-full bg-white/[0.06] blur-[90px]" />
        <div className="absolute bottom-[-35%] right-[-8%] h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
            <ShieldCheck className="h-4 w-4 text-white/70" />
            Security & control
          </div>

          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,9vw,3.65rem)] font-semibold leading-[0.98] tracking-tight text-white">
            Keep control of your stablecoins from the first tap.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
            Built to make wallet security feel simple, direct, and easy to
            understand.
          </p>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full min-h-[260px] items-center justify-center"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full bg-white/[0.05] blur-[80px]" />

          <motion.img
            src={securityImage}
            alt="Ckash wallet security and control interface"
            className="relative z-10 block h-auto max-h-[92%] w-full max-w-[560px] object-contain drop-shadow-[0_42px_120px_rgba(0,0,0,0.7)]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
