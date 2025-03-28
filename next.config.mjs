import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...pwaConfig,
  reactStrictMode: true,
};

export default nextConfig;