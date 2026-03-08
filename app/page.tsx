import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MediaTickerSection from "@/components/MediaTickerSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import EligibilityGrid from "@/components/EligibilityGrid";
import InvestorsSection from "@/components/InvestorsSection";
import FeaturedStartups from "@/components/FeaturedStartups";
import AboutKaroStartup from "@/components/AboutKaroStartup";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <Navbar />
      <main>
        <HeroSection />
        <MediaTickerSection />
        <AboutSection />
        <HowItWorks />
        <EligibilityGrid />
        <InvestorsSection />
        <FeaturedStartups />
        <AboutKaroStartup />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
