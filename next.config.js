/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['lucide-react'],

  sassOptions: {
    prependData: '@import "./share/styles/share.scss";',
  },
}

module.exports = nextConfig
