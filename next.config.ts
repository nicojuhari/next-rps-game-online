import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.rps-game.online",
                    },
                ],
                destination: "https://rps-game.online/:path*",
                permanent: true,
            },
            {
                source: "/1-player",
                destination: "/",
                permanent: true,
            },
            {
                source: "/2-player",
                destination: "/two-players",
                permanent: true,
            },
        ];
    },
    /* config options here */
};

export default nextConfig;
