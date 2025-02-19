import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Andy",
    role: "Solutions Designer",
    image: "/team1.jpg",
    description:
      "Andrew leads the design and development team to deliver cutting edge solutions.",
  },
  {
    name: "Sateesh",
    role: "Lead Front End Developer",
    image: "/team2.jpg",
    description:
      "Sateesh guides our design team in the delivery of cutting edge solutions.",
  },
  {
    name: "Ramesh",
    role: "CFO",
    image: "/team3.jpg",
    description: "Ramesh is our resident number man.",
  },
  {
    name: "Pranay",
    role: "Project & Operations Manager",
    image: "/team4.jpg",
    description:
      "Pranay ensures our seamless operations and successful project deliveries.",
  },
  {
    name: "Akhila",
    role: "HR Manager",
    image: "/team5.jpg",
    description:
      "Akhila cultivates a positive work environment and prioritizes the well-being of our team.",
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