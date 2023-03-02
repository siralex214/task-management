"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { NextPage } from "next";
import SignIn from "@components/Form/SignIn";
import SignUp from "@components/Form/SignUp";
import styled from "styled-components";
import Cookies from "js-cookie";

const AuthScreen: NextPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const signin = searchParams?.get("signin");
  const logout = searchParams?.get("logout");

  if (logout === "true") {
    localStorage.removeItem("user");
    Cookies.remove("token");
    router.push("/");
  }

  return <Container>{signin === "true" ? <SignIn /> : <SignUp />}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default AuthScreen;
