/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      // Existing Vercel images
      {
        protocol: "https",
        hostname: "e-commerce-three-beta-43.vercel.app",
      },

      // ✅ Supabase Storage images
      {
        protocol: "https",
        hostname: "fbwoptpzxcjexbgcvhjm.supabase.co",
      },
    ],
  },

  // ✅ PROXY ALL API ROUTES (NO CORS ISSUES)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://thestylestudio.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
