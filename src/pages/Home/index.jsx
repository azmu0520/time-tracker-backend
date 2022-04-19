import React from "react";
import Card from "../../components/Generic/Card";
import Home from "../../components/Home";
import { data } from "../../mock/card";
import { Container } from "./style";

export const HomePage = () => {
  return (
    <Container>
      <Home />
      <Container.Wrapper>
        {data.map((value) => {
          return <Card key={value?.id} data={value} />;
        })}
      </Container.Wrapper>
    </Container>
  );
};

export default HomePage;
