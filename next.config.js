/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:version/:address',
        headers: [
          {
            key: "Cache-Control",
            value: "public; max-age=40",
          },
        ],
      },
    ]
  },
}
