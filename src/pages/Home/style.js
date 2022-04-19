import styled from "styled-components";

export const Container = styled.div``;

Container.Wrapper = styled.div`
  padding: 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
    padding: 0px;
  }
`;
