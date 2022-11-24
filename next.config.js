/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  eslint: {
    dirs: [
      'pages',
      'components',
      'lib',
      'src',
      '.storybook',
      'stories',
      'utils',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
