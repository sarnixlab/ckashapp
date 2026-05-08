import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { childReveal, liftHover, smoothEase, subtleTap } from "@/lib/motion";
import type { Blog } from "@/data/blogs";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));

export default function FeaturedBlog({ post }: { post: Blog }) {
  return (
    <motion.section variants={childReveal} className="relative">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="section-tag mb-3">
            <span className="section-tag-line" /> Featured
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
            Editor's pick
          </h2>
        </div>
      </div>

      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.65, ease: smoothEase }}
        className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:grid lg:grid-cols-[1.08fr_0.92fr]"
      >
        <Link to={`/blog/${post.slug}`} className="relative block min-h-[320px] overflow-hidden bg-[#171717] lg:min-h-[520px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover grayscale transition [transition-duration:1000ms] group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_32%,rgba(10,10,10,0.72)_100%)]" />
        </Link>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-bone/48">
              <span className="rounded-[4px] bg-white/8 px-3 py-1.5 font-mono uppercase tracking-[0.18em] text-bone/70">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} min read</span>
            </div>

            <h3 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-bone md:text-5xl">
              {post.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ash md:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-bone/50">By {post.author}</span>
            <motion.div whileHover={liftHover} whileTap={subtleTap}>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-bone px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Read feature
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
}
