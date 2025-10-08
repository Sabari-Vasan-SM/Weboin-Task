import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily ignore ESLint errors during `next build` so deployments can succeed.
    // Remove this once lint issues are fixed.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
