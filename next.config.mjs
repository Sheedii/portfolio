/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['example.com'],
    },
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
};

export default nextConfig;