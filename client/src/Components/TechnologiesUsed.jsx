import { motion } from "framer-motion";
import image1 from "../assets/HTML.webp";
import image2 from "../assets/css.webp";
import image3 from "../assets/JAVASCRIPT.png";
import image4 from "../assets/TailwindCSS.webp";

import image5 from "../assets/react.svg";
import image6 from "../assets/Nextjs.webp";
import image7 from "../assets/NODEJS.webp";
import image8 from "../assets/Express.svg";
import image9 from "../assets/mongodb.webp";
import image10 from "../assets/AWS.png";
import image11 from "../assets/Postgres.png";
import image12 from "../assets/GIT.png";
import backgroundImage from "../assets/background.jpeg"; // Import the background image

export default function TechLogos() {
  const technologies = [
    { name: "HTML", img: image1 },
    { name: "CSS", img: image2 },
    { name: "JavaScript", img: image3 },
    { name: "Tailwind CSS", img: image4 },
    { name: "React", img: image5 },
    { name: "Next.js", img: image6 },
    { name: "Node.js", img: image7 },
    { name: "Express.js", img: image8 },
    { name: "MongoDB", img: image9 },
    { name: "AWS", img: image10 },
    { name: "PostgreSQL", img: image11 },
    { name: "Git", img: image12 },
  ];

  return (
    <div 
      className="relative bg-black text-white py-20 px-6 lg:px-24 flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      />

      {/* Heading */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 uppercase tracking-wide relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies We Use
      </motion.h2>

      {/* Logo Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {technologies.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_#00f0ff] rounded-2xl p-4 bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-gray-700 shadow-md">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium mt-3 text-gray-300 uppercase tracking-wider">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
