import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import { cloudStorage } from "@payloadcms/plugin-cloud-storage";  
import { webpackBundler } from "@payloadcms/bundler-webpack";

import { Blogs } from "./collections/blog";
import { Media } from "./collections/media";
import { Deals } from "./collections/deals";

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  debug: true,
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [Blogs, Media, Deals],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  plugins: [
    cloudStorage({
      collections: {
        // Enable cloud storage for Media collection
        media: {
          // Create the S3 adapter
          adapter: s3Adapter({
            config: {
              region: process.env.AWS_REGION!,

              credentials: {
                accessKeyId: process.env.AWS_KEY!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
              },
            },

            bucket: process.env.AWS_BUCKET!,
          }),
        },
      },
    }),
  ],
});
