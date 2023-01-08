import React from 'react';
import { Input } from './style';

const GenericInput = ({
  color,
  background,
  fontSize,
  height,
  box,
  border,
  margin,
  radius,
  width,
  onChange,
  disabled,
  active,
  placeholder,
  padding,
  type,
}) => {
  console.log('running');
  return (
    <Input
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
      margin={margin}
      onChange={onChange}
      padding={padding}
      placeholder={placeholder}
      type={type || 'text'}
    />
  );
};

export default GenericInput;
