import React from "react";
import { Box, Container, Flexing, Wrap } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Box>
          <Box.Logo />
          <Box.Header>+7(495)150-95-55</Box.Header>
          <Flexing>
            <Flexing.Telegram />
            <Flexing.W />
            <Flexing.Whatsapp />
            <Flexing.OdnoClassnik />
          </Flexing>
          <Box.Title>
            ООО "БТ МАРКЕТ", ИНН7728483067 Москва, пр-д Соловьиный д. 2, ком. 1
          </Box.Title>
        </Box>
        <Box first>
          <Box.Item>Как оформить заказ</Box.Item>
          <Box.Item>Доставка</Box.Item>
          <Box.Item>Оплата</Box.Item>
          <Box.Item>Прием товара</Box.Item>
          <Box.Item>Почему покупать у нас</Box.Item>
          <Box.Item>Подключение техники</Box.Item>
          <Box.Item>Отзывы о нас</Box.Item>
          <Box.Item>Пользовательское соглашение</Box.Item>
        </Box>
        <Box first>
          <Box.Item>Как оформить заказ</Box.Item>
          <Box.Item>Доставка</Box.Item>
          <Box.Item>Оплата</Box.Item>
          <Box.Item>Прием товара</Box.Item>
          <Box.Item>Почему покупать у нас</Box.Item>
          <Box.Item>Подключение техники</Box.Item>
          <Box.Item>Отзывы о нас</Box.Item>
          <Box.Item>Пользовательское соглашение</Box.Item>
        </Box>
        <Box first>
          <Box.Item>Как оформить заказ</Box.Item>
          <Box.Item>Доставка</Box.Item>
          <Box.Item>Оплата</Box.Item>
          <Box.Item>Прием товара</Box.Item>
          <Box.Item>Почему покупать у нас</Box.Item>
          <Box.Item>Подключение техники</Box.Item>
          <Box.Item>Отзывы о нас</Box.Item>
          <Box.Item>Пользовательское соглашение</Box.Item>
        </Box>
      </Wrap>
      <Container.Header>
        Обращаем Ваше внимание на то, что данный интернет-сайт носит
        исключительно информационный характер и ни при каких условиях
        информационные материалы и цены, размещенные на <br /> сайте, не
        являются публичной офертой, определяемой положениями Статьи 437
        Гражданского кодекса РФ.
        <br />
        elecity.ru © 2011-2021
      </Container.Header>
    </Container>
  );
};

export default Footer;
