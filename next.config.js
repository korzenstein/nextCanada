/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['raw.githubusercontent.com'], },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Master-Key',
            value: process.env.NEXT_PUBLIC_API_KEY,
          },
        ],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}


module.exports = nextConfig
