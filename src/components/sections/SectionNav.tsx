import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

const sections = [
  { id: "hero", title: "Hero" },
  { id: "wallet", title: "What it does" },
  { id: "how-it-works", title: "How it works" },
  { id: "swap", title: "Swap" },
  { id: "security", title: "Security" },
  { id: "why-ckash", title: "Why Ckash" },
  { id: "blog", title: "Blog" },
  { id: "footer", title: "Footer" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportPoint = window.innerHeight * 0.38;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportPoint && rect.bottom >= viewportPoint) {
          current = section.id;
          break;
        }

        if (rect.top < viewportPoint) current = section.id;
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const activeIndex = sections.findIndex((section) => section.id === activeId);

  return (
    <nav aria-label="Section navigation" className="fixed left-5 top-28 z-40 hidden lg:block">
      <div className="relative flex flex-col items-start gap-3 py-2">
        <div className="absolute left-[7px] top-0 h-full w-px bg-white/10" />
        {sections.map((section, index) => {
          const isActive = section.id === activeId;
          const isPassed = index < activeIndex;
          const color = isActive ? "bg-bone" : isPassed ? "bg-bone/45" : "bg-white/22";

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex h-4 items-center"
              aria-label={section.title}
            >
              <motion.span
                className={`relative z-10 block rounded-full ${color}`}
                animate={{
                  width: isActive ? 26 : 13,
                  height: isActive ? 2 : 1,
                }}
                transition={{ duration: 0.45, ease: smoothEase }}
              />
              <span className="pointer-events-none absolute left-9 whitespace-nowrap rounded-[5px] bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-bone/80 opacity-0 shadow-[0_12px_36px_hsl(0_0%_0%/0.3),inset_0_1px_0_hsl(0_0%_100%/0.08)] backdrop-blur-xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:opacity-100">
                {section.title}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
