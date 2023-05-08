/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['.'],
  },
}

module.exports = nextConfig
