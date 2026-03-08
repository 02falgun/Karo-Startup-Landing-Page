import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.karostartup.com",
      },
    ],
  },
};

export default nextConfig;
