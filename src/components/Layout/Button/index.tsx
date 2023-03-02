"use client";

import React from "react";
import styled from "styled-components";

type PropsButton = {
  onClick?: () => void;
  children: React.ReactNode;
  theme?: "primary" | "secondary";
};

const Button: React.FC<PropsButton> = ({
  children,
  onClick,
  theme = "primary",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Container buttonStyle={theme} onClick={handleClick}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ buttonStyle: string }>`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  ${({ buttonStyle }) =>
    buttonStyle === "primary"
      ? `
    background-color: #4ECDC4;
    color: black;
    &:hover {
    background-color: black;
    color: #4ECDC4;
  }
    `
      : `
    background-color: black;
    color: #4ECDC4;
    &:hover {
    background-color: #4ECDC4;
    color: black;
  }
        `}
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  word-break: keep-all;
`;

export default Button;
