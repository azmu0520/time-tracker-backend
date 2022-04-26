import React from "react";
import { Wrap } from "./style";

// Components
import Slides from "./Slides";
import HomeCard from "./Card";
import Advert from "./Advert";
import About from "./About";
import News from "./News";
import Catalog from "./Catalog";
import Benefit from "./Benefit";

const Home = () => {
  return (
    <Wrap>
      <Slides />
      <HomeCard />
      <Advert />
      <About />
      <News />
      <Catalog />
      <Benefit />
    </Wrap>
  );
};

export default Home;
