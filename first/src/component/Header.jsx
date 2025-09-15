import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // refresh par bhi scroll check

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-zinc-800 to-zinc-400 shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">
          <a href="#home">Furniture Brand</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#home" className="hover:text-green-700 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-700 transition">
              About
            </a>
          </li>
          <li>
            <a href="#collections" className="hover:text-green-700 transition">
              Collections
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon - hamesha visible mobile par */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu - Full Page Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-zinc-900 to-zinc-700 text-white flex flex-col items-center justify-center space-y-10 text-2xl font-medium transform transition-transform duration-500 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#home" onClick={toggleMenu} className="hover:text-green-500">
          Home
        </a>
        <a href="#about" onClick={toggleMenu} className="hover:text-green-500">
          About
        </a>
        <a
          href="#collections"
          onClick={toggleMenu}
          className="hover:text-green-500"
        >
          Collections
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="hover:text-green-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
