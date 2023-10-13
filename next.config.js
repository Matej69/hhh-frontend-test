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
          destination: '/dashboard',
          permanent: true
        }
      ];
    }
  };
  
  module.exports = nextConfig;