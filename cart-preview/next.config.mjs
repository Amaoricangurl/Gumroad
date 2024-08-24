/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = false;
    }
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

export default nextConfig;