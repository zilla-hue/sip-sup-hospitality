/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing 'output: export' to allow client-side dynamic routes
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
