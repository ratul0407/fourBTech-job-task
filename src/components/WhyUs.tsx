"use client";
import { useEffect, useRef } from "react";
import { DollarSign, Landmark, MoveLeft, MoveRight } from "lucide-react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

gsap.registerPlugin(ScrollTrigger);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [600000, 900000, 1200000, 1350000, 1600000, 1876580],
        borderColor: "#2D9CDB",
        backgroundColor: "rgba(45, 156, 219, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#999", font: { size: 12 } },
      },
      y: { display: false },
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          once: true,
        },
        delay: 0.3, // wait before starting
      });

      tl.from(".why-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".why-card",
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".why-icons div",
          {
            y: 20,
            opacity: 0,
            rotate: -20,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".chart-container",
          {
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-spacing space-y-12 overflow-hidden"
    >
      <div className="text-center why-heading">
        <SubHeading title="Why Us" />
        <Heading title="Why They Prefer Easy Pay" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* CARD 1 */}
        <div className="bg-light-blue p-6 rounded-2xl space-y-12 why-card">
          <h3 className="text-primary font-bold text-7xl">3K+</h3>
          <p className="paragraph text-2xl max-w-[20ch]">
            Businesses already running on Easy Pay
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 space-y-12 bg-light-blue rounded-2xl why-card">
          <p className="paragraph text-2xl max-w-[20ch]">
            Instant withdraw your funds at any time
          </p>
          <div className="flex gap-6 items-center justify-center md:justify-start why-icons">
            <div className="bg-accent rounded-full w-fit p-4">
              <DollarSign className="text-white size-8" />
            </div>
            <div className="*:size-10 *:text-gray-300">
              <MoveRight />
              <MoveLeft className="-mt-6" />
            </div>
            <div className="bg-btn-primary rounded-full w-fit p-4">
              <Landmark className="text-white size-8" />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-light-blue p-6 space-y-12 rounded-2xl sm:col-span-2 md:flex why-card">
          <div className="space-y-6 md:basis-1/2">
            <h3 className="text-primary font-bold text-4xl">
              No assets volatility
            </h3>
            <p className="paragraph text-2xl">
              Generate returns on your cash reserves without making any
              investments
            </p>
          </div>

          <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm relative basis-1/2 chart-container">
            <div className="flex justify-between text-sm text-gray-500">
              <p>Summary</p>
              <p>6 Months ▼</p>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              $1,876,580
            </h3>
            <div>
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
