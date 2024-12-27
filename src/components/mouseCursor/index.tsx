'use client';

import { MouseProvider } from "./mouseProvider";
import { ReactNode } from "react";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MouseProvider>{children}</MouseProvider>;
};

export default AppProvider;
