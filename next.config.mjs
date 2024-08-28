/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.node = {
      global: false,
    };

    return config;
  },
};

export default nextConfig;
