import styled from 'styled-components';
import airpods from '../../assets/imgs/airpods.png';

export const Container = styled.div`
  /* padding: 0px 260px; */
`;

export const Box = styled.div`
  background: #142840;
  border-radius: 5px;
  width: 100%;
  padding: 0px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Box.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 35px;
  color: #ffffff;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  margin-top: 50px;
`;

Box.Img = styled.div`
  background-image: url(${airpods});
  background-size: 100% 100%;
  height: 400px;
  width: 50%;
  @media (max-width: 1440px) {
    width: 600px;
  }
`;
