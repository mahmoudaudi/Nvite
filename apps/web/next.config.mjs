/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Demo hotlinks from the approved design. Later phases serve uploads
    // from our own media pipeline (see media_assets table) and this can shrink.
    remotePatterns: [{ protocol: 'https', hostname: 'lh3.googleusercontent.com' }],
  },
};

export default nextConfig;
