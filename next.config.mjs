import { withPWA } from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
};

export default withPWA(nextConfig);
