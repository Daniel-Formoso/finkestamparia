import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* outras config options aqui */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",        // deixa vazio se não houver porta específica
        pathname: "/**", // permite qualquer caminho dentro do domínio
      },
    ],
  },
};

export default nextConfig;
