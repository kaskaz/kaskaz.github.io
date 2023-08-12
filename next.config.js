/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
    loader: 'custom',
    loaderFile: './src/imageLoader.ts'
  }
}

module.exports = nextConfig
