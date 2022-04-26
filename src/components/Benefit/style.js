import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 60%;
  margin: 100px auto 0px auto; */
`;

export const Card = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Card.Item = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  color: #1e1e1e;
  margin-top: 14px;
`;
