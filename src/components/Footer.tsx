"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 90%", // starts when footer is about to appear
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".footer-section", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".footer-nav",
          {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".footer-bottom",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".footer-glow",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
          "-=0.6"
        );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="section-spacing pt-32 relative overflow-hidden"
    >
      <div className="footer-section flex flex-col gap-12 text-center md:flex-row md:text-left md:justify-between pb-4">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="font-semibold text-lg">Easy Pay</span>
          </Link>
          <p className="paragraph max-w-[30ch]">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>

        <div className="footer-nav flex flex-col gap-10 md:flex-row">
          <nav className="space-y-4">
            <h4 className="heading-4">Short links</h4>
            <div className="paragraph flex flex-col gap-3">
              <Link href="#features">Features</Link>
              <Link href="#how-it-works">How it works</Link>
              <Link href="#security">Security</Link>
              <Link href="#testimonial">Testimonial</Link>
            </div>
          </nav>

          <nav className="space-y-4">
            <h4 className="heading-4">Other pages</h4>
            <div className="paragraph flex flex-col gap-3">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & condition</Link>
              <Link href="#">404</Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer-bottom border-t border-[#E7E7E8] pt-4 relative z-10">
        <p className="text-outfit font-light text-center text-lighter-gray">
          2024 © Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
        </p>
      </div>

      {/* Glowing background element */}
      <div className="footer-glow absolute size-96 rounded-full bg-[#CD9BFF]/80 blur-[100px] -bottom-32 left-1/2 -translate-x-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;
