import { ReactNode } from "react";
import { motion } from "framer-motion";
import { childReveal, revealViewport, sectionReveal } from "@/lib/motion";

export default function SectionWrapper({
  children, id, className = "", eyebrow, title, subtitle,
}: {
  children: ReactNode; id?: string; className?: string;
  eyebrow?: string; title?: string; subtitle?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={`snap-section relative flex flex-col justify-center px-6 py-10 md:px-10 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <motion.div variants={childReveal} className="section-heading">
            {eyebrow && (
              <div className="section-tag">
                <span className="section-tag-line" /> {eyebrow}
              </div>
            )}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
