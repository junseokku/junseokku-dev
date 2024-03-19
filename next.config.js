// next.config.js
import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: false };

export default withContentlayer(nextConfig);
