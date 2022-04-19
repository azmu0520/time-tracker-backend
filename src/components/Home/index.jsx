import React from 'react';
import { Wrap } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import img1 from '../../assets/imgs/home1.png';
import img2 from '../../assets/imgs/home2.png';
import img3 from '../../assets/imgs/home3.png';
const Home = () => {
  return (
    <Wrap>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          <Wrap.Wrap>
            <div
              style={{
                display: 'flex',
                marginTop: '13%',
                flexDirection: 'column',
              }}
            >
              <Wrap.Title>Большой выбор стиральных машин</Wrap.Title>
              <Wrap.P>Успей купить по суперцене</Wrap.P>
              <Wrap.Btn>Подробнее</Wrap.Btn>
            </div>
            <Wrap.Imgs>
              <img src={img1} alt='img' />
              <img src={img2} className='ikki' alt='img' />
              <img src={img3} alt='img' className='uch' />
            </Wrap.Imgs>
          </Wrap.Wrap>
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 3
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 4
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 5
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 6
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 7
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 8
        </SwiperSlide>
        <SwiperSlide>
          <Wrap.BigChop />
          <Wrap.SmallChop />
          Slide 9
        </SwiperSlide>
      </Swiper>
    </Wrap>
  );
};

export default Home;
