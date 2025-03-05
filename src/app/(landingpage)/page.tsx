// Landing page here
import WhySection from "@/components/why-section"
<<<<<<<< HEAD:src/app/(landing page)/page.tsx
import Footer from "@/components/footer"
========
import Footer from "../../component/footer"
>>>>>>>> c0762bbb09e3b4163a3f64fda93705fc0e7fde25:src/app/(landingpage)/page.tsx
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