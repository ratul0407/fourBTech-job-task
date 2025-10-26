import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-spacing pt-32 relative overflow-hidden">
      <div className="flex flex-col gap-12 text-center md:flex-row md:text-left md:justify-between pb-4">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className=" font-semibold text-lg">Easy Pay</span>
          </Link>
          <p className="paragraph max-w-[30ch]">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
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
      <div className="border-t border-[#E7E7E8] pt-4">
        <p className="text-outfit font-light text-center text-lighter-gray">
          2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
        </p>
        <div className="absolute size-96 rounded-full bg-[#CD9BFF]/80 blur-[100px] -bottom-120 left-1/2 -translate-1/2"></div>
      </div>
    </footer>
  );
};

export default Footer;
