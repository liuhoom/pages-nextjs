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
      {
        hostname: 'ts1.tc.mm.bing.net',
      },
    ],
  },
}

export default nextConfig
