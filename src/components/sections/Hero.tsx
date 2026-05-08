import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { liftHover, smoothEase, subtleTap } from "@/lib/motion";

const backOverlay =
  "https://res.cloudinary.com/durncdjje/image/upload/v1778050039/Frame_2121457564_ayxw32.svg";

const mainPhone =
  "https://res.cloudinary.com/durncdjje/image/upload/v1778050043/01-Free-iPhone-15-Pro-Mockup-1_1x_1_1_hhimx9.svg";

const frontOverlay =
  "https://res.cloudinary.com/durncdjje/image/upload/v1778050041/Frame_2121457565_m4lf3d.svg";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 38,
    mass: 0.95,
  });

  const introTextOpacity = useTransform(smooth, [0, 0.2], [1, 0]);
  const introTextY = useTransform(smooth, [0, 0.2], [0, -28]);

  const imageOpacity = useTransform(
    smooth,
    isMobile ? [0, 0.62, 0.8] : [0, 0.55, 0.72],
    [1, 1, 0]
  );
  const imageScale = useTransform(
    smooth,
    isMobile ? [0, 0.62, 0.8] : [0, 0.55, 0.72],
    [1, 1.08, 0.94]
  );
  const imageBlur = useTransform(
    smooth,
    isMobile ? [0.62, 0.8] : [0.55, 0.72],
    ["blur(0px)", "blur(16px)"]
  );

  const finalOpacity = useTransform(
    smooth,
    isMobile ? [0.76, 0.9] : [0.62, 0.78],
    [0, 1]
  );
  const finalScale = useTransform(
    smooth,
    isMobile ? [0.76, 0.9] : [0.62, 0.78],
    [0.9, 1]
  );
  const finalY = useTransform(
    smooth,
    isMobile ? [0.76, 0.9] : [0.62, 0.78],
    [40, 0]
  );
  const finalBlur = useTransform(
    smooth,
    isMobile ? [0.76, 0.9] : [0.62, 0.78],
    ["blur(14px)", "blur(0px)"]
  );

  const stackX = useTransform(smooth, [0.22, 0.65], [0, -100]);
  const stackY = useTransform(
    smooth,
    [0.34, 0.62, 0.8],
    isMobile ? [0, -108, -156] : [0, -24, -40]
  );
  const stackScale = useTransform(smooth, [0.22, 0.7], [1, 1.08]);

  const backX = useTransform(smooth, [0, 0.26, 0.7], [-155, -155, -360]);
  const backY = useTransform(smooth, [0, 0.26, 0.7], [18, 18, -18]);
  const backRotate = useTransform(smooth, [0, 0.26, 0.7], [-7, -7, -14]);
  const backOpacity = useTransform(smooth, [0, 0.52, 0.7], [1, 1, 0]);

  const frontX = useTransform(smooth, [0, 0.26, 0.7], [155, 155, 380]);
  const frontY = useTransform(smooth, [0, 0.26, 0.7], [24, 24, -22]);
  const frontRotate = useTransform(smooth, [0, 0.26, 0.7], [6, 6, 14]);
  const frontOpacity = useTransform(smooth, [0, 0.52, 0.7], [1, 1, 0]);

  const phoneY = useTransform(smooth, [0, 0.7], [0, -18]);
  const phoneRotate = useTransform(smooth, [0, 0.7], [0, -0.8]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[185vh] overflow-clip text-white md:h-[180vh]"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_46%,rgba(255, 255, 255, 0),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_45%,rgba(0,0,0,0.5))]" />

        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale, filter: imageBlur }}
          className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 content-start gap-4 px-5 pb-8 pt-28 sm:px-8 sm:pt-32 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-2 md:px-10 md:py-4 lg:px-16"
        >
          <motion.div
            style={{ opacity: introTextOpacity, y: introTextY }}
            className="relative z-30 mx-auto max-w-[500px] text-center md:mx-0 md:text-left"
          >
            <div className="section-tag justify-center text-white/60 md:justify-start">
              <span className="section-tag-line bg-white/35" /> Stablecoin wallet
            </div>

            <h1 className="font-display text-[clamp(2rem,6vw,2.55rem)] font-semibold leading-[1.06] tracking-tight text-white md:text-[clamp(2.55rem,4vw,3.45rem)]">
              Built for the next generation of multichain finance.
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-white/52 sm:text-base md:mx-0 md:mt-5 md:text-lg">
              Manage assets, discover apps, send payments, and move across chains
              effortlessly, in one smooth wallet experience.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <motion.a
                href="#download"
                whileHover={liftHover}
                whileTap={subtleTap}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="inline-flex h-12 w-full max-w-[210px] items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-[#080808] shadow-[0_18px_60px_rgba(255,255,255,0.14)] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Download App
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={liftHover}
                whileTap={subtleTap}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="inline-flex h-12 w-full max-w-[210px] items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/[0.1] sm:w-auto"
              >
                <PlayCircle className="h-4 w-4" />
                View Demo
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            style={{ x: stackX, y: stackY, scale: stackScale }}
            className="relative mx-auto flex min-h-[300px] w-full items-center justify-center sm:min-h-[430px] md:min-h-[560px]"
          >
            <motion.img
              src={backOverlay}
              alt=""
              style={{
                x: backX,
                y: backY,
                rotate: backRotate,
                opacity: backOpacity,
              }}
              whileHover={{
                scale: 1.04,
                rotate: -18,
                y: -6,
                filter: "drop-shadow(0 38px 95px rgba(255,255,255,0.18))",
              }}
              whileTap={subtleTap}
              transition={{ duration: 0.65, ease: smoothEase }}
              className="absolute z-10 w-[170px] max-w-none cursor-pointer select-none drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:w-[230px] md:w-[285px] lg:w-[325px]"
            />

            <motion.img
              src={mainPhone}
              alt="Ckash phone mockup"
              style={{ y: phoneY, rotate: phoneRotate }}
              className="relative z-20 w-[180px] max-w-none select-none drop-shadow-[0_50px_140px_rgba(0,0,0,0.78)] sm:w-[245px] md:w-[305px] lg:w-[345px]"
            />

            <motion.img
              src={frontOverlay}
              alt=""
              style={{
                x: frontX,
                y: frontY,
                rotate: frontRotate,
                opacity: frontOpacity,
              }}
              whileHover={{
                scale: 1.04,
                rotate: 18,
                y: -7,
                filter: "drop-shadow(0 38px 95px rgba(255,255,255,0.2))",
              }}
              whileTap={subtleTap}
              transition={{ duration: 0.65, ease: smoothEase }}
              className="absolute z-30 w-[165px] max-w-none cursor-pointer select-none drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)] sm:w-[220px] md:w-[275px] lg:w-[315px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            opacity: finalOpacity,
            scale: finalScale,
            y: finalY,
            filter: finalBlur,
          }}
          className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-5 text-center sm:px-8"
        >
          <div className="pointer-events-auto mx-auto mt-16 w-full max-w-5xl px-5 py-8 sm:mt-20 sm:px-8 sm:py-10 md:mt-0">
            <h2 className="mx-auto max-w-4xl font-display text-[clamp(1.9rem,6vw,2.8rem)] font-semibold leading-[1.08] tracking-tight text-white md:text-[clamp(2.35rem,4vw,3.35rem)]">
              Not just a wallet, but a gateway to multichain finance, payment
              and Web3 distribution.
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <motion.a
                href="#download"
                whileHover={liftHover}
                whileTap={subtleTap}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="flex h-[68px] w-full max-w-[215px] items-center justify-center gap-2.5 rounded-[8px] border border-white/10 bg-white text-[#080808] shadow-[0_16px_45px_rgba(255,255,255,0.12)] transition hover:bg-white/90"
              >
                <FaApple className="h-10 w-10" />
                <div className="text-left">
                  <span className="block text-[12px] font-medium leading-none text-black/60">
                    Download on
                  </span>
                  <span className="block text-[18px] font-bold leading-tight">
                    App Store
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="#download"
                whileHover={liftHover}
                whileTap={subtleTap}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="flex h-[68px] w-full max-w-[215px] items-center justify-center gap-2.5 rounded-[8px] border border-white/10 bg-white/[0.08] text-white shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/[0.12]"
              >
                <IoLogoGooglePlaystore className="h-10 w-10 text-white" />
                <div className="text-left">
                  <span className="block text-[12px] font-medium leading-none text-white/55">
                    Get it on
                  </span>
                  <span className="block text-[18px] font-bold leading-tight">
                    Google Play
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[60] h-20 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>
    </section>
  );
}
