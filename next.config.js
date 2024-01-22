/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  images: {
    remotePatterns: ['maytinhthunguyen.com', 'localhost'],
  },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
};

module.exports = nextConfig;
