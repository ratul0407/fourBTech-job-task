"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItem = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Security",
    href: "#security",
  },
  {
    title: "Benefits",
    href: "#",
  },
];
const Navbar = () => {
  return (
    <>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className=" font-semibold text-lg">Easy Pay</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 paragraph font-semibold text-lg">
        {navItem.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="hover:text-gray-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button
          variant="secondary"
          className="bg-btn-primary rounded-full font-semibold hover:bg-blue-400 text-white"
        >
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white p-5 paragraph ">
            <div className="flex flex-col space-y-4 mt-8">
              {navItem.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-gray-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.title}
                </Link>
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
