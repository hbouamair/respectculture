import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
