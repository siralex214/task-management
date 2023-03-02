import React from "react";
import styled from "styled-components";

type PropsInput = {
  onClick?: (e: any) => void;
  loading?: boolean;
};

const InputSubmit: React.FC<PropsInput> = ({
  onClick,
  loading,
}: PropsInput) => {
  const handleClick = (e: any) => {
    onClick && onClick(e);
  };

  if (loading) {
    return <Input type={"submit"} disabled value={"Loading..."} />;
  }
  return <Input type={"submit"} onClick={handleClick} />;
};

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: black;
  background-color: #4ecdc4;
  font-size: 1rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    color: #4ecdc4;
    background-color: black;
  }

  &:focus {
    outline: none;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 5px #f2f2f2;
  }

  &::placeholder {
  }
`;

export default InputSubmit;
