import React from "react";
import { dataCatalog } from "../../mock/catalog";
import { Box, Container, Flexing, Wrap } from "./style";

export const Catalog = () => {
  return (
    <Container>
      <Container.Header>Каталог</Container.Header>
      <Container.Hr />
      <Wrap>
        {dataCatalog.map(({ id, item, title }) => {
          return (
            <Box key={id}>
              <Box.Title>{title}</Box.Title>
              {item.map((value) => {
                return <Box.Item key={value.key}>{value.name}</Box.Item>;
              })}
              <Flexing>
                <Flexing.Link>Все товары</Flexing.Link>
                <Flexing.Arrow />
              </Flexing>
            </Box>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Catalog;
