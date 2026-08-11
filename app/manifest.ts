import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Discover Your Swing!® — Golf Lessons with Christie Quinn",
    short_name: "Discover Your Swing",
    description:
      "Personalized golf instruction and player development from Christie Quinn, LPGA Class A Professional. Serving Palm Springs, Palm Desert, and San Diego.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf7",
    theme_color: "#f28c22",
    icons: [
      { src: "/icon", type: "image/png", sizes: "64x64" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
