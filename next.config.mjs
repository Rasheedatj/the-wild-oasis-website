/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oxqewtpmhyfkebtsdgbb.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // output: 'export',
};

export default nextConfig;
