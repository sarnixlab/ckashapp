import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { childReveal, liftHover, revealViewport, sectionReveal, smoothEase, subtleTap } from "@/lib/motion";

const leftImage = "https://res.cloudinary.com/durncdjje/image/upload/v1777993202/ChatGPT_Image_May_5_2026_03_53_07_PM_1_oxuujx.png";
const rightImage = "https://res.cloudinary.com/durncdjje/image/upload/v1777993283/ChatGPT_Image_May_5_2026_03_53_55_PM_1_t7zew2.png";

function SideImage({
  side,
  src,
  progress,
}: {
  side: "left" | "right";
  src: string;
  progress: MotionValue<number>;
}) {
  const travel = side === "left" ? "62vw" : "-62vw";
  const x = useTransform(progress, [0, 0.44, 0.88, 1], ["0vw", "0vw", travel, travel]);
  const y = useTransform(progress, [0, 0.44, 0.68, 0.88, 1], [34, 0, -16, 0, 0]);
  const rotate = useTransform(progress, [0, 0.44, 0.88, 1], [0, 0, side === "left" ? 2.4 : -2.4, 0]);
  const scale = useTransform(progress, [0, 0.44, 0.68, 0.88, 1], [0.98, 1, 0.96, 1, 1]);

  return (
    <motion.img
      src={src}
      alt=""
      style={{ x, y, rotate, scale }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 1, ease: smoothEase }}
      className={`pointer-events-none absolute bottom-0 hidden h-[90%] w-auto object-contain lg:block ${side === "left" ? "left-0" : "right-0"}`}
    />
  );
}

export default function SwapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="swap"
      ref={sectionRef}
      className="mist-section grain-texture snap-section relative flex items-center overflow-hidden px-6 py-10 text-white md:px-10"
    >
      <div className="absolute inset-0 opacity-[0.11] " />
      <SideImage side="left" src={leftImage} progress={scrollYProgress} />
      <SideImage side="right" src={rightImage} progress={scrollYProgress} />

      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1fr_0.9fr]"
      >
        <div className="hidden lg:block" />

        <motion.div
          variants={childReveal}
          className="mx-auto max-w-xl rounded-[18px] px-6 py-8 text-center md:px-8"
        >
          <div className="section-tag justify-center text-white/62">
            <span className="section-tag-line bg-white/35" /> Swap
          </div>
          <h2 className="section-title text-white">
            Swap stablecoins instantly.
          </h2>
          <p className="section-subtitle mx-auto text-white/58">
            Routed for low fees, tight spreads, and fast settlement across supported networks.
          </p>

          

          <motion.a
            href="#download"
            whileHover={liftHover}
            whileTap={subtleTap}
            className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-3 text-sm font-semibold text-[#111] transition-colors hover:bg-white/88"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <div className="hidden lg:block" />
      </motion.div>
    </section>
  );
}
