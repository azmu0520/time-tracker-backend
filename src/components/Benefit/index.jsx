import React from "react";
import { benefitData } from "../../mock/benefit";
import { Card, Container } from "./style";

export const Benefit = () => {
  return (
    <Container>
      {benefitData.map(({ id, Icons, item }) => {
        return (
          <Card key={id}>
            <Icons />
            <Card.Item>{item}</Card.Item>
          </Card>
        );
      })}
    </Container>
  );
};

export default Benefit;
