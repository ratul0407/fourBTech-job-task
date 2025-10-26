"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PaymentsBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // animation triggers when 85% of section is visible
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".banner-heading", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".banner-text",
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".banner-buttons",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-spacing" ref={sectionRef}>
      <div className="bg-[url('/images/payments-banner.png')] bg-cover bg-no-repeat py-20 text-white rounded-xl space-y-10 overflow-hidden">
        <div className="space-y-4">
          <h3 className="banner-heading font-bold text-2xl md:text-5xl max-w-[25ch] mx-auto text-center">
            Ready to experience seamless secure payments globally
          </h3>
          <p className="banner-text text-center max-w-[63ch] mx-auto px-8 sm:px-0">
            Ready for hassle-free, secure payments anywhere in the world? Start
            using Monks Pay today — it&apos;s fast, free, and focused on keeping
            your transactions secure!
          </p>
        </div>

        <div className="banner-buttons mx-auto text-center space-x-5">
          <button className=" btn-primary">Download the App</button>
          <button className=" text-white bg-transparent border border-white rounded-full font-outfit font-semibold px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentsBanner;
