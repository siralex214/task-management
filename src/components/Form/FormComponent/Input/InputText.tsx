"use client";

import React from "react";
import styled from "styled-components";

type PropsInput = {
  value: string;
  placeholder: string;
  onChange?: (e: any) => void;
  type: "text" | "password";
};

const InputText: React.FC<PropsInput> = ({
  onChange,
  placeholder,
  value,
  type,
}: PropsInput) => {
  const [inputValue, setInputValue] = React.useState<string>(value);
  const handleChange = (e: any) => {
    onChange && onChange(e);
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    console.log("inputValue", inputValue);
  }, [inputValue]);

  return (
    <Input
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #f2f2f2;
  }

  &:focus {
    outline: none;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 5px #f2f2f2;
  }

  &::placeholder {
  }
`;

export default InputText;
