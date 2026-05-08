import { motion } from "framer-motion";
import { ReactNode } from "react";
import { liftHover, microTransition, subtleTap } from "@/lib/motion";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
};

export default function CkButton({ children, variant = "primary", size = "md", onClick, className = "", icon }: Props) {
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-7 text-[15px]",
  };
  const variants: Record<string, string> = {
    primary: "bg-bone text-ink hover:bg-white",
    secondary: "bg-ink-3 text-bone hairline hover:bg-ink-2",
    ghost: "bg-transparent text-bone hover:bg-ink-3",
  };
  return (
    <motion.button
      whileHover={liftHover}
      whileTap={subtleTap}
      transition={microTransition}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-medium tracking-tight transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </motion.button>
  );
}
