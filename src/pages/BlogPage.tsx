import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogSearchFilter, { type BlogSort } from "@/components/blog/BlogSearchFilter";
import { blogCategories, blogs } from "@/data/blogs";
import { childReveal, revealViewport, sectionReveal } from "@/lib/motion";

const sortBlogs = (sort: BlogSort) => {
  return [...blogs].sort((a, b) => {
    if (sort === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sort === "popular") return b.popularity - a.popularity;
    if (sort === "shortest") return a.readTime - b.readTime;
    if (sort === "longest") return b.readTime - a.readTime;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<BlogSort>("newest");
  const featuredPost = blogs[0];

  const visiblePosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sortBlogs(sort).filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchable = `${post.title} ${post.category} ${post.author} ${post.excerpt}`.toLowerCase();
      const matchesSearch = query.length === 0 || searchable.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search, sort]);

  return (
    <div className="grain min-h-screen bg-ink text-bone">
      <Navbar />
      <main className="overflow-hidden">
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          className="relative px-5 pb-16 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={childReveal} className="max-w-4xl">
              <div className="section-tag">
                <span className="section-tag-line" /> Ckash Journal
              </div>
              <h1 className="font-display text-[clamp(2rem,6.4vw,3rem)] font-semibold leading-[1.06] tracking-tight text-bone md:text-[clamp(2.75rem,4.6vw,4.25rem)]">
                Explore our lastest Information.
              </h1>
              
            </motion.div>

            {/* <motion.div
              variants={childReveal}
              className="mt-10 grid gap-3 border-y border-white/10 py-5 text-sm text-bone/52 sm:grid-cols-3"
            >
              <span>{blogs.length} published notes</span>
              <span>{blogCategories.length - 1} editorial lanes</span>
              <span>Updated for product teams and builders</span>
            </motion.div> */}
          </div>
        </motion.section>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="px-5 pb-16 sm:px-6 md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <FeaturedBlog post={featuredPost} />
          </div>
        </motion.div>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="px-5 pb-24 sm:px-6 md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={childReveal} className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="section-tag mb-3">
                  <span className="section-tag-line" /> All posts
                </div>
                <h2 className="font-display text-[clamp(1.65rem,5vw,2.15rem)] font-semibold leading-[1.1] tracking-tight text-bone md:text-[clamp(2rem,3vw,2.5rem)]">
                  Browse the archive
                </h2>
              </div>
              {/* <p className="max-w-md text-sm leading-relaxed text-ash md:text-right">
                Search by topic, author, or category, then sort the reading list to match your pace.
              </p> */}
            </motion.div>

            <motion.div variants={childReveal}>
              <BlogSearchFilter
                search={search}
                category={category}
                sort={sort}
                categories={blogCategories}
                onSearchChange={setSearch}
                onCategoryChange={setCategory}
                onSortChange={setSort}
              />
            </motion.div>

            {visiblePosts.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {visiblePosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                variants={childReveal}
                className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.035] px-6 py-14 text-center"
              >
                <h3 className="font-display text-2xl font-semibold text-bone md:text-3xl">No posts found</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ash">
                  Try a different keyword, switch category, or reset the filters to bring the archive back.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setSort("newest");
                  }}
                  className="mt-7 inline-flex items-center gap-2 rounded-[8px] bg-bone px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Reset filters
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
