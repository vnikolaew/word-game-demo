/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   experimental: {
      serverActions: {
         allowedOrigins: ["localhost:3000"],
      },
   },
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.(vert|frag)$/i,
         use: "raw-loader",
      });

      return config;
   },
};

export default nextConfig;
