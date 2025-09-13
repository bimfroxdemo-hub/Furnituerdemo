import React, { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-16 
                 bg-gradient-to-br from-zinc-200 via-zinc-500 to-zinc-900 
                 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-400
                 transition-colors duration-300 space-y-16"
    >
      {/* Main Card */}
      <div
        ref={sectionRef}
        className={`max-w-6xl w-full flex flex-col md:flex-row items-center justify-between 
                    rounded-2xl border border-zinc-300 dark:border-zinc-700 
                    shadow-xl p-6 sm:p-10 lg:p-14
                    transform transition-all duration-1000 ease-out
                    ${animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left px-4">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
              animate
                ? "translate-x-0 opacity-100 text-zinc-900 dark:text-white"
                : "translate-x-16 opacity-0"
            }`}
          >
            Why Connect With Us?
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed transition-all duration-1000 delay-200 ${
              animate
                ? "translate-x-0 opacity-100 text-zinc-800 dark:text-gray-300"
                : "translate-x-16 opacity-0"
            }`}
          >
            Connecting with us through WhatsApp ensures faster, more personalized
            communication. Our team is always ready to answer your queries,
            provide real-time updates, and share the latest offers. Unlike emails
            that may go unnoticed, WhatsApp messages are instant and secure,
            giving you peace of mind.
          </p>

          {/* WhatsApp Contact Button */}
          <div
            className={`flex items-center justify-center md:justify-start mt-6 transition-all duration-1000 delay-500 ${
              animate ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                window.open("https://wa.me/91XXXXXXXXXX", "_blank")
              }
              className="flex items-center gap-3 bg-green-500 text-white rounded-lg px-6 py-3 
                         shadow-md hover:bg-green-600 transition text-lg sm:text-xl"
            >
              <IoLogoWhatsapp className="text-2xl" />
              WhatsApp
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`w-full md:w-1/3 flex justify-center mt-6 md:mt-0 transition-all duration-1000 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          <img
            src="connectimg.jpg"
            alt="connectimg"
            className="rounded-xl shadow-md w-44 sm:w-60 lg:w-72 object-cover"
          />
        </div>
      </div>

      {/* New Service Card */}
      <div
        className={`max-w-5xl w-full flex flex-col md:flex-row items-center justify-between 
                    rounded-2xl border border-zinc-300 dark:border-zinc-700 
                    shadow-lg p-6 sm:p-10 lg:p-14 bg-zinc-100 dark:bg-zinc-800
                    transform transition-all duration-1000 ease-out
                    ${animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="connect.jpg"
            alt="24x7 Service"
            className="rounded-xl shadow-md w-40 sm:w-56 lg:w-64 object-cover"
          />
        </div>

        {/* Service Info */}
        <div className="w-full md:w-2/3 text-center md:text-left px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-zinc-900 dark:text-white">
            24x7 WhatsApp Service
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Our team is available round the clock to assist you. Whether it’s
            product queries, urgent support, or personalized guidance, we’re
            just one WhatsApp message away. Day or night — we’ve got you covered.
          </p>
          <button
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
            className="mt-6 flex items-center gap-3 bg-green-500 text-white rounded-lg px-6 py-3 
                       shadow-md hover:bg-green-600 transition text-lg sm:text-xl mx-auto md:mx-0"
          >
            <IoLogoWhatsapp className="text-2xl" />
            Chat Now
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <button
        onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg 
                   hover:bg-green-600 transition-all duration-300 
                   z-50 animate-bounce"
      >
        <IoLogoWhatsapp className="text-3xl sm:text-4xl" />
      </button>
    </div>
  );
};

export default Contact;
