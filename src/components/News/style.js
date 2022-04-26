import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 0px 260px; */
  margin: 70px 0px;
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
  margin: 10px 0px 40px 0px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 248px);
  grid-gap: 19px;
  grid-template-areas:
    'first second four four'
    'first third five six';
  margin-left: -30px;
`;

Grid.Img = styled.img`
  grid-area: ${({ nameArea }) => nameArea && nameArea};
`;
