import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonals />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  )
}
