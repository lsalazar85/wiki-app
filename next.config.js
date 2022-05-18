/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["houm.com", "rickandmortyapi.com", "cutewallpaper.org"],
  },
  compiler: {
    styledComponents: true,
  },
};
