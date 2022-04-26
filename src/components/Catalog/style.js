import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

export const Container = styled.div`
  /* padding: 0px 260px; */
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #1e1e1e;
`;

Container.Hr = styled.div`
  border: 1px solid #e5e5e5;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 327px;
  padding: 10px 0px;
  margin: 20px 0px;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1e1e1e;
  margin: 10px 0px;
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #404040;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

Flexing.Link = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #437fc8;
  margin-right: 10px;
`;

Flexing.Arrow = styled(arrow)``;
