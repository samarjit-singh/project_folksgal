/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "lh3.googleusercontent.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
