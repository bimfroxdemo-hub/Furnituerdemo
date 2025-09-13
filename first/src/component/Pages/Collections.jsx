import React, { useEffect, useState, useRef } from "react";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-r from-zinc-400 to-zinc-800 px-4 sm:px-6 lg:px-16 py-12 sm:py-16"
    >
      {/* Heading with side-slide + fade-in */}
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white transform transition-all duration-700 ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-64 opacity-0"
        }`}
      >
        Our Collections
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-md p-3 sm:p-4 transition-all duration-700 transform ${
              animate
                ? "translate-x-0 opacity-100"
                : index % 2 === 0
                ? "-translate-x-64 opacity-0"
                : "translate-x-64 opacity-0"
            } hover:shadow-xl`}
            style={{ transitionDelay: `${index * 100}ms` }} // staggered animation
          >
            <img
              src={product.image}
              alt={product.product}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-md mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-2 transition duration-300 hover:text-red-400 hover:underline">
              {product.product}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
