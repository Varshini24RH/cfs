import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },

  async redirects() {
    return [
      {
        source: '/madhapur',
        destination: '/branches',
        permanent: true, // 301
      },
      {
        source: '/kondapur',
        destination: '/branches',
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
