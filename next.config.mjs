/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**', // This matches all paths on the domain
            },
            {
                protocol: 'https',
                hostname: 'lh4.googleusercontent.com',
                pathname: '/**', // This matches all paths on the domain
            },
        ],
    },
};

export default nextConfig;