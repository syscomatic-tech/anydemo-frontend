/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //for all domains
    domains: [
      "th.bing.com",
      "localhost",
      "api.syscomatic.com",
      "fd1d-103-144-49-87.ngrok-free.app",
    ],
  },
  // plugins: [require('daisyui')],
};

module.exports = nextConfig;
