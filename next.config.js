/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

  basePath: "/coloranalyze.me",
  assetPrefix: "/coloranalyze.me/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
