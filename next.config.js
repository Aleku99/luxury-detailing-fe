/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "luxurydetailing.ro"],
  },
};

module.exports = nextConfig;
