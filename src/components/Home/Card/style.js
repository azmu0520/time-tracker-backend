import styled from "styled-components";

export const Wrap = styled.div`
  margin: 60px 0px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
    padding: 0px;
  }
`;
