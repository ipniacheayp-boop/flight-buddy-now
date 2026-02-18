import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeHero from "@/components/HomeHero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import WhyFlyWithUs from "@/components/WhyFlyWithUs";
import LoyaltyTeaser from "@/components/LoyaltyTeaser";
import EmailCapture from "@/components/EmailCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HomeHero />
        <FeaturedDestinations />
        <WhyFlyWithUs />
        <LoyaltyTeaser />
        <EmailCapture />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
