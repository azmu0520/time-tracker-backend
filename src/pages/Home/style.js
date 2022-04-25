import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow-top.svg";

export const Container = styled.div``;

Container.Wrapper = styled.div`
  padding: 0px 260px;
  margin: 60px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
    padding: 0px;
  }
`;

Container.Circle = styled.a`
  position: fixed;
  bottom: 70px;
  right: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;
  cursor: pointer;
`;

Container.Arrow = styled(arrow)``;
