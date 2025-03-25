/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensures the project is exported as static files
    images: {
      unoptimized: true, // Use this when exporting static sites to avoid image optimization issues
    },
  };
  
  export default nextConfig;
  