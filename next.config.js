/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.ts'
  }
}

module.exports = nextConfig
