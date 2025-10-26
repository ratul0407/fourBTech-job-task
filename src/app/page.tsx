import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import PaymentsBanner from "../components/PaymentsBanner";
import Pricing from "../components/Pricing";
import Security from "../components/Security";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="space-y-32 pt-32 text-primary font-urbanist">
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />
        <WhyUs />
        <Benefits />
        <Testimonials />
        <PaymentsBanner />
      </main>
      <Footer />
    </>
  );
}
