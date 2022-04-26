import React from "react";
import { Box, Container } from "./style";

export const Advert = () => {
  return (
    <Container>
      <Box>
        <div>
          <Box.Header>AirPods Pro</Box.Header>
          <Box.Title>Успей приобрести всего за 2590 ₽ </Box.Title>
        </div>
        <Box.Img />
      </Box>
    </Container>
  );
};

export default Advert;
