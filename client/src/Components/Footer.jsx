import { FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-6">
      <hr className="border-t border-gray-700 mb-8" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
            <FaEnvelope /> info@busitron.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
            <FaEnvelope /> infobusitron@gmail.com
          </p>
          <p className="text-gray-400 mt-2">
            📍 4-Floor, HITEC City, plot no 14d 1, Jai Hind Gandhi Rd, Madhapur, Hyderabad, Telangana 500081
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="text-gray-400 space-y-2">
            <Link to="/privacy-policy">
              <li className="hover:text-yellow-400">Privacy Policy</li>
            </Link>
            <Link to="/refund-policy">
              <li className="hover:text-yellow-400">Refund Policy</li>
            </Link>
            <Link to="/terms-of-service">
              <li className="hover:text-yellow-400">Terms of Service</li>
            </Link>
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
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm flex justify-center items-center relative">
        <p>
          © {currentYear} All Rights Reserved By 
          <span className="bg-gradient-to-r from-[#df3482] to-[#4B0082] text-transparent bg-clip-text mx-1">
            BUSITRON
          </span>
          | Crafted by: <span className="text-white font-semibold ml-1">Faiyad Hussain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
