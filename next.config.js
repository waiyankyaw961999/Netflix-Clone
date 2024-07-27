const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  distDir: "build",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["rb.gy", "image.tmdb.org"],
  },
});
