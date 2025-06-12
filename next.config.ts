import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
