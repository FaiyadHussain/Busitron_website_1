import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/bussiness-growth.jpg"
import image2 from "../assets/Innovation & Tech.avif"
import image3 from "../assets/Team Collaboration.avif"

const AboutBusitron = () => {
  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 relative border-l-4 border-yellow-500 pl-4"
        >
          ABOUT{" "}
          <span className="bg-gradient-to-r from-[#df3482] to-[#4B0082] text-transparent bg-clip-text">
            BUSITRON
          </span>
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          Busitron is where connections turn into collaborations, and
          collaborations lead to growth. We are a passionate team dedicated to
          redefining business networking in the digital age. Our platform
          empowers professionals from diverse backgrounds to connect, learn,
          and thrive together.  
          <br />
          Our journey began with a simple idea: to make networking accessible,
          enjoyable, and rewarding for all. Today, Busitron is a vibrant
          community of entrepreneurs, industry leaders, and visionaries, all
          united by the belief that together, we can achieve more. Whether
          you're here to find new opportunities, share your expertise, or
          simply expand your network, Busitron is your trusted partner on this
          exciting journey.
        </motion.p>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image1}
              alt="Business Meeting"
              className="w-full h-60 object-cover transition-all duration-500 group-hover:blur-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-bold transform scale-75 group-hover:scale-110 transition-transform duration-300">
                Business Growth
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image2}
              className="w-full h-60 object-cover transition-all duration-500 group-hover:blur-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-bold transform scale-75 group-hover:scale-110 transition-transform duration-300">
                Innovation & Tech
              </span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image3}
              alt="Digital Collaboration"
              className="w-full h-60 object-cover transition-all duration-500 group-hover:blur-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-bold transform scale-75 group-hover:scale-110 transition-transform duration-300">
                Team Collaboration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBusitron;
