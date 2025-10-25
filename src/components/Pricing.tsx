import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free Plan",
    description: "Free for personal payments",
    price: 0,
    featureIcon: "./icons/checkmark-light.svg",
    features: [
      "Up to 100 transactions per month",
      "Basic proud protection",
      "Email",
    ],
  },
  {
    name: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: 19,
    featureIcon: "./icons/checkmark-dark.svg",
    features: [
      "Up to 1000 transactions per month",
      "Advanced proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
  {
    name: "Business",
    description: "Premium business transactions",
    price: 29,
    featureIcon: "./icons/checkmark-light.svg",
    features: [
      "Unlimited transactions per month",
      "Premium proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
];
const Pricing = () => {
  return (
    <section id="pricing" className="section-spacing space-y-12">
      <div className="*:text-center">
        <SubHeading title="Pricing" />
        <Heading
          title="Simple transparent pricing no hidden fees"
          classes="mx-auto max-w-[20ch]"
        />
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans?.map((item, index) => (
          <div
            key={index}
            className={`py-10 paragraph px-6 shadow-sm border border-slate-200 rounded-2xl space-y-6 grid justify-between max-w-sm mx-auto  ${
              index == 1 && "bg-primary text-white"
            }`}
          >
            <div className="space-y-6 relative">
              <div>
                <h3
                  className={`text-2xl font-bold text-primary ${
                    index === 1 && "text-white"
                  }`}
                >
                  {item.name}
                </h3>
                <p>{item.description}</p>
              </div>

              <p>
                <span
                  className={`text-6xl text-primary font-bold ${
                    index === 1 && "text-white"
                  }`}
                >
                  ${item.price}
                </span>
                <span>/month</span>
              </p>
              <div
                className={`bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] w-full  h-px`}
              ></div>
            </div>
            {/* features */}
            <div className="space-y-2">
              {item?.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image
                    src={item.featureIcon}
                    width={28}
                    height={28}
                    alt="Checkmark Icon"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-12 grid">
              <Button
                className={`border border-primary rounded-full font-bold px-6 py-6 bg-white hover:bg-gray-100 text-primary ${
                  index === 1 &&
                  "bg-btn-primary border-0 hover:bg-blue-400 text-white"
                }`}
                variant={"secondary"}
              >
                Get {item.name.split(" ")[0]} Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
