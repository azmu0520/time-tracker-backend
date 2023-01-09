import React from 'react';
import { AntSelect } from './style';
const GenericSelect = ({
  defaultValue,
  style,
  onChange,
  options,
  className,
  bordered,
  showArrow,
  dropdownStyle,
  // disabled,
}) => {
  return (
    <AntSelect
      className={className}
      defaultValue={defaultValue}
      style={style}
      onChange={onChange}
      options={options}
      showArrow={showArrow}
      bordered={bordered}
      dropdownStyle={dropdownStyle}
    />
  );
};

export default GenericSelect;
