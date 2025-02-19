import { FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-10 px-6">
      <hr className="border-t border-gray-700 mb-8" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
            <FaEnvelope /> info@busitron.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
            <FaEnvelope /> support@busitron.com
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="text-gray-400 space-y-2">
           <Link to="/privacy-policy"> <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li></Link>
           <Link to="/refund-policy"> <li><a href="#" className="hover:text-yellow-400">Refund Policy</a></li></Link>
            <Link to="/terms-of-service"><li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li></Link>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-3 py-2 rounded-md bg-white text-black placeholder-gray-500 outline-none"
          />
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md mt-3 hover:bg-yellow-400 w-full">
            SUBSCRIBE
          </button>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © 2023 All Rights Reserved By <span className="bg-gradient-to-r from-[#df3482] to-[#4B0082] text-transparent bg-clip-text">BUSITRON</span>
      </div>
    </footer>
  );
};

export default Footer;
