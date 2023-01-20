import React from "react";
import Banner from "./Banner";
import About from "./About";
import Team from "./Team";
import Service from "./Service";
import Project from "./Home/Project/Project";
import Clients from "./Home/Clients/Clients";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
export default () => {
  return (
    <>
      <Banner></Banner>
      <About/>
      <Team/>
      <Service></Service>
      <Clients></Clients>
      <Project></Project>
    </>
  );
};
