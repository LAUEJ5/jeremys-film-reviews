/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/jeremys-film-reviews",
    assetPrefix: "/jeremys-film-reviews",
    images: {
      unoptimized: true,
    },
    experimental: {
      typedRoutes: false // ← disables internal type constraints that are failing in your case
    }
  };
  
  module.exports = nextConfig;
  