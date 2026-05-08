import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { childReveal, smoothEase, subtleTap } from "@/lib/motion";

const steps = [
  {
    n: "01",
    label: "Wallet setup",
    title: "Create your wallet",
    body: "Sign up using Google or secure your wallet with a recovery phrase.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1778002918/010_1_xhwljy.png",
  },
  {
    n: "02",
    label: "Add funds",
    title: "Fund your wallet",
    body: "Deposit stablecoins or bridge assets across networks.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1778002920/013_1_xwrrck.png",
  },
  {
    n: "03",
    label: "Use Ckash",
    title: "Start using Ckash",
    body: "Send payments, swap tokens, and explore apps instantly.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1778002921/011_1_hoatvd.png",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 26 : -26,
    scale: 0.96,
    filter: "blur(10px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -26 : 26,
    scale: 0.96,
    filter: "blur(10px)",
  }),
};

function DecryptText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@";

  useEffect(() => {
    let frame = 0;
    const maxFrames = 16;

    const interval = window.setInterval(() => {
      frame += 1;
      const resolved = Math.floor((frame / maxFrames) * text.length);

      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < resolved) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (frame >= maxFrames) {
        window.clearInterval(interval);
        setDisplay(text);
      }
    }, 24);

    return () => window.clearInterval(interval);
  }, [text]);

  return <span aria-label={text}>{display}</span>;
}

function StepVisual({ step }: { step: (typeof steps)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.92, rotate: 3 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      className="relative mx-auto flex h-full w-full items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-32 -translate-y-1/2 rounded-full bg-white/4 blur-2xl sm:h-44 lg:h-56" />

      <img
        src={step.image}
        alt={`${step.title} illustration`}
        className="relative z-10 max-h-full w-full max-w-[280px] object-contain sm:max-w-[340px] md:max-w-[430px] lg:max-w-none"
      />
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const previousProgressRef = useRef(0);

  const [[activeIndex, direction], setActive] = useState<[number, number]>([
    0,
    1,
  ]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(0.9999, latest));
    const nextIndex = Math.min(
      steps.length - 1,
      Math.floor(progress * steps.length)
    );

    const nextDirection = latest >= previousProgressRef.current ? 1 : -1;
    previousProgressRef.current = latest;

    setActive((current) => {
      if (current[0] === nextIndex) return current;
      return [nextIndex, nextDirection];
    });
  });

  const goToStep = (index: number) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const scrollableHeight = section.offsetHeight - window.innerHeight;
    const targetProgress = index / steps.length + 0.03;

    window.scrollTo({
      top: sectionTop + scrollableHeight * targetProgress,
      behavior: "smooth",
    });
  };

  const step = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="snap-section relative h-[320svh] bg-ink"
    >
      <div className="sticky top-0 flex h-[100svh] overflow-hidden bg-[#111] px-4 py-5 sm:px-6 sm:py-7 md:px-10 md:py-10">
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col">
          <motion.div
            variants={childReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="relative z-20 shrink-0 border-b border-white/8 pb-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="section-tag mb-0">
                <span className="section-tag-line" /> Onboarding
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-bone/60">
                {step.n} / 03
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display max-w-[12ch] text-[clamp(2.25rem,9vw,4rem)] font-semibold leading-[0.94] tracking-tight text-bone md:max-w-none">
                Get started in seconds.
              </h2>

              <p className="section-subtitle mt-0 max-w-xs text-sm md:text-right md:text-base">
                Three steps. No friction.
              </p>
            </div>
          </motion.div>

          <div className="relative grid min-h-0 flex-1 grid-rows-[0.92fr_auto] gap-3 pt-4 sm:gap-5 md:grid-rows-none md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step.n}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.72, ease: smoothEase }}
                className="contents"
              >
                <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
                  {/* <div className="mb-2 inline-flex rounded-[5px] bg-white/8 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-bone/62 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.08)] sm:mb-3">
                    {step.label}
                  </div> */}

                  {/* <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash sm:text-[11px]">
                    Step {step.n}
                  </div> */}

                  <h3 className="mt-2 max-w-[12ch] font-display text-[clamp(2rem,8vw,3.8rem)] font-semibold leading-[0.96] tracking-tight text-bone sm:mt-3 md:max-w-xl">
                    <DecryptText text={step.title} />
                  </h3>

                  <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-ash sm:text-base md:max-w-md">
                    {step.body}
                  </p>

                  <motion.button
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={subtleTap}
                    transition={{ duration: 0.55, ease: smoothEase }}
                    className="mt-4 w-full max-w-[220px] rounded-[8px] bg-bone px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white sm:mt-5 md:w-auto md:max-w-none md:px-5"
                  >
                    Download App
                    <span className="ml-2">&rsaquo;</span>
                  </motion.button>
                </div>

                <div className="order-1 relative flex min-h-0 items-center justify-center overflow-hidden p-3  sm:p-5 md:order-2 md:h-full md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                  <StepVisual step={step} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-30 mt-4 shrink-0">
            <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 md:mx-0 md:justify-start">
              {steps.map((item, index) => (
                <button
                  key={item.n}
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-label={`Show step ${item.n}`}
                  className={`h-2 rounded-[8px] transition-all duration-500 ${
                    index === activeIndex
                      ? "w-12 bg-bone"
                      : "w-5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="mt-3 h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-bone"
                animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: smoothEase }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
