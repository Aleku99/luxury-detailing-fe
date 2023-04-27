/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "luxury-detailing.ro"],
  },
};

module.exports = nextConfig;
