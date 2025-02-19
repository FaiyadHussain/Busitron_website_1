import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const WhatWeDo = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* WHAT WE DO Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6">
            WHAT WE DO?
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Busitron</span>, we empower businesses with cutting-edge tools and 
            opportunities to connect, collaborate, and grow. Our platform serves 
            as a catalyst for success, enabling meaningful interactions and 
            strategic partnerships.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Services
          </h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔗", title: "Networking Opportunities", desc: "We provide a dynamic and vibrant online platform where businesses can connect, engage, and build meaningful relationships." },
              { icon: "🤝", title: "Business Matchmaking", desc: "Our intelligent matchmaking algorithms help you discover relevant connections effortlessly." },
              { icon: "📚", title: "Knowledge Sharing", desc: "Access a wealth of resources, webinars, and articles on industry trends, best practices, and growth strategies." },
              { icon: "🎤", title: "Events and Webinars", desc: "Participate in exclusive networking events and webinars hosted by experts in various fields." },
              { icon: "🛒", title: "B2B Marketplace", desc: "Explore our B2B marketplace to discover new opportunities, source products or services, and grow your business." },
              { icon: "🚀", title: "Digital Transformation", desc: "Helping businesses transition into the digital era with cutting-edge technology solutions." },
              { icon: "📈", title: "SEO & Marketing", desc: "Enhancing online visibility through powerful SEO strategies and digital marketing campaigns." },
              { icon: "🎓", title: "Mentorship Programs", desc: "Guidance from industry leaders to help businesses and professionals grow." },
              { icon: "💡", title: "Innovation Hub", desc: "A dedicated space to explore and implement new business solutions." },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">{service.icon}</span>
                  <span>{service.title}</span>
                </h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Impact
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Busitron is not just a platform; it’s a movement that drives business 
            success. With thousands of businesses leveraging our ecosystem, we 
            continue to build a future where collaboration and innovation shape 
            new opportunities.
          </p>
        </div>

        {/* Future Vision Section */}
        {/* <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Vision for the Future
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            At Busitron, we envision a world where businesses of all sizes can thrive
            through seamless digital connectivity. Our goal is to enhance business
            accessibility, promote sustainability, and drive global economic growth
            through innovation and collaboration.
          </p>
        </div> */}

        <div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Awards & Recognition
          </h2>
          <div className="mt-6 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              At Busitron, we pride ourselves on the recognition we've earned for our innovative platform. Our work has been acknowledged by industry leaders and organizations.
            </p>
            <ul className="list-disc pl-8 text-gray-300">
              <li>2024 Best Business Innovation Award</li>
              <li>Top 10 Digital Transformation Platforms in 2023</li>
              <li>Excellence in Networking Solutions - 2022</li>
              <li>Innovator of the Year - Business Tech Awards 2021</li>
            </ul>
          </div>
        </div>

        <div>
           {/* Technology Stack Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Technology Stack
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Busitron is built using state-of-the-art technologies to ensure scalability, reliability, and user experience. Here's an overview of the key technologies we use:
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">⚙️</span>
              <div className="text-gray-300">
                <strong>Frontend:</strong> HTML , CSS , Tailwind CSS , Bootstrap , React.js , Next.js
              </div> 
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">💻</span>
              <div className="text-gray-300">
                <strong>Backend:</strong> Node.js, Express.js, MongoDB , MySQL , PostgresSQL
               </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">📦</span>
              <div className="text-gray-300">
                <strong>Cloud Infrastructure:</strong> AWS, Docker, Kubernetes, Terraform
              </div>
            </div>
         <div>
           {/* Our Vision for the Future */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Vision for the Future
          </h2>
          <div className="mt-6 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              At Busitron, our vision for the future is to continuously evolve and innovate in the space of business networking. We aim to:
            </p>
            <ul className="list-disc pl-8 text-gray-300">
              <li>Expand our platform to include AI-driven matchmaking for even more precise business connections</li>
              <li>Integrate blockchain technology for enhanced security and transparency in transactions</li>
              <li>Continue improving user experience with immersive VR/AR capabilities for remote business collaborations</li>
              <li>Grow our global network, reaching new markets and business leaders worldwide</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are committed to staying at the forefront of technological advancements, providing our clients with the most innovative tools and solutions for long-term success.
            </p>
          </div>
        </div>
         </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
