"use client";

import Button from "@components/Layout/Button";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const HomePageScreen: NextPage = () => {
  const router = useRouter();
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Text>
          Connecte-toi ou inscris toi pour accéder aux fonctionnalitées
        </Text>
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
      </div>
    </div>
  );
};

const Text = styled.p`
  font-size: 2.5rem;
  margin: 10px;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export default HomePageScreen;
