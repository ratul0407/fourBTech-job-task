"use client";
import { Button } from "@/components/ui/button";
import "./styles.modules.css";
import AppleIcon from "@/public/icons/Apple.png";
import PlayStoreIcon from "@/public/icons/Playstore.png";
import HeroImg from "@/public/images/hero.png";
import TrendUp from "@/public/icons/trend-up.svg";
import User1 from "@/public/images/user1.png";
import User2 from "@/public/images/user2.png";
import User3 from "@/public/images/user3.png";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.4 },
    });

    tl.from(".hero-img", { opacity: 0, y: 60 })
      // Slide in hero cards (staggered)
      .from(".hero-card", { opacity: 0, y: 30, stagger: 0.2 })
      // Animate heading from below
      .from(".top-header", { opacity: 0, x: 60 })
      .from(".hero-heading", { opacity: 0, y: 100 })
      // Fade in paragraph
      .from(".hero-subtext", { opacity: 0, y: 20 })
      // Buttons fade and pop
      .from(".hero-btn", { opacity: 0, scale: 0.8, stagger: 0.15 })
      .from(".hero", { "--underline-width": "0%", ease: "power1.inOut" });
  }, []);
  return (
    <div
      ref={heroRef}
      className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-between lg:items-center"
    >
      {/* hero image side */}
      <div className="relative hero-img">
        {/* payment received card */}
        <div className=" bg-white w-fit rounded-xl shadow-lg p-2 absolute bottom-8 -left-4 sm:p-4 hero-card">
          <h3 className="font-semibold">Payment Received</h3>
          <p className="font-bold text-lg text-btn-primary">+35,890.00</p>
          <div className="text-sm flex justify-between gap-6">
            <span className="paragraph">1st Jan, 2024</span>
            <div className="text-green-600 flex items-center gap-1">
              <span>3.09%</span>
              <Image src={TrendUp} alt="Up Icon" width={16} height={16} />
            </div>
          </div>
        </div>
        {/* active users card */}
        <div className="shadow-lg p-2 bg-white w-fit rounded-xl flex items-center gap-4 absolute right-0 top-16 flex-col sm:flex-row sm:p-4 sm:top-1/2 hero-card">
          <div className="*:rounded-full flex *:-ml-2 *:border-2 *:border-white">
            <Image src={User1} alt="Image of an user" width={40} height={40} />
            <Image src={User2} alt="Image of an user" width={40} height={40} />
            <Image src={User3} alt="Image of an user" width={40} height={40} />
          </div>
          <div>
            <p className="font-semibold leading-2">120K+</p>
            <span className="paragraph text-sm">Active Users</span>
          </div>
        </div>
        {/* hero img */}
        <Image
          className="w-full h-full max-w-[600px] max-h-[600px]"
          src={HeroImg}
          alt="A man smiling looking at his phone"
        />
      </div>
      {/* call to action side */}
      <div className="space-y-4 text-center lg:text-left">
        <p className="top-header uppercase paragraph font-semibold leading-px">
          Easy Payment
        </p>
        <div className="overflow-hidden">
          <h1 className="hero-heading font-urbanist text-primary font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl min-w-[16ch] max-w-[16ch] leading-snug  mx-auto ">
            Pay <span className="hero"> fast and smarter</span> from anywhere
          </h1>
        </div>
        <p className="hero-subtext paragraph px-12 lg:px-0 lg:max-w-[45ch] ">
          Experience the future of payments: fast, secure, and tailored for the
          next generation&rsquo;s convenience and trust.
        </p>
        <div className="hero-btn text-white mx-auto w-fit grid grid-cols-2 gap-2 lg:mx-0 lg:pt-12">
          <Button className="py-6 rounded-xl">
            <div className="flex items-center gap-3">
              <Image src={AppleIcon} alt="Apple icon" width={24} height={24} />
              <div className="flex flex-col text-left ">
                <span className="text-xs">Download on the</span>{" "}
                <span className="font-medium text-lg leading-4">
                  Apple Store
                </span>
              </div>
            </div>
          </Button>
          <Button className="py-6 rounded-xl">
            <div className="flex items-center gap-3">
              <Image
                src={PlayStoreIcon}
                alt="Apple icon"
                width={24}
                height={24}
              />
              <div className="flex flex-col text-left ">
                <span className="text-xs">GET IT ON</span>{" "}
                <span className="font-medium text-lg leading-4">
                  Google Play
                </span>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
