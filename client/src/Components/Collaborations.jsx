import React from "react";

const partnerLogos = [
  { id: 1, src: "/images/google.png", alt: "Google" },
  { id: 2, src: "/images/microsoft.png", alt: "Microsoft" },
  { id: 3, src: "/images/amazon.png", alt: "Amazon" },
  { id: 4, src: "/images/tesla.png", alt: "Tesla" },
  { id: 5, src: "/images/apple.png", alt: "Apple" },
  { id: 6, src: "/images/facebook.png", alt: "Facebook" },
  { id: 7, src: "/images/netflix.png", alt: "Netflix" },
  { id: 8, src: "/images/ibm.png", alt: "IBM" },
  { id: 9, src: "/images/samsung.png", alt: "Samsung" },
];

const Collaborations = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 px-6">
      {/* Title */}
      <h2 className="text-center text-5xl font-extrabold text-white mb-12 uppercase tracking-widest">
        Our Collaborations
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-12 animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-opacity-30 bg-white shadow-lg backdrop-blur-lg w-44 h-44 flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:border hover:border-blue-500"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-24 h-24 object-contain transition-all duration-300 hover:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Collaborations;
