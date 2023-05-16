import React from "react";
import Carousel from "./Carousel";
import OpenCamera from "./OpenCamera";
import Footer from "./Footer";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Carousel />
      
      <OpenCamera />
        <Team />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
