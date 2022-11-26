import type { PropsWithChildren } from "react";

export const SubTitle = ({ children }: PropsWithChildren<unknown>) => (
  <h2 className="mt-8 flex flex-wrap justify-center gap-3 text-center text-3xl text-white">
    {children}
  </h2>
);
