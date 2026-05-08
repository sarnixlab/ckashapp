import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ChevronDown } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const sections = [
  {
    title: "Definitions",
    body: [
      '"CKash," "we," "our," or "us" refers to CKash and its related products, websites, applications, services, and features.',
      '"User," "you," or "your" refers to any person or entity that accesses or uses CKash.',
      '"Services" means the CKash website, wallet experience, payment features, digital asset tools, integrations, and any related functionality made available by CKash.',
      '"Digital Assets" means cryptocurrencies, stablecoins, tokens, or other blockchain-based assets supported or displayed through CKash.',
    ],
  },
  {
    title: "Eligibility",
    body: [
      "By using CKash, you confirm that you are at least 18 years old, or the age of legal majority in your jurisdiction, and have the legal capacity to enter into these Terms.",
      "You may not use CKash if you are prohibited from doing so under applicable laws, sanctions rules, regulatory restrictions, or these Terms.",
    ],
  },
  {
    title: "Nature of CKash Services",
    body: [
      "CKash provides technology that helps users access digital asset and Web3 experiences, including wallet-related tools, payment flows, transaction interfaces, and supported third-party integrations.",
      "CKash is not a bank, broker, investment adviser, custodian, or financial institution unless expressly stated in writing. CKash does not provide investment, tax, legal, or financial advice.",
    ],
  },
  {
    title: "Account Registration",
    body: [
      "You may be required to create an account or connect a wallet to access certain CKash features. You agree to provide accurate, current, and complete information when requested.",
      "You are responsible for maintaining the confidentiality of your account credentials, devices, recovery phrases, private keys, authentication methods, and any activity that occurs through your account or wallet.",
    ],
  },
  {
    title: "User Responsibilities",
    body: [
      "You are solely responsible for understanding how digital asset transactions work before using CKash. Blockchain transactions may be irreversible once submitted.",
      "You agree to review all transaction details, including wallet addresses, network selections, token amounts, fees, and recipient information before confirming any transaction.",
      "You are responsible for complying with all laws and regulations applicable to your use of CKash.",
    ],
  },
  {
    title: "Prohibited Activities",
    body: [
      "You agree not to use CKash for fraud, money laundering, terrorist financing, sanctions evasion, market manipulation, unauthorized access, scams, illegal gambling, or any unlawful activity.",
      "You may not interfere with, disrupt, reverse engineer, scrape, overload, bypass security controls, or misuse CKash systems, interfaces, smart contracts, or connected services.",
      "You may not impersonate another person, misrepresent your identity, or use CKash in a way that harms CKash, other users, or third parties.",
    ],
  },
  {
    title: "Digital Asset Risks",
    body: [
      "Digital assets involve significant risk. Prices may fluctuate, networks may fail or be delayed, smart contracts may contain vulnerabilities, and transactions may be lost or irreversible.",
      "You acknowledge that you use digital assets and blockchain networks at your own risk. CKash does not guarantee the value, availability, performance, or security of any digital asset or network.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "CKash may provide access to third-party services, protocols, blockchains, liquidity providers, decentralized applications, payment processors, analytics tools, or external websites.",
      "Third-party services are governed by their own terms and policies. CKash is not responsible for third-party content, failures, losses, actions, fees, security incidents, or availability.",
    ],
  },
  {
    title: "Fees",
    body: [
      "Certain transactions may involve network fees, gas fees, service fees, exchange spreads, or third-party charges. Fees may vary based on network conditions, asset type, service provider, or transaction activity.",
      "You are responsible for reviewing applicable fees before confirming a transaction. CKash may update fees or fee structures at any time where permitted by law.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "CKash, including its name, logos, designs, software, user interface, graphics, content, trademarks, and related materials, is owned by CKash or its licensors.",
      "You may not copy, modify, distribute, sell, lease, create derivative works from, or use CKash intellectual property without prior written permission, except as allowed by these Terms.",
    ],
  },
  {
    title: "Privacy",
    body: [
      "Your use of CKash may involve the collection and processing of certain information. Our handling of personal information is described in our Privacy Policy, where applicable.",
      "By using CKash, you acknowledge that blockchain transactions may be public and can be permanently recorded on distributed networks outside CKash control.",
    ],
  },
  {
    title: "Service Availability",
    body: [
      "CKash may be unavailable, interrupted, delayed, modified, suspended, or discontinued at any time due to maintenance, upgrades, network issues, third-party failures, security events, regulatory requirements, or other reasons.",
      "We do not guarantee uninterrupted, error-free, or continuous availability of CKash or any connected blockchain network or third-party service.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      'CKash is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, CKash disclaims all warranties, whether express, implied, statutory, or otherwise.',
      "We do not warrant that CKash will be secure, accurate, reliable, uninterrupted, free from errors, or suitable for your specific needs.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, CKash and its affiliates, directors, employees, partners, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages.",
      "This includes losses related to digital assets, lost profits, lost data, failed transactions, unauthorized access, third-party services, network failures, security incidents, or regulatory actions.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless CKash and its affiliates, directors, employees, contractors, partners, and service providers from any claims, damages, liabilities, losses, costs, and expenses arising from your use of CKash.",
      "This includes your violation of these Terms, misuse of the Services, breach of law, infringement of third-party rights, or activity connected to your account or wallet.",
    ],
  },
  {
    title: "Termination",
    body: [
      "We may suspend, restrict, or terminate your access to CKash at any time if we believe you have violated these Terms, created risk, engaged in prohibited activity, or if required by law or regulatory authority.",
      "You may stop using CKash at any time. Certain obligations, including ownership, disclaimers, limitations of liability, indemnification, and dispute-related provisions, will survive termination.",
    ],
  },
  {
    title: "Compliance and Regulatory Requirements",
    body: [
      "You agree to comply with all applicable laws, including financial crime, sanctions, tax, consumer protection, data protection, and digital asset regulations that may apply to your use of CKash.",
      "CKash may request information, restrict features, block transactions, or take other actions when necessary to comply with legal, regulatory, security, or risk-management obligations.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms will be governed by and interpreted in accordance with the laws applicable to CKash, without regard to conflict-of-law principles.",
      "Any dispute arising from or relating to these Terms or CKash will be handled in the courts or dispute forum determined by CKash policies and applicable law.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. When we make material changes, we may provide notice through the website, app, email, or other reasonable means.",
      "Your continued use of CKash after updated Terms become effective means you accept the revised Terms.",
    ],
  },
  {
    title: "Contact Information",
    body: [
      "If you have questions about these Terms and Conditions, please contact CKash at  support@ckash.app.",
      "We may also provide additional support or legal contact channels through the CKash website or application.",
    ],
  },
  {
    title: "Acknowledgement",
    body: [
      "By accessing or using CKash, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      "If you do not agree to these Terms, you should not access or use CKash.",
    ],
  },
];
const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TermsAndConditions() {
  const tocRef = useRef(null);
  const [tocState, setTocState] = useState("before");
  const [tocOpen, setTocOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  const tocItems = useMemo(
    () =>
      sections.map((section, index) => ({
        number: String(index + 1).padStart(2, "0"),
        title: section.title,
        id: slugify(section.title),
      })),
    []
  );

  useEffect(() => {
    const updateTocPosition = () => {
      if (window.innerWidth <= 960) {
        setTocState("mobile");
        return;
      }

      const firstCard = document.getElementById("definitions");
      const lastCard = document.getElementById("acknowledgement");
      const toc = tocRef.current;

      if (!firstCard || !lastCard || !toc) return;

      const topOffset = 110;
      const scrollY = window.scrollY;

      const firstCardTop =
        firstCard.getBoundingClientRect().top + window.scrollY;

      const lastCardBottom =
        lastCard.getBoundingClientRect().bottom + window.scrollY;

      const tocHeight = toc.offsetHeight;

      const startFixing = firstCardTop - topOffset;
      const stopFixing = lastCardBottom - tocHeight - topOffset;

      if (scrollY < startFixing) {
        setTocState("before");
      } else if (scrollY >= stopFixing) {
        setTocState("after");
      } else {
        setTocState("fixed");
      }
    };

    updateTocPosition();

    window.addEventListener("scroll", updateTocPosition);
    window.addEventListener("resize", updateTocPosition);

    return () => {
      window.removeEventListener("scroll", updateTocPosition);
      window.removeEventListener("resize", updateTocPosition);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ckash-terms-page">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .ckash-terms-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          color: #f5f5f5;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #050505;
        }

        .ckash-terms-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
        }

        .ckash-terms-progress-bar {
          width: 100%;
          height: 100%;
          transform-origin: left center;
          background: #ffffff;
          box-shadow: 0 0 22px rgba(255, 255, 255, 0.35);
        }

        .ckash-terms-page::before,
        .ckash-terms-page::after {
          content: none;
        }

        .ckash-terms-shell {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .ckash-terms-hero {
          padding: 148px 0 58px;
          text-align: center;
        }

        .ckash-terms-hero-inner {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 clamp(8px, 3vw, 32px);
        }

        .ckash-terms-hero-inner::before {
          content: none;
        }

        .ckash-terms-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 15px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.065);
          color: rgba(255, 255, 255, 0.74);
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.02em;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          position: relative;
          z-index: 1;
        }

        .ckash-terms-hero h1 {
          margin: 22px auto 17px;
          max-width: 820px;
          font-size: clamp(42px, 7vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.065em;
          font-weight: 780;
          color: #ffffff;
          text-shadow: 0 28px 80px rgba(255, 255, 255, 0.13);
          position: relative;
          z-index: 1;
        }

        .ckash-terms-hero p {
          max-width: 670px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.68);
          font-size: clamp(15px, 1.8vw, 19px);
          line-height: 1.72;
          position: relative;
          z-index: 1;
        }

        .ckash-terms-updated {
          display: inline-flex;
          margin-top: 24px;
          padding: 11px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.075);
          color: rgba(255, 255, 255, 0.84);
          font-size: 14px;
          font-weight: 650;
          position: relative;
          z-index: 1;
        }

        .ckash-terms-layout {
          display: block;
          position: relative;
          padding-bottom: 74px;
        }

      .ckash-terms-toc-wrap {
  width: 300px;
  height: calc(100vh - 140px);
  z-index: 50;
}

.ckash-terms-toc-wrap.is-before {
  position: absolute;
  top: 0;
  left: 0;
}

.ckash-terms-toc-wrap.is-fixed {
  position: fixed;
  top: 110px;
  left: max(20px, calc((100vw - 1180px) / 2));
}

.ckash-terms-toc-wrap.is-after {
  position: absolute;
  left: 0;
  bottom: 0;
}

        .ckash-terms-toc {
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          background: rgba(14, 14, 14, 0.94);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 24px 70px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          overflow: hidden;
        }

        .ckash-terms-toc-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-shrink: 0;
          padding: 19px 18px 15px;
          border: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          background: transparent;
          color: #ffffff;
          font: inherit;
          font-size: 14px;
          font-weight: 750;
          text-align: left;
        }

        .ckash-terms-toc-heading svg {
          display: none;
        }

        .ckash-terms-toc-list {
          display: grid;
          gap: 4px;
          flex: 1;
          overflow-y: auto;
          padding: 12px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.22) transparent;
        }

        .ckash-terms-toc-list::-webkit-scrollbar {
          width: 6px;
        }

        .ckash-terms-toc-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .ckash-terms-toc-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.18);
          border-radius: 999px;
        }

        .ckash-terms-toc-list a {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 8px;
          align-items: center;
          border-radius: 16px;
          padding: 11px 10px;
          color: rgba(255, 255, 255, 0.64);
          font-size: 13px;
          line-height: 1.35;
          text-decoration: none;
          transition: background 200ms ease, color 200ms ease, transform 200ms ease;
        }

        .ckash-terms-toc-list a:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.085);
          color: #ffffff;
        }

        .ckash-terms-toc-list a:active {
          transform: translateX(4px) scale(0.985);
        }

        .ckash-terms-toc-number {
          color: rgba(255, 255, 255, 0.35);
          font-size: 12px;
          font-variant-numeric: tabular-nums;
        }

        .ckash-terms-content {
          display: grid;
          gap: 18px;
          margin-left: 328px;
        }

        .ckash-terms-card {
          scroll-margin-top: 32px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.115);
          border-radius: 28px;
          background: rgba(14, 14, 14, 0.92);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 20px 68px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          padding: clamp(22px, 4vw, 38px);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            background 220ms ease,
            box-shadow 220ms ease;
        }

        .ckash-terms-card::before {
          content: none;
        }

        .ckash-terms-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.22);
          background: rgba(20, 20, 20, 0.96);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 30px 84px rgba(0, 0, 0, 0.38);
        }

        .ckash-terms-card:hover::before {
          opacity: 1;
        }

        .ckash-terms-card-kicker {
          color: rgba(255, 255, 255, 0.42);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.105em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .ckash-terms-card h2 {
          margin: 10px 0 16px;
          color: #ffffff;
          font-size: clamp(22px, 3vw, 31px);
          line-height: 1.15;
          letter-spacing: -0.035em;
          position: relative;
          z-index: 1;
        }

        .ckash-terms-card p {
          margin: 0;
          max-width: 860px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 16px;
          line-height: 1.82;
          position: relative;
          z-index: 1;
        }

        .ckash-terms-card p + p {
          margin-top: 14px;
        }

        .ckash-terms-footer {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 28px 0 34px;
          color: rgba(255, 255, 255, 0.55);
          text-align: center;
          font-size: 14px;
        }

        .ckash-back-top {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 70;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          background: rgba(38, 38, 38, 0.72);
          color: #ffffff;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 18px 50px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .ckash-back-top:hover {
          transform: translateY(-4px);
          background: rgba(55, 55, 55, 0.88);
          border-color: rgba(255, 255, 255, 0.28);
        }

        @media (max-width: 960px) {
          .ckash-terms-shell {
            width: min(100% - 30px, 760px);
          }

          .ckash-terms-hero {
            padding: 122px 0 34px;
          }

          .ckash-terms-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 18px;
            padding-bottom: 58px;
          }

          .ckash-terms-toc-wrap {
            position: sticky;
            top: 12px;
            left: auto;
            width: 100%;
            height: auto;
            z-index: 60;
          }

          .ckash-terms-content {
            margin-left: 0;
          }

          .ckash-terms-toc {
            height: auto;
            border-radius: 24px;
          }

          .ckash-terms-toc-heading {
            cursor: pointer;
            padding: 17px 18px;
          }

          .ckash-terms-toc-heading svg {
            display: block;
            transition: transform 180ms ease;
          }

          .ckash-terms-toc-heading[data-open="true"] svg {
            transform: rotate(180deg);
          }

          .ckash-terms-toc-list {
            display: none;
            max-height: 340px;
            overflow-y: auto;
          }

          .ckash-terms-toc-list[data-open="true"] {
            display: grid;
          }

          .ckash-terms-card {
            scroll-margin-top: 110px;
          }
        }

        @media (max-width: 560px) {
          .ckash-terms-shell,
          .ckash-terms-footer {
            width: min(100% - 22px, 100%);
          }

          .ckash-terms-hero {
            padding-top: 112px;
            text-align: left;
          }

          .ckash-terms-hero-inner {
            border-radius: 26px;
            padding: 0;
          }

          .ckash-terms-hero h1 {
            letter-spacing: -0.055em;
          }

          .ckash-terms-hero p {
            margin-left: 0;
          }

          .ckash-terms-updated {
            font-size: 13px;
          }

          .ckash-terms-card {
            border-radius: 24px;
            padding: 21px;
          }

          .ckash-terms-card p {
            font-size: 15px;
            line-height: 1.76;
          }

          .ckash-back-top {
            right: 14px;
            bottom: 14px;
            width: 43px;
            height: 43px;
          }
        }
      `}</style>

      <Navbar />

      <div className="ckash-terms-progress" aria-hidden="true">
        <motion.div
          className="ckash-terms-progress-bar"
          style={{ scaleX: progressScale }}
        />
      </div>

      <main>
        <motion.header
        className="ckash-terms-shell ckash-terms-hero"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ckash-terms-hero-inner">
            <span className="ckash-terms-pill">CKash Legal</span>
            <h1>Terms and Conditions</h1>
            <p>
              Please read these Terms carefully before accessing or using CKash
              products, services, website, wallet features, or supported Web3
              experiences.
            </p>
            <div className="ckash-terms-updated">
              Last Updated: May 6, 2026
            </div>
          </div>
        </motion.header>

        <div className="ckash-terms-shell ckash-terms-layout">
        <motion.aside
          ref={tocRef}
          className={`ckash-terms-toc-wrap is-${tocState}`}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          <div className="ckash-terms-toc">
            <button
              type="button"
              className="ckash-terms-toc-heading"
              data-open={tocOpen}
              onClick={() => setTocOpen((open) => !open)}
            >
              Table of Contents
              <ChevronDown size={18} aria-hidden="true" />
            </button>

            <nav
              className="ckash-terms-toc-list"
              data-open={tocOpen}
              aria-label="Terms sections"
            >
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                >
                  <span className="ckash-terms-toc-number">
                    {item.number}
                  </span>
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </motion.aside>

        <motion.section
          className="ckash-terms-content"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.article
              id={slugify(section.title)}
              key={section.title}
              className="ckash-terms-card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.998 }}
            >
              <div className="ckash-terms-card-kicker">
                Section {String(index + 1).padStart(2, "0")}
              </div>

              <h2>{section.title}</h2>

              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.article>
          ))}
        </motion.section>
        </div>
      </main>

      <motion.button
        type="button"
        className="ckash-back-top"
        onClick={handleBackToTop}
        aria-label="Back to top"
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.94 }}
      >
        <ArrowUp size={19} aria-hidden="true" />
      </motion.button>

      <Footer />
      {/*
        © 2026 CKash. All rights reserved.
      */}
    </div>
  );
}
