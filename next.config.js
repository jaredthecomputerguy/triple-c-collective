// next.config.js

const cspHeader = `
    default-src *;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    script-src-elem 'self' 'unsafe-inline' https://va.vercel-scripts.com/v1/script.debug.js https://va.vercel-scripts.com/v1/speed-insights/script.debug.js;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://lh3.googleusercontent.com https://images.unsplash.com;
    font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },
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
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};
