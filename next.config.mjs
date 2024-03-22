/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'kindly-rooster-850.convex.cloud',
            },
        ],
    },
};

export default nextConfig;
