import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Image from "next/image";

const steps = [
  {
    icon: "./download.svg",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play hassle free.",
  },
  {
    icon: "./card.svg",
    title: "Link your bank or card",
    description:
      "Easily connect your account in seconds with advanced security for peace of mind.",
  },
  {
    icon: "./camera.svg",
    title: "Start paying",
    description:
      "Easily split bills, send money to friends, and make smooth online payments instantly.",
  },
];
const HowItWorks = () => {
  return (
    <section className="bg-bg-gray py-32">
      <div className="p-4 md:p-6 lg:py-6 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
        <div className="space-y-4 md:flex items-end justify-between">
          <div className="space-y-4">
            <SubHeading title="How It Works" />
            <Heading
              classes="max-w-[24ch]"
              title="Make payments, transfers, and 
more in 3 simple steps"
            />
          </div>
          <Button
            variant={"ghost"}
            className="bg-btn-primary text-white rounded-full px-4 py-6 font-semibold"
          >
            Get Started Now
          </Button>
        </div>
        <div className="bg-white rounded-2xl p-6 gap-24 md:gap-12 grid md:grid-cols-2 lg:grid-cols-3">
          {steps?.map((step, index) => (
            <div key={index} className="space-y-12 relative">
              <div className="w-fit relative">
                <p className="text-light-gray font-bold text-7xl">0{++index}</p>
                <Image
                  src={step.icon}
                  width={48}
                  height={48}
                  alt="Icon"
                  className="absolute top-9"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
              <div
                className={`p-px bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] md:w-px md:p-0 h-[80%] md:absolute md:top-0 md:right-0 ${
                  index === 3 && "lg:hidden"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
