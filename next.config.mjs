/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'wfuenpguayzfhzbgsuqx.supabase.co',
            port: '',
            pathname: '/**'
        }
        ],
    }
};

export default nextConfig;
