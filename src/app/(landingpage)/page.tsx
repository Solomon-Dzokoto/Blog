// Landing page here
import WhySection from "@/components/why-section"
import Footer from "@/components/footer"

import BusinessOwnerReviewsSection from "@/components/BusinessOwnerReviewsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import HeroSection from "@/components/HeroSection"



function LandingPage() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <HowItWorksSection />
      <WhySection />
      <BusinessOwnerReviewsSection />
      <Footer />
    </main>
  )
}
export default LandingPage