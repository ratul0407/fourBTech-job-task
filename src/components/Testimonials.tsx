import Heading from "./Heading";
import SubHeading from "./SubHeading";

const testimonials = [
  {
    review:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    reviewer: "Ethan Williams",
    occupation: "Digital Marketing Specialist",
  },
];
const Testimonials = () => {
  return (
    <section className="bg-bg-gray py-32">
      <div className="section-spacing">
        <div className="space-y-6">
          <div>
            <SubHeading title="Testimonial" />
            <Heading
              title="We’ve build trust with reviews from real users"
              classes=""
            />
          </div>
          <p className="text-secondary">
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
