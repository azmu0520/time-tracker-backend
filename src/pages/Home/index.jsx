import React from "react";
import Advert from "../../components/Advert";
import About from "../../components/About";
import Benefit from "../../components/Benefit";
import Card from "../../components/Generic/Card";
import Home from "../../components/Home";
import { data } from "../../mock/card";
import { Container } from "./style";
import Footer from "../../components/Footer";
import Catalog from "../../components/Catalog";
import Register from "../../components/Register";
import Login from "../../components/Login";

export const HomePage = () => {
  return (
    <Container>
      <Register />
      <Login />
      <Home />
      <Container.Wrapper>
        {data.map((value) => {
          return <Card key={value?.id} data={value} />;
        })}
      </Container.Wrapper>
      <Advert />
      <About />
      <Catalog />
      <Benefit />
      <Footer />
    </Container>
  );
};

export default HomePage;
