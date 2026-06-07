import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/assetPath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AB Analytics",
    short_name: "AB Analytics",
    description: "AI and software engineering for Ethiopian organisations.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#000B29",
    theme_color: "#000B29",
    icons: [
      {
        src: assetPath("/brand/monogram.png"),
        sizes: "130x123",
        type: "image/png",
      },
      {
        src: assetPath("/brand/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
