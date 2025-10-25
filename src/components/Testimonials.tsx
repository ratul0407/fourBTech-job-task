"use client";
import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import testimonialImg1 from "@/public/images/testimonial-img1.png";
import testimonialImg2 from "@/public/images/testimonial-img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
const testimonials = [
  {
    rating: 5,
    review:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    reviewer: "Ethan Williams",
    occupation: "Digital Marketing Specialist",
    picture: testimonialImg1,
  },
  {
    rating: 5,
    review:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    reviewer: "Daniel Thompson",
    occupation: "Product Designer",
    picture: testimonialImg2,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-bg-gray py-32 rounded-2xl">
      <div className="section-spacing space-y-12 grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <SubHeading title="Testimonial" />
            <Heading
              title="We’ve build trust with reviews from real users"
              classes="max-w-[20ch]"
            />
          </div>
          <p className="paragraph max-w-[45ch]">
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>
          <div className="hidden md:flex items-center gap-4 justify-start">
            <Button
              variant={"ghost"}
              className="custom-prev bg-primary text-white p-2 rounded-full disabled:bg-white disabled:border-gray-700 disabled:border disabled:text-primary"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant={"ghost"}
              className=" custom-next bg-primary text-white p-2 rounded-full disabled:bg-white disabled:border-gray-700 disabled:border disabled:text-primary"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          modules={[Navigation]}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {testimonials?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="rounded-2xl bg-white py-8 px-6 space-y-8 max-w-sm"
            >
              <div className="space-y-4">
                <div className="flex">
                  {Array.from({ length: item.rating }, (_, i) => i).map(
                    (star) => (
                      <Image
                        key={star}
                        src={"./icons/star.svg"}
                        height={18}
                        width={18}
                        alt="star icon"
                      />
                    )
                  )}
                </div>
                <p className="paragraph">{item.review}</p>
              </div>
              <div className="flex items-center gap-5">
                <Image
                  className="rounded-full"
                  src={item.picture}
                  alt={item.reviewer}
                  width={52}
                  height={52}
                />
                <div>
                  <h3 className="font-semibold text-lg text-primary">
                    {item.reviewer}
                  </h3>
                  <p className="paragraph">{item.occupation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden flex items-center gap-4 justify-center">
          <Button
            variant={"ghost"}
            className="custom-prev bg-primary text-white p-2 rounded-full disabled:bg-white disabled:border-gray-700 disabled:border disabled:text-primary"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"ghost"}
            className=" custom-next bg-primary text-white p-2 rounded-full disabled:bg-white disabled:border-gray-700 disabled:border disabled:text-primary"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
