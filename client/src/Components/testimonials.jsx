import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Smith Henry",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    feedback:
      "The ConnectLocal Business Mixer organized by Busitron was incredible. The connections I made have opened doors to new collaborations and partnerships.",
  },
  {
    name: "Shaik Zobain",
    role: "Director",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    feedback:
      "I've been a member of Busitron and have seen it evolve into a dynamic community of professionals. Their webinars offer top-notch insights.",
  },
  {
    name: "Robert Ken",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    feedback:
      "As a business owner, networking is crucial. Busitron has been instrumental in connecting me with potential clients and partners.",
  },
  {
    name: "Alice Morgan",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback:
      "Networking has never been this seamless. Busitron’s community helped me expand my professional circle and grow my business.",
  },
  {
    name: "John Carter",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    feedback:
      "Busitron is the perfect platform for meeting like-minded professionals and exploring new opportunities.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 768; // Detect mobile view

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 3)) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - (isMobile ? 1 : 3) : prevIndex - (isMobile ? 1 : 3)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-8 relative inline-block">
          What Our Clients Say
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>

        {/* Testimonials Section */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-6">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="text-white text-3xl p-3 rounded-full border border-gray-600 hover:bg-yellow-500 hover:text-black transition-all"
            >
              <FaChevronLeft />
            </button>

            {/* Testimonials Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {testimonials.slice(index, index + (isMobile ? 1 : 3)).map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 
                               transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Testimonial Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-yellow-500 transition-transform duration-300 hover:scale-110"
                    />
                    
                    {/* Name & Role */}
                    <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                    <p className="text-yellow-400 text-sm mb-4">{testimonial.role}</p>

                    {/* Feedback */}
                    <p className="text-gray-300 opacity-100 transition-opacity duration-300">
                      "{testimonial.feedback}"
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="text-white text-3xl p-3 rounded-full border border-gray-600 hover:bg-yellow-500 hover:text-black transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
