import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image  from "../assets/who-we-are.avif"


const WhoWeAre = () => {
  return (
    <section className="bg-black py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            WHO WE ARE?
            <span className="block w-20 h-1 bg-yellow-500 mt-3"></span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-lg sm:text-2xl leading-relaxed"
          >
            At <b>Busitron</b>, we are more than just a networking platform; we are a
            community of forward-thinking businesses and professionals driven by
            a shared vision of growth, collaboration, and innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-lg sm:text-2xl mt-6"
          >
            Our journey began with a vision to bridge gaps, spark collaborations,
            and transform business networking. Today, we empower entrepreneurs,
            startups, and enterprises to create meaningful partnerships.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg sm:text-2xl mt-6"
          >
            At Busitron, our mission is to connect businesses, foster collaboration, 
            and drive growth through an innovative networking platform. We understand 
            the power of strong connections and the impact they can have on your 
            business's success.
          </motion.p>

          {/* Read More Button */}
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-black text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:bg-yellow-600 transition-all"
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>

        {/* Right - Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:w-1/2 w-full flex justify-center"
        >
          <div className="relative w-full max-w-lg rounded-3xl border-4 border-white overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Busitron Network"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>

            {/* Animated Text Over Image */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-6 sm:bottom-12 left-0 right-0 text-center"
            >
              <h3 className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">
                Building Tomorrow's
              </h3>
              <div className="relative inline-block">
                <span className="text-4xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  Connections
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;
