import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '48px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  cursor: pointer;
  box-shadow: ${({ box }) => (box ? box : '#000')};
  color: ${({ color }) => (color ? color : '#000')};
  background: ${({ background }) => (background ? background : '#03a84e')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  padding: ${({ padding }) => (padding ? padding : '4px 15px')};
  margin: ${({ margin }) => (margin ? margin : '0 8px 12px 0')};
  border: ${({ border }) => (border ? border : '0px')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};

  :hover {
    box-shadow: ${({ Hbox }) => (Hbox ? Hbox : '')};
    color: ${({ Hcolor }) => (Hcolor ? Hcolor : '')};
    background: ${({ Hbackground }) => (Hbackground ? Hbackground : '')};
    border: ${({ Hborder }) => (Hborder ? Hborder : '')};
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: all !important;
    background: ${({ Dbackground }) => (Dbackground ? Dbackground : '#f5f5f5')};
    border-color: ${({ DborderColor }) =>
      DborderColor ? DborderColor : '#d9d9d9'};
    color: #00000040;
  }

  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
