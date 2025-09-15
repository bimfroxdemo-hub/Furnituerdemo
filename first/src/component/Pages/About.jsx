import React, { useState, useRef, useEffect } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 } // 30% visible par trigger
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-100 flex flex-col items-center justify-center 
                 px-6 sm:px-12 lg:px-24 py-16 
                 bg-gradient-to-br from-zinc-200 via-zinc-500 to-zinc-900 
                 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-400
                 transition-colors duration-300"
    >
      {/* Heading with side animation */}
      <h1
        className={`font-bold mb-6 text-3xl sm:text-4xl lg:text-5xl 
                    transform transition-all duration-700 ${
          animate
            ? "translate-x-0 opacity-100 text-zinc-900 dark:text-white"
            : "-translate-x-64 opacity-0"
        }`}
      >
        About Our Brand
      </h1>

      {/* Paragraph with side animation */}
      <p
        className={`max-w-2xl text-center text-base sm:text-lg lg:text-xl leading-relaxed
                    transform transition-all duration-1000 delay-200 ${
          animate
            ? "translate-x-0 opacity-100 text-zinc-800 dark:text-gray-300"
            : "translate-x-64 opacity-0"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        sunt, quae similique, eveniet illo voluptatum quisquam mollitia delectus
        voluptas voluptates maxime fugit doloribus a omnis quod molestiae modi
        voluptatibus error.
      </p>
    </div>
  );
};

export default About;
