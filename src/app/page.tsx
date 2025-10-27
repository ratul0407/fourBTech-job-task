"use client";
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
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
