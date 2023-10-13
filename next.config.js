//  @type {import('next').NextConfig}

nextConfig = {
    distDir: 'out',
    images: {
      unoptimized: true
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/testpage',
          permanent: true
        }
      ];
    }
  };
  
  module.exports = nextConfig;