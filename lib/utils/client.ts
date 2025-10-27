export const getUUID = () => {
  if (typeof window === "undefined") {
    throw new Error("Cannot generate UUID in server-side");
  }
  return crypto.randomUUID();
};
