import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://flagsapi.com/**')],
  },
  eslint: {
    ignoreDuringBuilds: true,
 },
};

export default nextConfig;
