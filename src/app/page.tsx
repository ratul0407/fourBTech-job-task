import Banner from "../components/Banner";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="container mx-auto space-y-32 pt-32 text-primary">
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}
