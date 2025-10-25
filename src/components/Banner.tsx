import Hero from "./Hero";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <header className="px-2 pt-2 pb-10 sm:p-4 md:p-6 lg:py-6 lg:px-12 xl:px-16 2xl:px-24 container mx-auto bg-[url('/images/hero-bg.png')] min-h-[50vh] bg-no-repeat bg-cover space-y-4 md:space-y-12  lg:pb-0 rounded-xl">
      <nav className=" flex items-center justify-between text-primary">
        <Navbar />
      </nav>
      <section>
        <Hero />
      </section>
    </header>
  );
};

export default Banner;
