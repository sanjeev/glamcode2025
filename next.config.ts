import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  images: {
      minimumCacheTTL: 60,
      unoptimized: true,
      domains: ['admin.glamcode.in'],
  },
};

export default nextConfig;
