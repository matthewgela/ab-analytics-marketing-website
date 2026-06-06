import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/assetPath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AB Analytics",
    short_name: "AB Analytics",
    description: "Enterprise AI engineering for sovereign environments.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#F0F4F8",
    theme_color: "#F0F4F8",
    icons: [
      {
        src: assetPath("/brand/monogram.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
