import React from "react";
import Header from "./component/Header";
import Contact from "./component/Pages/Contect";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Collections from "./component/Pages/Collections";

import Footer from "./component/Footer/Footer";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="collections">
          <Collections />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
