"use client";

import type { ReactNode } from "react";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

export const Progress = ({ children }: { children: ReactNode }) => {
  return <ProgressProvider color="white">{children}</ProgressProvider>;
};
