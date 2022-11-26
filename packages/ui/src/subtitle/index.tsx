import type { PropsWithChildren } from "react";

export const SubTitle = ({ children }: PropsWithChildren<unknown>) => (
  <h2 className="flex flex-wrap gap-3 justify-center mt-8 text-3xl text-center text-white">
    {children}
  </h2>
);
