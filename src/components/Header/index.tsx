"use client";

import Button from "@components/Layout/Button";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

type PropsHeader = {
  refHeader?: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<PropsHeader> = ({ refHeader }: PropsHeader) => {
  const router = useRouter();
  const [loged, setLoged] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoged(true);
    }
  }, [router]);

  return (
    <Container ref={refHeader}>
      <Title
        onClick={() => {
          router.push("/");
        }}
      >
        TaskVault
        <LittleSpan> by Siralex</LittleSpan>
      </Title>
      {loged === true ? (
        <ContainerButtons>
          <Button
            onClick={() => {
              router.push("/auth?logout=true");
            }}
          >
            Logout
          </Button>
        </ContainerButtons>
      ) : (
        <ContainerButtons>
          <Button
            onClick={() => {
              router.push("/auth?signin=true");
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              router.push("/auth?signin=false");
            }}
            theme="secondary"
          >
            Sign Up
          </Button>
        </ContainerButtons>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 10px;
  cursor: pointer;
`;

const LittleSpan = styled.span`
  font-size: 1rem;
`;

const ContainerButtons = styled.div`
  display: flex;
`;

export default Header;
