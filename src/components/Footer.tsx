import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-spacing flex flex-col gap-12 text-center md:flex-row md:text-left md:justify-between pt-32 ">
      <div>
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className=" font-semibold text-lg">Easy Pay</span>
        </Link>
        <p className="paragraph max-w-[30ch]">
          Easy Pay offers secure, seamless, and fee-free payments for effortless
          global transactions.
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
    </footer>
  );
};

export default Footer;
