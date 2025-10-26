import { CodeXml, Headset, LayoutDashboardIcon } from "lucide-react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Button } from "@/components/ui/button";

const services = [
  {
    color: "bg-light-blue",
    icon: CodeXml,
    title: "We Speak Software",
    description:
      "Our B2B Payment API integrates seamlessly, offering a customizable white-labeled experience for your brand.",
  },
  {
    color: "bg-light-orange",
    icon: LayoutDashboardIcon,
    title: "Simplify your workflow",
    description:
      "Handle payments, financing, and risk management in one place- so you can focus on your business",
  },
  {
    color: "bg-light-purple",
    icon: Headset,
    title: "Support that grows with you",
    description:
      "More than support-we're your partner in innovation, helping your payments and businesses to grow",
  },
];
const EasyService = () => {
  return (
    <section className="section-spacing gap-12 flex flex-col lg:flex-row">
      <div className="space-y-2 flex flex-col lg:justify-between">
        <div>
          <SubHeading title="Reliable" />
          <Heading title="The Easiest Way to Move Money" classes="" />
        </div>
        <Button className="bg-btn-primary w-fit text-white rounded-full p-6 font-semibold">
          Get Started Now
        </Button>
      </div>
      <div className="space-y-8">
        {services?.map((service, index) => (
          <div
            key={index}
            className={`${service.color} p-6 flex items-start rounded-2xl gap-4`}
          >
            <div>
              <service.icon />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-2xl leading-6">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EasyService;
