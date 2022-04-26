import React from "react";
import { Container, Grid } from "./style";
// Imgs
import new1 from "../../../assets/imgs/new1.png";
import new2 from "../../../assets/imgs/new2.png";
import new3 from "../../../assets/imgs/new3.png";
import new4 from "../../../assets/imgs/new4.png";
import new5 from "../../../assets/imgs/new5.png";
import new6 from "../../../assets/imgs/new6.png";

const News = () => {
  return (
    <Container>
      <Container.Header>Новости и обзоры</Container.Header>
      <Container.Hr />
      <Grid>
        <Grid.Img src={new1} alt="img" nameArea="first" />
        <Grid.Img src={new2} alt="img" nameArea="second" />
        <Grid.Img src={new3} alt="img" nameArea="third" />
        <Grid.Img src={new4} alt="img" nameArea="four" />
        <Grid.Img src={new5} alt="img" nameArea="five" />
        <Grid.Img src={new6} alt="img" nameArea="six" />
      </Grid>
    </Container>
  );
};

export default News;
