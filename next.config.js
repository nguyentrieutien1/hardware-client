/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
};

module.exports = nextConfig;
