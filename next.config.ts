import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/1-player',
        destination: '/one-player',
        permanent: true,
      },
      {
        source: '/2-player',
        destination: '/two-players',
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
