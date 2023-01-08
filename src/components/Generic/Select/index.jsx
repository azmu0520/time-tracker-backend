import React from 'react';
import { Select } from './style';
const GenericSelect = ({
  children,
  width,
  height,
  size,
  color,
  background,
  padding,
  margin,
  border,
  radius,
}) => {
  return (
    <Select
      width={width}
      height={height}
      size={size}
      color={color}
      background={background}
      padding={padding}
      margin={margin}
      border={border}
      radius={radius}
    >
      {children}
    </Select>
  );
};

export default GenericSelect;
