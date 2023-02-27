"use client";
import React from "react";
import GlobalStyle from "@/themes/GlobalStyle";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body>
          <div>layoutROOT</div>
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
