/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_DOMAIN],
  },
};

module.exports = nextConfig;
