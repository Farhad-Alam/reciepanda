/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "cc4ca1c30ce048c8b1b9052c58a77d85",
  },
  images: {
    domains: ["spoonacular.com"],
  },
};

module.exports = nextConfig;
