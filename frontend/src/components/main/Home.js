import React from "react";
// import Carousel from "./Carousel";
import OpenCamera from "./OpenCamera";
import Footer from "./Footer";
import Team from "./Team";
import Page from "./Page";
import Copyrightfooter from "./Copyrightfooter";

const Home = () => {
  return (
    <>
      <OpenCamera />
      {/* <Carousel /> */}
      <Page />
      <Team />
      <Footer />
      <Copyrightfooter />
    </>
  );
};

export default Home;
