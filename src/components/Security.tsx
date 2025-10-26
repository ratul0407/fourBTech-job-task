import Heading from "./Heading";
import SubHeading from "./SubHeading";

const security = [
  {
    color: "#2E68FD",
    border_color: "#ECF0FB",
    title: "Two-factor authentication",
    description:
      "Two-factor authentication ensures added protection by using verification steps.",
  },
  {
    color: "#FC4343",
    border_color: "#FEEDED",
    title: "Fraud detection and alerts",
    description:
      "Fraud detection safeguards your money, sending instant alerts for any activity.",
    border: "sm:hidden lg:block",
  },
  {
    color: "#08A965",
    border_color: "#E5FCF2",
    title: "Transaction notifications",
    description:
      "Instant notifications for transaction keep you informed to manage your finances.",
    border: "lg:hidden",
  },
  {
    color: "#3B7793",
    border_color: "#E1F1F9",
    title: "Biometric access",
    description:
      "Easily and securely log in with biometric features, and facial recognition.",
    border: "sm:hidden lg:block",
  },
  {
    color: "#D77E1B",
    border_color: "#FAEEE2",
    title: "End-to-end encryption",
    description:
      "By encryption, protecting your data from unauthorized access.",
  },
  {
    color: "#932EFA",
    border_color: "#F4EDFC",
    title: "24/7 Protection support",
    description:
      "Our dedicated team is available around the clock to help you.",
    border: "sm:hidden",
  },
];
const Security = () => {
  return (
    <section id="security" className="section-spacing space-y-12">
      <div className="space-y-4 lg:flex lg:items-center lg:justify-between">
        <div>
          <SubHeading title="Security" />
          <Heading
            title="We protect your money at every step with Easy Pay"
            classes="max-w-[20ch]"
          />
        </div>
        <p className="paragraph lg:max-w-[40ch]">
          Easy Pay ensures your money is protected at every step with advanced
          encryption, real-time monitoring, and multi-factor authentication.
        </p>
      </div>
      <div className="bg-bg-gray rounded-2xl px-6 py-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {security?.map((item, index) => (
          <div key={index} className="space-y-6 relative ">
            <div
              style={{
                backgroundColor: item.color,
                borderColor: `${item.border_color}`,
              }}
              className={`size-4 rounded-full border-4`}
            ></div>
            <div>
              <p className="text-xl font-bold">{item.title}</p>
              <p className="paragraph">{item.description}</p>
            </div>
            <div
              className={`p-px bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] sm:w-px sm:p-0 sm:h-[80%] sm:absolute sm:top-0 sm:-right-4 ${item.border}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Security;
