import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactive les vérifications ESLint pendant la construction (build)
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs de type lors du build
  },
  /* config options here */
  // experimental: {
  //   webpackBuildWorker: true,
  // }
};

export default nextConfig;
