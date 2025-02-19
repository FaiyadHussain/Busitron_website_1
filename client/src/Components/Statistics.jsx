import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1000, label: "Industries" },
  { value: 20000, label: "Business Owners" },
  { value: 2000, label: "Collaborations" },
  { value: 1500, label: "Cups of Coffee" },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Starts animation when 50% of the section is visible
  });

  return (
    <section ref={ref} className="bg-black text-white py-16 shadow-lg shadow-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-black/70 rounded-lg shadow-md shadow-gray-800">
            <h2 className="text-5xl font-extrabold text-yellow-400">
              {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="," /> : 0}+
            </h2>
            <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};  

export default Statistics;
