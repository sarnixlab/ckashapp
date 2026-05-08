import { ArrowUpRight, Globe2 } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaApple, FaMediumM } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";

const logoUrl =
  "https://res.cloudinary.com/durncdjje/image/upload/v1777965544/CKASH_LOGO_yl6msg.svg";

const groups = [
  { title: "Company", links: ["About", "Careers", "Press", "Contact", "Why Ckash"] },
  { title: "Product", links: ["Wallet", "Swap", "Payments", "Dapps", "Security"] },
  { title: "Resources", links: ["Read Docs", "Blog", "FaQ", "Support", "Status"] },
];

const socialLinks = [
  { label: "X", href: "https://x.com/cKashApp", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ckash-app/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/ckashapp", icon: BsInstagram },
  { label: "Telegram", href: "https://t.me/ckashapp", icon: RiTelegramLine },
  { label: "Medium", href: "https://medium.com/@ckashApp", icon: FaMediumM },
];

export default function Footer() {
  return (
    <footer id="footer" className="mist-section grain-texture relative w-full overflow-hidden bg-[#151515] text-bone">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_65%)]" />

      <div className="relative px-4 py-10 sm:px-6 md:px-10 md:py-20">
        <div className="space-y-5">
          {/* TOP CTA GRID */}
          <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
            {/* BUILDERS */}
            <div className="group relative min-h-[390px] overflow-hidden rounded-[34px] border border-white/10 bg-[#050505] p-7 text-white shadow-[0_34px_100px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.14),transparent_35%)]" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/[0.05] blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-14">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/35">
                    Builders
                  </span>

                  <h2 className="mt-5 max-w-4xl font-display text-[clamp(2rem,6.2vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-white md:text-[clamp(2.5rem,4.2vw,3.6rem)]">
                    Want your app inside the Ckash dapp section?
                  </h2>

                  <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/55 sm:text-base">
                    Reach stablecoin users by getting your dapp featured inside the Ckash ecosystem.
                  </p>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="hidden max-w-xs text-sm leading-relaxed text-white/35 sm:block">
                    Built for partners, builders, protocols, and Web3 products.
                  </div>

                  <a
                    href="mailto: support@ckash.app?subject=Dapp%20listing%20for%20Ckash"
                    aria-label="Contact Ckash for dapp listing"
                    className="group/arrow ml-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-[8px] bg-white text-black shadow-[0_24px_60px_rgba(255,255,255,0.16)] transition-all duration-300 hover:scale-110"
                  >
                    <ArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover/arrow:-translate-y-1 group-hover/arrow:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* GET STARTED */}
            <div className="group relative min-h-[390px] overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,#f7f7f7_0%,#e8e8e8_58%,#d5d5d5_100%)] p-7 text-[#050505] shadow-[0_34px_100px_rgba(0,0,0,0.24)] transition-all duration-500 hover:-translate-y-1 md:p-9">
              <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/[0.08] blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-10">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-black/45">
                    Get started
                  </span>

                  <h2 className="mt-5 font-display text-[clamp(1.75rem,5.8vw,2.3rem)] font-semibold leading-[1.08] tracking-tight md:text-[clamp(2.1rem,3.4vw,2.8rem)]">
                    Start using Ckash today.
                  </h2>

                  <p className="mt-5 text-[15px] leading-relaxed text-black/60">
                    Download the wallet and start moving stablecoins smoothly.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href="#download"
                    className="group/store flex min-h-[64px] min-w-0 flex-1 items-center justify-between gap-3 rounded-[8px] bg-[#050505] px-4 py-3.5 text-white shadow-[0_18px_44px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] sm:min-h-[58px] sm:py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaApple className="h-5 w-5" />
                      <span>
                        <span className="block text-[8px] uppercase tracking-[0.12em] text-white/45">
                          Download on
                        </span>
                        <span className="block text-[13px] font-semibold leading-tight">
                          App Store
                        </span>
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/60" />
                  </a>

                  <a
                    href="#download"
                    className="group/play flex min-h-[64px] min-w-0 flex-1 items-center justify-between gap-3 rounded-[8px] border border-black/10 bg-white/70 px-4 py-3.5 text-[#050505] shadow-[0_18px_44px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] sm:min-h-[58px] sm:py-3"
                  >
                    <div className="flex items-center gap-3">
                      <IoLogoGooglePlaystore className="h-5 w-5" />
                      <span>
                        <span className="block text-[8px] uppercase tracking-[0.12em] text-black/40">
                          Get it on
                        </span>
                        <span className="block text-[13px] font-semibold leading-tight">
                          Google Play
                        </span>
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/45" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COMMUNITY */}
          <div className="relative overflow-hidden rounded-[34px]  border-white/10  p-7 text-white md:p-10">
            <div className="pointer-events-none absolute inset-0" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/35">
                  Community
                </span>

                <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,5.8vw,2.35rem)] font-semibold leading-[1.08] tracking-tight md:text-[clamp(2.2rem,3.6vw,3rem)]">
                  Join our community on
                </h2>

                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/55">
                  Get product updates, ecosystem news, and community announcements.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_34px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black sm:h-[76px] sm:w-[76px]"
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="py-5">
            {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" /> */}
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="glass soft-edge-refraction gray-holographic grid gap-10 rounded-[26px] border border-white/10 p-6 backdrop-blur-2xl sm:p-7 md:grid-cols-[1.1fr_1.2fr_1.4fr] md:p-10">
          <div className="flex flex-col justify-between gap-8">
            <p className="max-w-md font-display text-[clamp(1.35rem,4.8vw,1.85rem)] font-medium leading-[1.22] tracking-tight text-bone">
              Move stablecoins with less friction. Build, pay, swap, and explore from one wallet.
            </p>

            <a
              href="#download"
              className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-bone px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
            >
              Download App
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-bone">{group.title}</h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="group text-sm text-ash transition-colors hover:text-bone">
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                          {link}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
              
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="text-sm text-bone">Subscribe to our Newsletter</div>

              <div className="mt-5 flex flex-col gap-3 border-b border-white/14 pb-4 transition-colors focus-within:border-white/40 sm:flex-row sm:items-center">
                <input
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl bg-white/[0.05] px-4 py-3 text-sm text-bone outline-none placeholder:text-ash sm:bg-transparent sm:px-0"
                />

                <button className="w-full rounded-[8px] bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] active:scale-95 sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm text-bone">Say hello</div>
                <a
                  href="mailto: support@ckash.app"
                  className="mt-4 block break-words text-sm text-ash transition-colors hover:text-bone"
                >
                  support@ckash.app
                </a>
              </div>

              <div>
                <div className="text-sm text-bone">Follow us</div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/[0.05] transition-all hover:-translate-y-1 hover:bg-white hover:text-black"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col gap-4 text-[12px] text-ash md:mt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>Ckash Labs  | </span>

            <span className="inline-flex items-center gap-1.5">

              Built for borderless stablecoins
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="/terms-and-conditions" className="transition-colors hover:text-bone">
              Terms and Conditions
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Copyright © 2026 Ckash</span>
          </div>
        </div>

        {/* LOGO */}
        <div className="relative mt-10 w-screen -translate-x-4 overflow-hidden sm:-translate-x-6 md:mt-12 md:-translate-x-10">
          <div className="relative h-[100px] overflow-hidden sm:h-[140px] md:h-[180px]">
            <img
              src={logoUrl}
              alt="Ckash"
              className="absolute left-1/2 top-0 w-[160%] max-w-none -translate-x-1/2 translate-y-[-30%] object-cover opacity-[0.15] sm:w-[130%] md:w-[120%] md:translate-y-[-35%]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/50 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
