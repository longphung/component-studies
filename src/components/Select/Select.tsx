import React, { useState } from 'react';

import {
  StyledWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
  StyledValue,
} from './Select.styled';

interface DataSelect {
  text: string;
  value: string | number;
}

interface IPropsSelect {
  options: DataSelect[];
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string | number;
  className?: string;
}

const Select: React.FC<IPropsSelect> = ({
  options,
  onChange,
  defaultValue,
  className,
  placeholder,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleOnClickValue = () => {
    setOpen((prev) => !prev);
  };

  const handleOnClickItem = (value: string | number) => {
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <StyledWrapper className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledValue isValue={!selectedValue} onClick={handleOnClickValue}>{selectedValue || placeholder}</StyledValue>
      {open && (
        <StyledSelect>
          {options.map((item) => (
            <StyledOption key={item.value} onClick={() => handleOnClickItem(item.value)}>
              {item.text}
            </StyledOption>
          ))}
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default Select;
