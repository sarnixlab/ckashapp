import { motion } from "framer-motion";
import {
  cardReveal,
  sectionReveal,
  revealViewport,
  staggeredCardTransition,
} from "@/lib/motion";

const features = [
  {
    title: "Multi-chain wallet",
    body: "One wallet for balances across every supported network.",
    fullContent:
      "CKash gives users a single wallet experience across supported chains. Track assets, move funds, and manage stablecoin balances without switching between fragmented wallets.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976798/ChatGPT_Image_May_5_2026_11_09_45_AM_zrztxq.avif",
  },
  {
    title: "Stablecoin swaps",
    body: "Move between USDT, USDC, and more with clean routing.",
    fullContent:
      "Swap between major stablecoins with a smooth conversion flow built for speed, clarity, and low-friction execution across supported liquidity routes.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976798/ChatGPT_Image_May_5_2026_11_10_44_AM_zlbunq.avif",
  },
  {
    title: "Local fiat payments",
    body: "Pay in stablecoins and settle locally at checkout.",
    fullContent:
      "CKash connects stablecoin balances to real-world payments, helping users pay digitally while merchants or receivers settle through local fiat rails.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976797/ChatGPT_Image_May_5_2026_11_12_13_AM_uvqzam.avif",
  },
  {
    title: "Dapp discovery",
    body: "Find useful finance, payment, and productivity apps.",
    fullContent:
      "Discover trusted dapps directly inside the CKash ecosystem, from payments and DeFi tools to useful services built around stablecoin utility.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1778062386/ChatGPT_Image_May_5_2026_11_20_50_AM_yf8bfv.avif",
  },
  {
    title: "Non-custodial",
    body: "Your wallet stays controlled by your own keys.",
    fullContent:
      "CKash is designed around user ownership. Your assets remain controlled by your wallet keys, giving you direct access without relying on a custodian.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976797/ChatGPT_Image_May_5_2026_11_17_47_AM_sqmkwv.avif",
  },
  {
    title: "Low-fee network",
    body: "Route activity through cheaper paths by default.",
    fullContent:
      "CKash helps users reduce unnecessary costs by routing supported transactions through efficient networks and low-fee payment paths.",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976798/ChatGPT_Image_May_5_2026_11_18_46_AM_bb8pat.avif",
  },
];

export default function FeatureGrid() {
  return (
    <motion.section
      id="wallet"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="snap-section relative overflow-hidden px-5 py-14 sm:px-6 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div variants={sectionReveal} className="mb-7 md:mb-8">
          <div className="mb-4 flex items-center gap-3 text-sm text-white/50">
            <span className="h-px w-10 bg-white/20" />
            What it does
          </div>

          <h2 className="max-w-3xl font-display text-[clamp(2.35rem,10vw,4rem)] font-semibold leading-[0.98] tracking-tight text-white md:text-6xl">
            Everything stablecoins should be.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55 sm:text-base md:text-lg">
            One wallet. Built for movement, payments, and a real ecosystem of
            apps.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardReveal}
              transition={staggeredCardTransition(index, 0.06)}
              className="group h-[300px] [perspective:1800px] sm:h-[340px] md:h-[380px]"
            >
              {/* FLIP WRAPPER */}
              <div className="relative h-full w-full rounded-[28px] [transform-style:preserve-3d] transition-all duration-1000 ease-smooth group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT CARD */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#1f1f1f] shadow-[0_20px_80px_rgba(0,0,0,0.45)] [backface-visibility:hidden]">
                  
                  {/* IMAGE */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover object-center transition-all duration-1400 ease-smooth group-hover:scale-[1.06]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.08),transparent)]" />

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="max-w-[260px] font-display text-[clamp(1.55rem,7vw,1.9rem)] font-semibold leading-[1] tracking-tight text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* BORDER */}
                  <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/[0.08]" />
                </div>

                {/* BACK CARD */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#2a2a2a] [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                  
                  {/* GLASS OVERLAY */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />

                  {/* SOFT LIGHT */}
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.05] blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-black/40 blur-3xl" />

                  {/* CONTENT */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
                    
                    {/* TAG */}
                    <div>
                      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] tracking-wide text-white/50 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
                        {feature.title}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="font-display text-[clamp(1.25rem,5.5vw,1.65rem)] font-semibold leading-[1.08] tracking-tight text-white">
                        {feature.body}
                      </h3>

                      <p className="mt-4 text-[13px] leading-relaxed text-white/62 sm:mt-5 sm:text-sm">
                        {feature.fullContent}
                      </p>
                    </div>
                  </div>

                  {/* BORDER */}
                  <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/[0.08]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
