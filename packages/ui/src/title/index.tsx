import type { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren<unknown>) => (
  <h1 className="p-8 mx-auto max-w-5xl font-extrabold tracking-tight text-center text-white">
    <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-brandmain to-brandaccent">
      {children}
    </span>
  </h1>
);
