import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaLightbulb, FaUsers, FaLock, FaChartBar } from "react-icons/fa";
import "../App.css";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black text-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-lines pointer-events-none"></div>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center relative z-10 mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
         WHAT WE DO
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mt-3"></div>
      </div>

      <p className="text-md font-semibold sm:text-lg text-gray-300 max-w-4xl mx-auto relative z-10 mb-10 px-4">
      At Busitron, our mission is to connect businesses, foster collaboration, and drive growth through an innovative networking platform. We understand the power of strong connections and the impact they can have on your business's success. That's why we've developed a platform that brings together businesses of all sizes, industries, and backgrounds
      </p>

      {/* Feature Cards */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 relative z-10"
      >
        {[
          {
            icon: <FaLightbulb />,
            title: "Innovative Solutions",
            text: "Empowering businesses with creative and tech-driven strategies.",
          },
          {
            icon: <FaUsers />,
            title: "Community & Collaboration",
            text: "Connecting industry leaders to foster strong partnerships.",
          },
          {
            icon: <FaLock />,
            title: "Data Security & Trust",
            text: "Robust security measures ensure complete data protection.",
          },
          {
            icon: <FaChartBar />,
            title: "Accelerated Growth",
            text: "Scaling your business with performance-driven strategies.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`group relative p-6 sm:p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center overflow-hidden cursor-pointer 
            transition-all duration-500 hover:scale-105 hover:shadow-xl ${activeIndex === index ? "scale-105 shadow-xl" : ""}`}
            onClick={() => handleClick(index)}
          >
            {/* Icon */}
            <div className={`text-yellow-500 text-6xl sm:text-7xl w-20 sm:w-24 h-20 sm:h-24 mb-4 transition-all duration-500 
              group-hover:blur-sm group-hover:scale-110 group-hover:text-yellow-400 ${activeIndex === index ? "blur-sm scale-110 text-yellow-400" : ""}`}>
              {feature.icon}
            </div>

            {/* Hidden Details (Glassmorphism) */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 
              backdrop-blur-md text-white transition-opacity duration-500 p-4 ${activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              <p className="text-base sm:text-lg font-semibold">{feature.text}</p>
            </div>

            {/* Title */}
            <h3 className={`text-xl sm:text-2xl font-bold text-white transition-all duration-500 group-hover:text-yellow-500 ${activeIndex === index ? "text-yellow-500" : ""}`}>
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
