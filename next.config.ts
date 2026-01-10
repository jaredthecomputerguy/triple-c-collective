import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const isDev = process.env.NODE_ENV === "development";

const CSP_HEADER = `
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

const getRemotePatterns = (): RemotePattern[] => {
  const patterns = [
    {
      protocol: "https",
      hostname: "jaredthecomputerguy.dev",
      pathname: "/**"
    },
    {
      protocol: "https",
      hostname: "triplecnewsletter.com",
      pathname: "/**"
    }
  ] as RemotePattern[];

  if (isDev) {
    patterns.push({
      protocol: "http",
      hostname: "localhost",
      port: "8090",
      pathname: "/api/files/**"
    });
  }

  return patterns;
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getRemotePatterns(),
    dangerouslyAllowLocalIP: isDev
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CSP_HEADER
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()" // adjust as needed
          }
        ]
      }
    ];
  },
  allowedDevOrigins: isDev ? ["*.ngrok-free.app"] : undefined,
  typedRoutes: true
};

export default nextConfig;
