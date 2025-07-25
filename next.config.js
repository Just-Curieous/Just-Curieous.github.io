
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/Just-Curieous.github.io' : '',
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
