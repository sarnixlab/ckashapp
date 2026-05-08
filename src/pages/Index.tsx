import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import WhyCkashSection from "@/components/sections/WhyCkashSection";
import HowItWorks from "@/components/sections/HowItWorks";
import SwapSection from "@/components/sections/SwapSection";
import SecurityControlSection from "@/components/sections/SecurityControlSection";
// import PaymentsSection from "@/components/sections/PaymentsSection";
import DappSection from "@/components/sections/DappSection";
import DeveloperSection from "@/components/sections/DeveloperSection";
import BlogSection from "@/components/sections/BlogSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import SectionNav from "@/components/sections/SectionNav";

const Index = () => {
  return (
    <div className="grain min-h-screen bg-ink text-bone">
      <Navbar />
      <SectionNav />
      <main className="snap-container">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <SwapSection />
        {/* <SecurityControlSection /> */}
        {/* <PaymentsSection /> */}
        {/* <DappSection /> */}
        {/* <DeveloperSection /> */}
        <WhyCkashSection />
        <BlogSection />
        
        {/* <FinalCTA /> */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
