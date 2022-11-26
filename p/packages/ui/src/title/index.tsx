export const Title = ({ children }: React.PropsWithChildren<unknown>) => (
  <h1 className="mx-auto max-w-5xl p-8 text-center font-extrabold tracking-tight text-white">
    <span className="bg-gradient-to-r from-brandmain to-brandaccent bg-clip-text text-7xl text-transparent">
      {children}
    </span>
  </h1>
);
