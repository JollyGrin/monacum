/** @type {import('next').NextConfig} */

const pathPrefix = "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
