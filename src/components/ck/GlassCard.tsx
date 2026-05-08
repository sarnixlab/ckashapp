import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { microTransition } from "@/lib/motion";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function GlassCard({ children, className = "", tilt = false, ...rest }: Props) {
  return (
    <motion.div
      whileHover={tilt ? { y: -5, scale: 1.01 } : undefined}
      transition={microTransition}
      className={`glass rounded-2xl ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
