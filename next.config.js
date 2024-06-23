// next.config.js
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

const cspHeader = `
    default-src *;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com/v1/script.debug.js;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://lh3.googleusercontent.com https://triple-c-collective.s3.us-west-1.amazonaws.com;
    font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

module.exports = withPayload(
  {
    // your Next config here
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
          hostname: "triple-c-collective.s3.us-west-1.amazonaws.com",
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
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (required)
    configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),

    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/admin",
  },
);
