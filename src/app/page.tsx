import Banner from "../components/Banner";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Security from "../components/Security";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="container mx-auto space-y-32 pt-32 text-primary font-urbanist">
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />
        <Testimonials />
      </main>
    </>
  );
}
