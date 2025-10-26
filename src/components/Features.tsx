"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Marquee from "react-fast-marquee";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    color: "bg-light-blue",
    icon: "./icons/payment.svg",
    title: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
  },
  {
    color: "bg-light-orange",
    icon: "./icons/fees.svg",
    title: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
  },
  {
    color: "bg-light-green",
    icon: "./icons/wallet.svg",
    title: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
  },
  {
    color: "bg-light-purple",
    icon: "./icons/secure.svg",
    title: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.from(".features-heading", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
      },
    });

    // Animate each card in with a stagger
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 300,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-spacing space-y-12 overflow-hidden"
    >
      <div className="text-center ">
        <div className="overflow-hidden features-heading">
          <SubHeading title="Features" />
        </div>
        <div className="overflow-hidden">
          <Heading
            classes="max-w-[20ch] mx-auto features-heading"
            title="Why choose Easy Pay for effortless payments?"
          />
        </div>
      </div>

      {/* features cards */}
      <div className="px-12 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="overflow-hidden py-8">
            <div
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`${feature.color} py-8 px-5.5 rounded-2xl text-center space-y-10 max-w-xs mx-auto shadow-md`}
            >
              <Image
                src={feature.icon}
                width={60}
                height={60}
                alt={feature.title}
                className="mx-auto"
              />
              <div>
                <p className="heading-4">{feature.title}</p>
                <p className="paragraph">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* logo marquee */}
      <Marquee direction="left" autoFill={true}>
        <div className="flex overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => (
            <Image
              key={item}
              src={`./icons/logo${item}.svg`}
              width={10}
              height={10}
              className="w-auto h-auto ml-16"
              alt="logo"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Features;
