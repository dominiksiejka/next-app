/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { allowFutureImage: true },
  },
  images: { domains: ['rickandmortyapi.com'] },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return {
      ...config,
      experiments: {
        topLevelAwait: true,
        layers: true,
      },
    }
  },
}

module.exports = nextTranslate(nextConfig)
