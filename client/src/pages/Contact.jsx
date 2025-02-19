import React , { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ContactUs = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* CONTACT US Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Have questions or need assistance? Reach out to us, and we’ll get 
            back to you as soon as possible. At{" "}
            <span className="text-blue-400 font-semibold">Busitron</span>, we value communication and are here to support you.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            You can contact us via email, phone, or by filling out the form below. 
            We strive to respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Send Us a Message
          </h2>
          <form className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Info Section */}
        <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Other Ways to Reach Us
          </h2>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li>📍 4-Floor, HITEC City, plot no 14d 1, Jai Hind Gandhi Rd, Madhapur, Hyderabad, Telangana 500081</li>
            <li>📧 Email: support@busitron.com</li>
            <li>📞 Phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
