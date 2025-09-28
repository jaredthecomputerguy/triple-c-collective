import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  script-src 'self' ${isDev ? "'unsafe-eval'" : ""} 'unsafe-inline' https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://lh3.googleusercontent.com https://images.unsplash.com;
  font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
  object-src 'none';
  frame-src 'self' https://www.google.com https://calendar.google.com;
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`.replace(/\n/g, "");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaredthecomputerguy.dev",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8090",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "triplecnewsletter.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()", // adjust as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
