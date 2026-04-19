/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
