import type { NextConfig } from "next";
import { URL } from "url";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
};

export default nextConfig;
