/** @type {import('next').NextConfig} */
// "https://static.thenounproject.com/png/5800652-200.png"
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.thenounproject.com',
          port: '',
          pathname: '/png/5800652-200.png',
        },
      ],
    },
  }

module.exports = nextConfig
