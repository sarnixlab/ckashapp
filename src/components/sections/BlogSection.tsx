import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  cardReveal,
  childReveal,
  liftHover,
  revealViewport,
  sectionReveal,
  staggeredCardTransition,
  subtleTap,
} from "@/lib/motion";

const posts = [
  {
    slug: "moving-stablecoins-across-chains",
    tag: "Guide",
    title: "Moving stablecoins across chains without the usual friction",
    date: "May 05, 2026",
    author: "Ckash Labs",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976798/ChatGPT_Image_May_5_2026_11_09_45_AM_zrztxq.avif",
  },
  {
    slug: "local-fiat-payments-stablecoins-everyday",
    tag: "Payments",
    title: "How local fiat payments can make stablecoins feel everyday",
    date: "May 02, 2026",
    author: "Product Team",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976797/ChatGPT_Image_May_5_2026_11_12_13_AM_uvqzam.avif",
  },
  {
    slug: "low-fee-routing-wallet-adoption",
    tag: "Network",
    title: "Why low-fee routing matters for wallet adoption",
    date: "April 28, 2026",
    author: "Research",
    image:
      "https://res.cloudinary.com/durncdjje/image/upload/v1777976798/ChatGPT_Image_May_5_2026_11_18_46_AM_bb8pat.avif",
  },
];

export default function BlogSection() {
  return (
    <motion.section
      id="blog"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="
        relative
        flex
        min-h-auto
        items-start
        bg-[#D3D3D3]
        px-4
        py-14
        text-[#111]
        sm:px-6
        md:min-h-screen
        md:items-center
        md:px-10
        md:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={childReveal}
          className="
            mb-8
            flex
            flex-col
            items-start
            justify-between
            gap-5
            md:mb-10
            md:flex-row
            md:items-end
          "
        >
          <div className="w-full max-w-3xl">
            <div className="section-tag justify-start text-black/45">
              <span className="section-tag-line bg-black/35" /> Blog
            </div>

            <h2 className="font-display text-[clamp(1.75rem,5.8vw,2.4rem)] font-semibold leading-[1.08] tracking-tight text-[#111] md:text-[clamp(2.2rem,3.6vw,3.15rem)]">
              Notes on stablecoins, payments, and wallet UX.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/55 sm:text-base md:text-lg">
              Product thinking, guides, and ecosystem updates from Ckash.
            </p>
          </div>

          <motion.div whileHover={liftHover} whileTap={subtleTap}>
            <Link
              to="/blog"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-[8px]
                bg-[#111]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#2a2a2a]
              "
            >
              Read all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={cardReveal}
              transition={staggeredCardTransition(index, 0.07)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="
                group
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[#111]
                shadow-[0_20px_60px_rgba(0,0,0,0.28)]
              "
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              >
                <div className="relative h-48 overflow-hidden bg-[#1a1a1a] xs:h-52 sm:h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      grayscale
                      transition
                      [transition-duration:900ms]
                      [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-105
                      group-hover:grayscale-0
                    "
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(17,17,17,0.85)_100%)]" />

                  <span className="absolute left-4 top-4 rounded-[4px] bg-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl sm:left-5 sm:top-5">
                    {post.tag}
                  </span>
                </div>

                <div className="bg-[#111] p-5 sm:p-6">
                  <h3 className="font-display text-[clamp(1.2rem,4.5vw,1.45rem)] font-semibold leading-[1.12] tracking-tight text-white">
                    {post.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:text-sm md:mt-8">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
