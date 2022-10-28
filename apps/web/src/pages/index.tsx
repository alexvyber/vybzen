import Head from "next/head";
import { Button } from "ui";
import katzen from "@img/katzen.png";
import Image from "next/future/image";

const techs = ["Next", "Strapi", "TypeScript", "TailwindCSS", "GraphQl"];

import type { Post } from "generated-types";

// -------------------

export const post: Post = {
  title: "Some Title",
  author: "Some Author",
  views: 12344,
};

// -------------------

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 p-4 pt-2">
      <Head>
        <title>Katzen - Turborepo Next.JS + Strapi + Tailwind + GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <Image
          src={katzen}
          width={250}
          height={250}
          alt="katzen"
          className="mx-auto"
        />
        <div className="mx-auto inline-block inline-flex w-auto max-w-5xl items-center justify-center rounded-md bg-gray-50 bg-gradient-to-r from-brandmain to-brandaccent bg-clip-text p-2 px-4 pt-16 pb-8 text-center text-6xl text-7xl font-extrabold tracking-tight text-transparent text-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:pt-24 sm:text-9xl lg:px-8"></div>

        <h1 className="mx-auto max-w-5xl p-8 text-center text-6xl font-extrabold tracking-tight text-white">
          <span className="inline-block bg-gradient-to-r from-brandmain to-brandaccent bg-clip-text text-7xl text-transparent sm:text-9xl">
            Katzen
          </span>
        </h1>
        <h2 className="mt-8 flex flex-wrap justify-center gap-3 text-center text-3xl text-white">
          {techs.map((item) => (
            <span key={item} className="">
              {item}
            </span>
          ))}
        </h2>
        <div className="mx-auto mt-8 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
      </main>
    </div>
  );
}
