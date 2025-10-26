"use client";
import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const pricingPlans = [
  {
    name: "Free Plan",
    description: "Free for personal payments",
    price: 0,
    featureIcon: "./icons/checkmark-light.svg",
    features: [
      "Up to 100 transactions per month",
      "Basic proud protection",
      "Email",
    ],
  },
  {
    name: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: 19,
    featureIcon: "./icons/checkmark-dark.svg",
    features: [
      "Up to 1000 transactions per month",
      "Advanced proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
  {
    name: "Business",
    description: "Premium business transactions",
    price: 29,
    featureIcon: "./icons/checkmark-light.svg",
    features: [
      "Unlimited transactions per month",
      "Premium proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
];
const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        once: true,
      },
      delay: 0.3,
    });

    // Animate heading
    tl.from(".pricing-heading", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate pricing cards
    tl.from(
      ".price-card",
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Emphasize the middle card (Advanced)
    tl.to(
      ".price-card:nth-child(2)",
      {
        y: -20,
        scale: 1.05,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.5"
    );

    // Animate features inside cards
    tl.from(
      ".feature-item",
      {
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        ease: "power2.out",
      },
      "-=0.5"
    );
  });
  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-spacing space-y-12"
    >
      <div className="*:text-center pricing-heading">
        <SubHeading title="Pricing" />
        <Heading
          title="Simple transparent pricing no hidden fees"
          classes="mx-auto max-w-[20ch]"
        />
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans?.map((item, index) => (
          <div
            key={index}
            className={`price-card py-10 paragraph px-6 shadow-sm border border-slate-200 rounded-2xl space-y-6 grid justify-between max-w-sm mx-auto  ${
              index == 1 && "bg-primary text-white"
            }`}
          >
            <div className="space-y-6 relative">
              <div>
                <h3
                  className={`text-2xl font-bold text-primary ${
                    index === 1 && "text-white"
                  }`}
                >
                  {item.name}
                </h3>
                <p>{item.description}</p>
              </div>

              <p>
                <span
                  className={`text-6xl text-primary font-bold ${
                    index === 1 && "text-white"
                  }`}
                >
                  ${item.price}
                </span>
                <span>/month</span>
              </p>
              <div
                className={`bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] w-full  h-px`}
              ></div>
            </div>
            {/* features */}
            <div className="space-y-2">
              {item?.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image
                    src={item.featureIcon}
                    width={28}
                    height={28}
                    alt="Checkmark Icon"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-12 grid">
              <Button
                className={`border border-primary rounded-full font-bold px-6 py-6 bg-white hover:bg-gray-100 text-primary ${
                  index === 1 &&
                  "bg-btn-primary border-0 hover:bg-blue-400 text-white"
                }`}
                variant={"secondary"}
              >
                Get {item.name.split(" ")[0]} Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
