import { Search, SlidersHorizontal } from "lucide-react";

export type BlogSort = "newest" | "oldest" | "popular" | "shortest" | "longest";

type BlogSearchFilterProps = {
  search: string;
  category: string;
  sort: BlogSort;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: BlogSort) => void;
};

export default function BlogSearchFilter({
  search,
  category,
  sort,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: BlogSearchFilterProps) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="grid gap-3 lg:grid-cols-[1fr_220px_220px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/38" />
          <span className="sr-only">Search posts</span>
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search title, category, author, or excerpt"
            className="h-12 w-full rounded-[8px] border border-white/8 bg-[#0d0d0d] pl-11 pr-4 text-sm text-bone outline-none transition placeholder:text-bone/30 focus:border-white/24 focus:bg-[#111]"
          />
        </label>

        <label className="relative block">
          <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/38" />
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="h-12 w-full appearance-none rounded-[8px] border border-white/8 bg-[#0d0d0d] pl-11 pr-4 text-sm text-bone outline-none transition focus:border-white/24 focus:bg-[#111]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Sort posts</span>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as BlogSort)}
            className="h-12 w-full appearance-none rounded-[8px] border border-white/8 bg-[#0d0d0d] px-4 text-sm text-bone outline-none transition focus:border-white/24 focus:bg-[#111]"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="popular">Most popular</option>
            <option value="shortest">Shortest read</option>
            <option value="longest">Longest read</option>
          </select>
        </label>
      </div>
    </div>
  );
}
