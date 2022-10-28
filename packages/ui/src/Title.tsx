import type { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren<unknown>) => (
  <h1 className="mx-auto max-w-5xl p-8 text-center text-6xl font-extrabold tracking-tight text-white">
    <span className="from-brandmain to-brandaccent inline-block bg-gradient-to-r bg-clip-text text-7xl text-transparent sm:text-9xl">
      {children}
    </span>
  </h1>
);
