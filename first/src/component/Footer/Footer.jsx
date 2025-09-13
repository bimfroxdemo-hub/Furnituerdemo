import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 
                 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 
                 text-black dark:text-white py-10 px-6 sm:px-12 lg:px-24 
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        
        {/* Visit Us (Left Side) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
          <p className="flex items-center mb-2 text-zinc-700 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2 text-green-500" /> BimFrox
          </p>
          <p className="flex items-center mb-2 text-zinc-700 dark:text-gray-300">
            <FaPhone className="mr-2 text-green-500" /> +91xxxxxxxxxx
          </p>
          <p className="flex items-center text-zinc-700 dark:text-gray-300">
            <FaEnvelope className="mr-2 text-green-500" /> bimfrox@gmail.com
          </p>
        </div>

        {/* Connect Us (Right Side) */}
        <div className="flex flex-col items-start sm:items-end">
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-400 dark:border-zinc-700 mt-8"></div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Clothing Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
