"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navItem = [
  { title: "Features", href: "#features" },
  { title: "Security", href: "#security" },
  { title: "Pricing", href: "#pricing" },
  { title: "Benefits", href: "#benefits" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const section = document.querySelector(href);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.6 },
    });
    tl.from(".logo", {
      opacity: 0,
      x: -30,
    })
      .from(".nav-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
      })
      .from(".btn-primary", {
        opacity: 0,
        x: 20,
      });
  });

  return (
    <>
      {/* Logo */}
      <Link href="/" className="overflow-hidden logo flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="font-semibold text-lg">Easy Pay</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 paragraph font-semibold text-lg overflow-hidden">
        {navItem.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="nav-item hover:text-gray-300"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="btn-primary">Contact Us</button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white p-5 paragraph">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              {navItem.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left hover:text-gray-300"
                >
                  {item.title}
                </button>
              ))}
              <Button
                variant="secondary"
                className="mt-4 bg-btn-primary text-white hover:bg-gray-200 w-fit p-4"
              >
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
