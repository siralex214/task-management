"use client";
import React from "react";
import GlobalStyle from "@themes/GlobalStyle";
import Header from "@components/Header";
import { Providers } from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const refHeader = React.useRef<HTMLDivElement>(null);

  return (
    <Providers>
      <GlobalStyle />
      <html lang="en">
        <body>
          <Header refHeader={refHeader} />
          <div>{children}</div>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
