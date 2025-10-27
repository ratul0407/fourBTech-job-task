"use client";
import { CodeXml, Headset, LayoutDashboardIcon } from "lucide-react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const benefits = [
  {
    color: "bg-light-blue",
    icon: CodeXml,
    title: "We Speak Software",
    description:
      "Our B2B Payment API integrates seamlessly, offering a customizable white-labeled experience for your brand.",
  },
  {
    color: "bg-light-orange",
    icon: LayoutDashboardIcon,
    title: "Simplify your workflow",
    description:
      "Handle payments, financing, and risk management in one place- so you can focus on your business",
  },
  {
    color: "bg-light-green",
    icon: Headset,
    title: "Support that grows with you",
    description:
      "More than support-we're your partner in innovation, helping your payments and businesses to grow",
  },
];
const Benefits = () => {
  useGSAP(() => {
    gsap.from(".heading", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 40%",
        once: true,
      },
    });
    gsap.from(".benefits-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".benefits-btn",
        start: "top 85%",
        once: true,
      },
    });

    gsap.from(".benefits-card", {
      y: 100,
      opacity: 0,
      duration: 0.7,
      delay: 0.7,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".benefits-container",
        start: "top 40%",
        once: true,
      },
    });
  });
  return (
    <section
      id="benefits"
      className="section-spacing gap-12 flex flex-col lg:flex-row"
    >
      <div className="space-y-2 flex flex-col lg:justify-between">
        <div className="heading">
          <SubHeading title="Benefits" />
          <Heading title="The Easiest Way to Move Money" classes="" />
        </div>
        <div className="benefits-btn">
          <button className="btn-primary">Get Started Now</button>
        </div>
      </div>
      <div className="space-y-8 benefits-container">
        {benefits?.map((benefits, index) => (
          <div key={index} className={`overflow-hidden`}>
            <div
              className={` ${benefits.color} benefits-card p-6 flex items-start rounded-2xl gap-4`}
            >
              <div>
                <benefits.icon />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-2xl leading-6">
                  {benefits.title}
                </h3>
                <p>{benefits.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
