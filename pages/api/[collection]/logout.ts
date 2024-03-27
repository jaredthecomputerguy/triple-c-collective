import handler from "@payloadcms/next-payload/dist/handlers/[collection]/logout";

export default handler;

export const runtime = "edge";

export const config = {
  api: {
    externalResolver: true,
  },
};
