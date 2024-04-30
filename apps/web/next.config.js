/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ["images.unsplash.com", "static.independent.co.uk"],
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
};
