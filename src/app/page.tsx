// Landing page here
import WhySection from "@/components/why-section"
import Footer from "../component/footer"
import BusinessOwnerReviewsSection from "@/components/BusinessOwnerReviewsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <HowItWorksSection />
      <BusinessOwnerReviewsSection />
      <Footer />
    </main>
  )
}
