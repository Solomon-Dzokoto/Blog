import BusinessOwnerReviewsSection from "@/components/BusinessOwnerReviewsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto w-full flex-col flex gap-12">
      <HowItWorksSection />
      <BusinessOwnerReviewsSection />
    </main>
  );
}


