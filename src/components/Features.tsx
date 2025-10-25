"use client";
import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Marquee from "react-fast-marquee";

const features = [
  {
    color: "bg-light-blue",
    icon: "./icons/payment.svg",
    title: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
  },
  {
    color: "bg-light-orange",
    icon: "./icons/fees.svg",
    title: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
  },

  {
    color: "bg-light-green",
    icon: "./icons/wallet.svg",
    title: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
  },
  {
    color: "bg-light-purple",
    icon: "./icons/secure.svg",
    title: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing space-y-12">
      <div className="text-center">
        <SubHeading title="Features" />
        <Heading
          classes="max-w-[20ch] mx-auto"
          title="Why choose Easy Pay for 
effortless payments?"
        />
      </div>
      {/* features card */}
      <div className="px-12 lg:px-0 grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features?.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} py-8 px-5.5 rounded-2xl text-center space-y-10 max-w-xs mx-auto`}
          >
            <Image
              src={feature.icon}
              width={60}
              height={60}
              alt="Payment Icon"
              className="mx-auto"
            />
            <div>
              <p className="heading-4">{feature.title}</p>
              <p className="paragraph">{feature.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="bg-light-blue py-8 px-5.5 rounded-2xl text-center space-y-10">
          <Image
            src="./payment.svg"
            width={60}
            height={60}
            alt="Payment Icon"
            className="mx-auto"
          />
          <div>
            <p className="font-bold text-xl">Instant payments</p>
            <p className="paragraph">
              Send money to friends or family in real-time, for free.
            </p>
          </div>
        </div> */}
      </div>
      {/* logo marquee */}
      <Marquee direction="left" autoFill={true}>
        <div className="flex  overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => (
            <Image
              key={item}
              src={`./icons/logo${item}.svg`}
              width={10}
              height={10}
              className="w-auto h-auto ml-16"
              alt="logo"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Features;
