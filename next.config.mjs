/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
             hostname: "example.com",
             hostname: "firebasestorage.googleapis.com",
          },
        ],
      },
};

export default nextConfig;
