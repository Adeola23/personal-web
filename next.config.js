/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Adeola23',
        permanent: true,
      },
     
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/adeola-abiola',
        permanent: true,
      },
    ]
  },
}
