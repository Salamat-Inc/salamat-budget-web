/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
};
