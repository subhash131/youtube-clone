"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import React, { PropsWithChildren } from "react";

const Thirdweb = ({ children }: PropsWithChildren) => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default Thirdweb;
