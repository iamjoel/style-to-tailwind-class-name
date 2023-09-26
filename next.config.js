module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/form/normal/edit',
        permanent: false,
      },
    ]
  },
};
