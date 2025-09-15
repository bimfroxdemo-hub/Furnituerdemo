import React, { useState, useEffect } from "react";

const Bigimg = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // 2 sec ke baad overlay hatao
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="h-screen w-full relative flex items-center justify-center">
      {/* Background Image + Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('bf.png')",
        }}
      ></div>

      {/* Overlay for fade effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showOverlay ? "opacity-50 bg-black" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 text-white drop-shadow-xl leading-tight">
          Welcome to Our Brand
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-white drop-shadow-md">
          Discover the latest trends in fashion
        </p>

        {/* CTA Buttons */}
      
        
      </div>
    </header>
  );
};

export default Bigimg;
