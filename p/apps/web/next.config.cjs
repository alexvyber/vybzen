// const withTM = require("next-transpile-modules")(["ui"]);

// module.exports = withTM({
//   reactStrictMode: true,
//   swcMinify: true,
// });

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};
