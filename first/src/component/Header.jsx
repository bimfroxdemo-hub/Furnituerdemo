import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
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
          <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
          <li><a href="#collections" className="hover:text-red-500 transition">Collections</a></li>
          <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-zinc-800 to-zinc-400 text-white transition-transform duration-500 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 font-medium">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-red-500 transition">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-red-500 transition">About</a></li>
          <li><a href="#collections" onClick={toggleMenu} className="hover:text-red-500 transition">Collections</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-red-500 transition">Contact</a></li>
        </ul>
      </div>

      {/* Overlay behind mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
