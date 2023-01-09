import React from 'react';
import { Button } from './style';

const GenericButton = ({
  color,
  background,
  fontSize,
  height,
  box,
  border,
  textAlign,
  padding,
  margin,
  radius,
  Hbox,
  Hcolor,
  Hbackground,
  Hborder,
  width,
  onClick,
  disabled,
  active,
  Dbackground,
  DborderColor,
  children,
}) => {
  return (
    <Button
      color={color}
      width={width}
      active={active}
      background={background}
      fontSize={fontSize}
      height={height}
      box={box}
      radius={radius}
      disabled={disabled}
      border={border}
      textAlign={textAlign}
      padding={padding}
      margin={margin}
      Hbox={Hbox}
      Hcolor={Hcolor}
      Hbackground={Hbackground}
      Hborder={Hborder}
      onClick={onClick}
      Dbackground={Dbackground}
      DborderColor={DborderColor}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
