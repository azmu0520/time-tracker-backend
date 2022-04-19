import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 0 120px;
  .mySwiper {
    height: 462px;
    background: radial-gradient(
      33.06% 190.55% at 66.94% 44.11%,
      #7fb1ed 0%,
      #437fc8 34.66%,
      rgba(28, 80, 143, 0.95) 72.16%,
      #1c4e8a 87.8%,
      #1a467c 100%
    );
    border-radius: 10px;
    position: relative;
  }
`;

Wrap.BigChop = styled.div`
  position: absolute;
  width: 130px;
  height: 530px;
  left: 140px;
  top: -140px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  transform: rotate(-32.89deg);
  z-index: 12;
`;

Wrap.SmallChop = styled.div`
  position: absolute;
  width: 30px;
  left: 200px;
  bottom: -210px;
  height: 530px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  transform: rotate(-32.89deg);
`;

Wrap.Wrap = styled.div`
  display: flex;
  box-sizing: border-box;
  /* align-items: center; */
  justify-content: center;
  padding: 0 120px;
`;

Wrap.Title = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 50px;
  color: #ffffff;
`;
Wrap.P = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 55px;
  color: #ffffff;
  margin-top: 20px;
`;

Wrap.Btn = styled.div`
  width: 185px;
  height: 50px;
  background: #ffffff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  color: rgba(28, 80, 143, 0.95);
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
Wrap.Imgs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .ikki {
    position: absolute;
    top: 75px;
    right: -50px;
    z-index: -1;
  }
  .uch {
    position: absolute;
    top: 40px;
    left: -110px;
    z-index: -1;
  }
`;
