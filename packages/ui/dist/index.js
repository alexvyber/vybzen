"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-xl",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://github.com/alexvyber/katzen",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent \n        bg-zinc-900 px-8 py-3 text-xl font-medium\n         text-white no-underline hover:bg-zinc-700 dark:bg-white dark:text-black \n        dark:hover:bg-gray-300 md:py-4 md:px-10 md:text-2xl md:leading-6",
        children: "Open Github"
      })
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
