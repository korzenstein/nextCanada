/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: 'raw.githubusercontent.com',
    
  },
 
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Master-Key',
            value: '$2b$10$dBNW6g9lshV2AEVlShSKzeSQ2ykDhBbIlfHAE.pnNq2PHIMe.zPRa',
          },
        ],
      },
    ]
  },
}


     $2b$10$dBNW6g9lshV2AEVlShSKzeSQ2ykDhBbIlfHAE.pnNq2PHIMe.zPRa


module.exports = nextConfig
