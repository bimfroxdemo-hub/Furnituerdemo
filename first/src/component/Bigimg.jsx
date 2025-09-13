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
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('bf.png')",
        }}
      ></div>

      {/* Overlay for fade effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showOverlay ? "opacity-50 bg-black" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-xl">
          Welcome to Our Brand
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white drop-shadow-md">
          Discover the latest trends in fashion
        </p>
        
      </div>
    </header>
  );
};

export default Bigimg;
