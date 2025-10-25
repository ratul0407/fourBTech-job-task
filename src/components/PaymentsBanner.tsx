import { Button } from "@/components/ui/button";

const PaymentsBanner = () => {
  return (
    <section className="section-spacing">
      <div className="bg-[url('/images/payments-banner.png')] py-20 text-white rounded-xl bg-no-repeat space-y-10">
        <div className="space-y-4">
          <h3 className="font-bold text-2xl md:text-5xl max-w-[25ch] mx-auto text-center">
            Ready to experience seamless secure payments globally
          </h3>
          <p className="text-center max-w-[63ch] mx-auto px-8 sm:px-0">
            Ready for hassle-free, secure payments anywhere in the world? Start
            using Monks Pay today it&apos;s fast, free, and focused on keeping
            your transactions secure!
          </p>
        </div>
        <div className="mx-auto text-center space-x-5">
          <Button className="text-white bg-btn-primary rounded-full hover:bg-blue-400 font-outfit text-semibold p-6">
            Download the App
          </Button>
          <Button className="text-white bg-transparent border border-white rounded-full font-outfit text-semibold p-6 hover:bg-white hover:text-black">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentsBanner;
