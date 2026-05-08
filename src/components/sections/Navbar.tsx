import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { microTransition, smoothEase, subtleTap } from "@/lib/motion";

const links = [
  { label: "View Demo", href: "/#how-it-works" },
  { label: "Support", href: "/#download" },
];

const resourceLinks = [
  { label: "Read Docs", href: "/#developers" },
  { label: "Blog", href: "/blog" },
  // { label: "Whitepaper", href: "/#whitepaper" },
  { label: "FAQ", href: "/faq" },
];

const mobileNavbarLinks = [
  ...links,
  { label: "Resources", href: "/faq" },
  { label: "Download App", href: "/#download" },
];

const mobilePrimaryLinks = [
  { label: "What it does", href: "/#wallet" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Swap", href: "/#swap" },
  { label: "Why Ckash", href: "/#why-ckash" },
  { label: "Support", href: "/#download" },
];

const mobileSocials = [
  { label: "X", href: "https://x.com/cKashApp", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ckash-app/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/ckashapp", icon: BsInstagram },
  { label: "Telegram", href: "https://t.me/ckashapp", icon: RiTelegramLine },
  { label: "Medium", href: "https://medium.com/@ckashApp", icon: FaMediumM },
];

const logoUrl = "https://res.cloudinary.com/durncdjje/image/upload/v1777965544/CKASH_LOGO_yl6msg.svg";

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: smoothEase }}
        className="fixed left-0 right-0 top-0 z-50 w-full"
      >
        <div className="w-full">
          <div className="flex h-20 w-full items-center justify-between gap-3 bg-ink/35 px-4 shadow-[0_18px_55px_hsl(0_0%_0%/0.30),inset_0_1px_0_hsl(0_0%_100%/0.08)] backdrop-blur-2xl backdrop-saturate-150 sm:px-7">
            <motion.a
              href="/"
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={subtleTap}
              transition={microTransition}
              className="flex min-w-0 items-center gap-3"
              aria-label="Ckash home"
            >
              <img
                src={logoUrl}
                alt="Ckash"
                className="h-8 w-auto shrink-0"
              />
            </motion.a>
            <nav className="hidden items-center gap-1 rounded-[7px] bg-white/[0.045] p-1 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.08)] md:flex">
              <div className="relative">
                <motion.button
                  type="button"
                  onClick={() => setResourcesOpen((open) => !open)}
                  aria-expanded={resourcesOpen}
                  whileHover={{ y: -2 }}
                  whileTap={subtleTap}
                  transition={microTransition}
                  className="inline-flex items-center gap-1.5 rounded-[8px] px-4 py-2.5 text-[13px] font-medium text-bone/72 transition-colors hover:bg-white/10 hover:text-bone"
                >
                  Resources
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </motion.button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(8px)" }}
                      transition={{ duration: 0.38, ease: smoothEase }}
                      className="absolute left-0 top-[calc(100%+0.55rem)] w-40 origin-top rounded-[7px] bg-ink/80 p-1.5 shadow-[0_18px_48px_hsl(0_0%_0%/0.38),inset_0_1px_0_hsl(0_0%_100%/0.08)] backdrop-blur-2xl backdrop-saturate-150"
                    >
                      {resourceLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          onClick={() => setResourcesOpen(false)}
                          whileHover={{ x: 3, backgroundColor: "rgba(255,255,255,0.1)" }}
                          whileTap={subtleTap}
                          transition={microTransition}
                          className="block rounded-[8px] px-3 py-2 text-[13px] font-medium text-bone/72 transition-colors hover:bg-white/10 hover:text-bone"
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={subtleTap}
                  transition={microTransition}
                  className="rounded-[8px] px-4 py-2.5 text-[13px] font-medium text-bone/72 transition-colors hover:bg-white/10 hover:text-bone"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <motion.a
                href="/#download"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={subtleTap}
                transition={microTransition}
                className="shrink-0 rounded-[8px] bg-bone px-4 py-2.5 text-[13px] font-semibold text-ink shadow-[0_1px_0_hsl(0_0%_100%/0.35)_inset,0_10px_24px_hsl(0_0%_0%/0.18)] transition-colors hover:bg-white sm:px-5"
              >
                Download App
              </motion.a>

              <motion.button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                whileTap={subtleTap}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/[0.08] text-bone shadow-[inset_0_1px_0_hsl(0_0%_100%/0.08)] backdrop-blur-xl md:hidden"
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="fixed inset-0 z-[70] bg-[#050505] text-bone md:hidden"
          >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.04),transparent_50%)]" />

            {/* SCROLL CONTAINER */}
            <div className="relative z-10 flex h-full flex-col overflow-y-auto px-6 py-6">

              {/* HEADER */}
              <div className="flex items-center justify-between">
                {/* MATCH DESKTOP LOGO */}
                <img src={logoUrl} className="h-8 w-auto" />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/10 backdrop-blur-md transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* NAV CONTENT */}
              <div className="mt-12 space-y-12">

                {/* PRODUCT */}
                <div>
                  <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-ash/80">
                    Product
                  </p>

                  <div className="space-y-2">
                    {mobilePrimaryLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between rounded-[8px] px-4 py-3 text-[17px] font-medium text-bone/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                      >
                        {link.label}

                        <ArrowRight className="h-4 w-4 opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* RESOURCES */}
                <div>
                  <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-ash/80">
                    Resources
                  </p>

                  <div className="space-y-2">
                    {resourceLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between rounded-[8px] px-4 py-3 text-[15px] text-bone/60 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                      >
                        {link.label}

                        <ArrowRight className="h-3.5 w-3.5 opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                  <motion.a
                    href="#download"
                    whileTap={subtleTap}
                    className="flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white text-[#080808] text-sm font-semibold shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition hover:bg-white/90"
                  >
                    Download App
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>

                  <motion.a
                    href="#how-it-works"
                    whileTap={subtleTap}
                    className="flex h-12 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.05] text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                  >
                    View Demo
                  </motion.a>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-14 border-t border-white/5 pt-6">
                <p className="text-sm text-bone/60 leading-relaxed">
                  Move stablecoins freely. Swap, pay, and explore from one wallet.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-bone/60">
                  {mobileSocials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="glass soft-edge-refraction flex h-10 w-10 items-center justify-center rounded-[8px] transition hover:-translate-y-0.5 hover:text-white"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
