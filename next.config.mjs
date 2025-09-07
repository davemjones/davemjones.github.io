/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },

  // Performance optimizations
  poweredByHeader: false,

  // Compression and optimization
  compress: true,

  // Static optimization
  experimental: {
    optimizePackageImports: ['@fontsource/jetbrains-mono'],
  },

  // Bundle analyzer (conditional) - Note: requires import in production build
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      // Import will be resolved at build time when ANALYZE=true
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')();
      config.plugins.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),
};

export default nextConfig;
