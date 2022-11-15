import type { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren<unknown>) => (
  <h1 className="mx-auto max-w-5xl p-8 text-center font-extrabold tracking-tight text-white">
    <span className="from-brandmain to-brandaccent bg-gradient-to-r bg-clip-text text-7xl text-transparent">
      {children}
    </span>
  </h1>
);
