/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/careers',
        destination: '/opportunities',
        permanent: false,
      },
      {
        source: '/career',
        destination: '/opportunities',
        permanent: false,
      },
      {
        source: '/careers/:slug*',
        destination: '/opportunities/:slug*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
