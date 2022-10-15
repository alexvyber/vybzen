import Head from "next/head";
import { Button } from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-800">
      <Head>
        <title>Katzen - Turborepo Next.JS + Strapi + Tailwind + GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl sm:text-center text-6xl font-extrabold tracking-tight text-white">
          <span className="inline-block bg-gradient-to-r from-brandmain to-brandaccent bg-clip-text text-transparent  text-7xl sm:text-9xl">
            Katzen
          </span>
        </h1>
        <h2 className="text-3xl mt-8 text-white">
          Next + Strapi + TailwindCSS + GraphQL starter
        </h2>
        <div className="mx-auto mt-8 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
      </main>
    </div>
  );
}
