/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
};
