"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

import { env } from "@/lib/env";

export const GoogleMapEmbed = ({
  width = "100%",
  height = "100%",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <GoogleMapsEmbed
      apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      mode="place"
      allowfullscreen
      style={`height: ${height}; width: ${width}`}
      loading="eager"
      q="Triple C Collective, 14196 Lakeshore Ave. Clearlake CA 95422"
    />
  );
};
