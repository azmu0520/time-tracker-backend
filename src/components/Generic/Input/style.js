import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '48px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  box-shadow: ${({ box }) => (box ? box : '')};
  color: ${({ color }) => (color ? color : '#000')};
  font-family: var(--main-font);
  background: ${({ background }) => (background ? background : '#fff')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  padding: ${({ padding }) => (padding ? padding : '4px 15px')};
  margin: ${({ margin }) => (margin ? margin : '0 8px 12px 0')};
  border: ${({ border }) => (border ? border : '0px')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  outline: none;
`;
