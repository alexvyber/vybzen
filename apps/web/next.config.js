const withTM = require("next-transpile-modules")(["ui"])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true, // That is going to be in v13 default anyway
})
