import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/HrManger.jpg"

const team = [
  {
    name: "P Sri Hari Varma",
    role: "Managing Director",
    image: "/team1.jpg",
    description:
      "P Sri Hari Varma ensures our seamless operations and successful project deliveries.",
  },
  {
    name: "A Souumiya Sravinthi",
    role: "Director",
    image: "/team2.jpg",
    description: "A Souumiya Sravinthi provides strategic leadership and business direction.",
  },
  {
    name: "A Manikanta Madhu",
    role: "Chief Operation Officer",
    image: "/team3.jpg",
    description: "A Manikanta Madhu oversees operational efficiency and project execution.",
  },
  {
    name: "Kappala Kartheek",
    role: "HR Manager",
    image:image1,  // Fixed issue here
    description:
      "Kartheek cultivates a positive work environment and prioritizes the well-being of our team.",
  },
];


const Team = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 flex flex-col items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black opacity-40 z-0"
      ></motion.div>

      {/* Animated Background Pattern */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover opacity-10 z-0"
      ></motion.div>

      <div className="relative flex items-center justify-center w-full mb-10">
        <div className="h-1 w-20 bg-red-500"></div>
        <h2 className="text-3xl font-bold mx-4">Highly Qualified Team</h2>
        <div className="h-1 w-20 bg-red-500"></div>
      </div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 relative bg-gray-900 rounded-lg shadow-lg z-10"
          >
            <div className="relative mb-4">
              <img
                src={member.image}
                className="w-28 h-28 rounded-full object-cover border-4 border-gray-500 shadow-md"
                alt={member.name}
              />
            </div>
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-yellow-500 text-sm font-medium">{member.role}</p>
            <p className="text-gray-300 mt-2 text-sm">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;