import styled from 'styled-components';

export const Select = styled.select`
  position: relative;
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '48px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  color: ${({ color }) => (color ? color : '#000')};
  background: ${({ background }) => (background ? background : '#fff')};
  padding: ${({ padding }) => (padding ? padding : '4px 15px')};
  margin: ${({ margin }) => (margin ? margin : '0 8px 12px 0')};
  border: ${({ border }) => (border ? border : '0px')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  cursor: pointer;
  outline: none;
`;
