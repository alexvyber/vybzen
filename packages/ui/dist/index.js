// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-xl",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://github.com/alexvyber/katzen",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent \n        bg-zinc-900 px-8 py-3 text-xl font-medium\n         text-white no-underline hover:bg-zinc-700 dark:bg-white dark:text-black \n        dark:hover:bg-gray-300 md:py-4 md:px-10 md:text-2xl md:leading-6",
        children: "Open Github"
      })
    })
  });
};
export {
  Button
};
