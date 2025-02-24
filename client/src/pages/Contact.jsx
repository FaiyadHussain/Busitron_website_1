import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ef78scj", // Replace with your EmailJS service ID
        "template_4qqu0o8", // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
        },
        "lLVGoI5_p8DwhBpC-" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* CONTACT US Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Have questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible. At{" "}
            <span className="text-blue-400 font-semibold">Busitron</span>, we value communication and are here to support you.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
              Send Message
            </button>

            {/* Success Message */}
            {isSent && <p className="text-green-400 mt-4">Message sent successfully!</p>}
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
