import type { Transition, Variants } from "framer-motion";

export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.96,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: smoothEase as Transition["ease"],
      staggerChildren: 0.12,
    },
  },
};

export const childReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: smoothEase as Transition["ease"],
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.94,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase as Transition["ease"],
    },
  },
};

export const revealViewport = {
  once: true,
  amount: 0.22,
  margin: "-80px",
} as const;

export const subtleTap = { scale: 0.985 };

export const liftHover = {
  y: -3,
  scale: 1.01,
};

export const microTransition = {
  duration: 0.55,
  ease: smoothEase,
} as const;

export const staggeredCardTransition = (index = 0, step = 0.07) => ({
  duration: 0.9,
  ease: smoothEase as Transition["ease"],
  delay: index * step,
});
