"use client";
import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Image from "next/image";
import largeImg from "@/public/images/howItWorksImage.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "./icons/download.svg",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play hassle free.",
  },
  {
    icon: "./icons/card.svg",
    title: "Link your bank or card",
    description:
      "Easily connect your account in seconds with advanced security for peace of mind.",
  },
  {
    icon: "./icons/camera.svg",
    title: "Start paying",
    description:
      "Easily split bills, send money to friends, and make smooth online payments instantly.",
  },
];

const HowItWorks = () => {
  useGSAP(() => {
    // Heading animations
    gsap.from(".how-heading", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".how-heading",
        start: "top 60%",
        once: true,
      },
    });

    // Button animation
    gsap.from(".how-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".how-btn",
        start: "top 85%",
        once: true,
      },
    });

    // Step cards
    gsap.from(".how-step", {
      y: 60,
      opacity: 0,
      rotate: 3,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".how-step",
        start: "top 85%",
        once: true,
      },
    });

    // Number & Icon animation
    gsap.from(".how-step-icon", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".how-step",
        start: "top 85%",
        once: true,
      },
    });

    // Large image parallax effect
    gsap.from(".how-img", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".how-img",
        start: "top 90%",
        once: true,
      },
    });
  });

  return (
    <section id="how-it-works" className="bg-bg-gray py-32 overflow-hidden">
      <div className="section-spacing space-y-12">
        {/* Top heading section */}
        <div className="space-y-4 md:flex items-end justify-between">
          <div className="space-y-4 how-heading">
            <SubHeading title="How It Works" />
            <Heading
              classes="max-w-[24ch]"
              title="Make payments, transfers, and more in 3 simple steps"
            />
          </div>
          <button className="how-btn btn-primary">Get Started Now</button>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-6 gap-24 md:gap-12 grid md:grid-cols-2 lg:grid-cols-3">
          {steps?.map((step, i) => (
            <div key={i} className="space-y-12 relative how-step">
              <div className="w-fit relative how-step-icon">
                <p className="text-light-gray font-bold text-7xl">0{i + 1}</p>
                <Image
                  src={step.icon}
                  width={48}
                  height={48}
                  alt="Icon"
                  className="absolute top-9"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="paragraph">{step.description}</p>
              </div>
              {/* divider line */}
              <div
                className={`p-px bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] md:w-px md:p-0 md:h-[70%] md:absolute md:top-5 md:right-0 ${
                  i === 2 && "hidden"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Image */}
        <Image
          src={largeImg}
          width={1170}
          height={660}
          className="w-full h-full how-img"
          alt="Man looking at a laptop"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
