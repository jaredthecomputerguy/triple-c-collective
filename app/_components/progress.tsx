"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import type { ReactNode } from "react";

export const Progress = ({ children }: { children: ReactNode }) => {
  return <ProgressProvider color="white">{children}</ProgressProvider>;
};
