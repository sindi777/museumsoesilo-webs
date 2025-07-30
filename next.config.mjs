/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wfuenpguayzfhzbgsuqx.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb", // Naikkan batas menjadi 4MB (atau sesuai kebutuhan)
    },
  },
};

export default nextConfig;
