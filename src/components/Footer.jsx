import React from "react";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {/* YouTube Link */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaYoutube size={30} />
        </a>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaInstagram size={30} />
        </a>

        {/* WhatsApp Link */}
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
      <div className="text-center text-gray-400 mt-4">
        © 2024 EleKars - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
