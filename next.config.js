// next.config.js
const path = require("path");

// TODO: Update the script-src-elem to allow the vercel speed insights script
const cspHeader = `
    default-src *;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com/v1/script.debug.js https://va.vercel-scripts.com/v1/speed-insights/script.debug.js;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://lh3.googleusercontent.com;
    font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

module.exports = {
  experimental: {
    serverActions: true,
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
