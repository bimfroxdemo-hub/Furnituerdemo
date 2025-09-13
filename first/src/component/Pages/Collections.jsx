import React, { useEffect, useState, useRef } from "react";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const productData = [
    { id: 1, image: "1.png", product: "table" },
    { id: 2, image: "2.png", product: "sofa" },
    { id: 3, image: "3.png", product: "sofa" },
    { id: 4, image: "4.png", product: "chair" },
    { id: 5, image: "5.png", product: "chair" },
    { id: 6, image: "6.png", product: "comboard" },
    { id: 7, image: "7.png", product: "Door" },
    { id: 8, image: "8.png", product: "table" },
    { id: 9, image: "9.png", product: "Door" },
    { id: 10, image: "10.png", product: "Door" },
    { id: 11, image: "11.jpg", product: "bed" },
    { id: 12, image: "12.jpg", product: "bed" },
  ];

  useEffect(() => {
    setProducts(productData);
  }, []);

  // Section fade-in animation
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
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white transform transition-all duration-700 ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-64 opacity-0"
        }`}
      >
        Our Collections
      </h1>

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
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={product.image}
              alt={product.product}
              loading="lazy" // ← Native lazy loading
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
