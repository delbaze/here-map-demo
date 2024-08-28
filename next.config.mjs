/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Ajoutez votre configuration ici
    config.node = {
      global: false,
    };

    return config;
  },
};

export default nextConfig;
