import React from "react";
import Footer from "./Footer/Footer";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import NavBar from "./NavBar/NavBar";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import SSRProvider from "react-bootstrap/SSRProvider";
const index = () => {
  return (
    <SSRProvider>
      <NavBar />
      <HomeCarousel />
      <Projects />
      <Services />
      <Footer />
    </SSRProvider>
  );
};

export default index;
