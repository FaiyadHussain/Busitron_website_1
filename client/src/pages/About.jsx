import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  


  return (
    <div className="min-h-screen  mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* WHO WE ARE Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6">
            WHO WE ARE?
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Busitron</span>, we are more than just a networking platform; we are a 
            community of forward-thinking businesses and professionals driven by 
            a shared vision of growth, collaboration, and innovation.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Story
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            <span className="text-blue-400 font-semibold">Busitron</span> was born from a simple idea: to create a space where 
            businesses, regardless of their size or industry, could come together 
            to explore new horizons. Our journey began with a vision of bridging 
            gaps, sparking collaborations, and transforming the way businesses network.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Values
          </h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { icon: "🔗", title: "Connection", desc: "We believe in the power of connection. Every interaction on Busitron is an opportunity to forge meaningful relationships." },
              { icon: "🤝", title: "Collaboration", desc: "Collaboration is at the heart of our community. We encourage businesses to work together and share ideas." },
              { icon: "🚀", title: "Innovation", desc: "We embrace innovation as a catalyst for progress, empowering businesses to adapt and thrive." },
              { icon: "🛡️", title: "Integrity", desc: "Trust is the cornerstone of our platform, ensuring that every interaction on Busitron is built on transparency and authenticity." },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">{value.icon}</span>
                  <span>{value.title}</span>
                </h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Community Section */}
        <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Community
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Busitron's strength lies in its diverse and vibrant community. We host 
            businesses from various industries, backgrounds, and regions, creating 
            a rich tapestry of opportunities. Together, we create a culture of innovation, collaboration, and mutual success.
          </p>
        </div>

        {/* Our Vision for the Future Section */}
        <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Vision for the Future
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            At Busitron, our future vision is clear — to become the leading global platform for business growth, enabling companies
            of all sizes to thrive in an interconnected world. We are focused on expanding our capabilities to offer even greater
            resources, tools, and opportunities to our members, all while staying true to our core values of collaboration, 
            innovation, and integrity. Our aim is to be a catalyst for transformation in the global business landscape.
          </p>
        </div>

        {/* Join Us Section */}
        <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Join Us
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Are you ready to be part of a dynamic community that is revolutionizing the way businesses grow and collaborate?
            Join <span className="text-blue-400 font-semibold">Busitron</span> today, and start forging meaningful connections,
            discovering new opportunities, and expanding your business horizons. Together, we can achieve greater success!
          </p>
          <div className="mt-6">
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
