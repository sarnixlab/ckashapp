import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";
import { childReveal, revealViewport, sectionReveal } from "@/lib/motion";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="grain min-h-screen bg-ink text-bone">
        <Navbar />
        <main className="px-5 pb-24 pt-36 sm:px-6 md:px-10">
          <div className="mx-auto max-w-3xl rounded-[18px] border border-white/10 bg-white/[0.035] p-8 text-center">
            <h1 className="font-display text-4xl font-semibold">Post not found</h1>
            <p className="mt-3 text-ash">The article may have moved or the link is no longer active.</p>
            <Link
              to="/blog"
              className="mt-7 inline-flex items-center gap-2 rounded-[8px] bg-bone px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogs
    .filter((item) => item.id !== post.id && item.category === post.category)
    .concat(blogs.filter((item) => item.id !== post.id && item.category !== post.category))
    .slice(0, 3);

  return (
    <div className="grain min-h-screen bg-ink text-bone">
      <Navbar />
      <main className="overflow-hidden">
        <motion.article
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          className="px-5 pb-16 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40"
        >
          <div className="mx-auto max-w-5xl">
            <motion.div variants={childReveal}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-bone/76 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-bone"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.header variants={childReveal} className="mt-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-bone/52">
                <span className="rounded-[4px] bg-white/8 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/70">
                  {post.category}
                </span>
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime} min read</span>
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.45rem,10vw,5rem)] font-semibold leading-[0.98] tracking-tight text-bone md:text-7xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ash md:text-lg">
                {post.excerpt}
              </p>
            </motion.header>

            <motion.div
              variants={childReveal}
              className="mt-10 overflow-hidden rounded-[18px] border border-white/10 bg-[#111] shadow-[0_24px_90px_rgba(0,0,0,0.34)]"
            >
              <img src={post.image} alt={post.title} className="h-[360px] w-full object-cover grayscale md:h-[540px]" />
            </motion.div>

            <motion.div
              variants={childReveal}
              className="mx-auto mt-12 max-w-3xl space-y-7 text-base leading-[1.85] text-bone/72 md:text-lg"
            >
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </motion.article>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="px-5 pb-24 sm:px-6 md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={childReveal} className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="section-tag mb-3">
                  <span className="section-tag-line" /> Related
                </div>
                <h2 className="font-display text-[clamp(2rem,7vw,2.75rem)] font-semibold leading-tight tracking-tight text-bone md:text-4xl">
                  Keep reading
                </h2>
              </div>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((item, index) => (
                <BlogCard key={item.id} post={item} index={index} />
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
