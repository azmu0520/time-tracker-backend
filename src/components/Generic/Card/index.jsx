import React from "react";
import { Container, Imgs, Wrap } from "./style";

//Home pagedan prop ovoti
export const Card = ({ mt, mb, ml, mr, data }) => {
  return (
    <Container mt={mt} ml={ml} mb={mb} mr={mr}>
      <Imgs style={{ backgroundImage: `url(${data?.url})` }}>
        <Imgs.NewBtn none={data?.newbtn} top="0" bgcolor="#55BB9F">
          Новинка
        </Imgs.NewBtn>
        <Imgs.NewBtn none={data?.giftbtn} top="38px" bgcolor="#7FB1ED">
          Подарок
        </Imgs.NewBtn>
        <Imgs.NewBtn none={data?.discountbtn} bottom="0" bgcolor="#FC443B">
          -{data?.discounttext}%
        </Imgs.NewBtn>
      </Imgs>
      <Container.Title>{data?.price}</Container.Title>
      <Container.Deleted>{data?.oldPrice}</Container.Deleted>
      <Container.Text>{data?.text}</Container.Text>
      <Wrap>
        <Wrap.Star star={data?.star} />
        <Wrap.Star star={data?.star} />
        <Wrap.Star star={data?.star} />
        <Wrap.Star star={data?.star} />
        <Wrap.Star star={data?.star} />
        <Wrap.Message />
        <Wrap.Item>{data?.message}</Wrap.Item>
      </Wrap>
      <Container.Btn bgbtn={data?.bgbtn} width={data?.width}>
        {data?.btnName}
      </Container.Btn>
    </Container>
  );
};

export default Card;
