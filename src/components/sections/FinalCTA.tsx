import { motion } from "framer-motion";
import CkButton from "../ck/CkButton";
import { ArrowRight } from "lucide-react";
import { childReveal, revealViewport, sectionReveal } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="download" className="snap-section relative flex items-center justify-center px-6 py-10">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mx-auto w-full max-w-7xl text-center"
      >
        <motion.div
          variants={childReveal}
          className="section-heading section-heading-center"
        >
          <div className="section-tag justify-center">
            <span className="section-tag-line" /> Download
          </div>
          <h2 className="section-title">
            Move stablecoins like cash.
          </h2>
          <p className="section-subtitle mx-auto">
            Launch Ckash or read the docs to start building with stablecoin payments.
          </p>
        </motion.div>
        <motion.div
          variants={childReveal}
          className="mt-5 flex items-center justify-center gap-3"
        >
          <CkButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>Launch Ckash</CkButton>
          <CkButton size="lg" variant="secondary">Read the docs</CkButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
