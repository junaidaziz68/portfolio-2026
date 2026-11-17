import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Junaid — I build solutions for a better tomorrow",
    short_name: "Junaid",
    description:
      "Junaid is a passionate developer turning ideas into real-world applications with focus on impact, usability, and innovation. Based in Coventry, United Kingdom.",
    start_url: "/",
    display: "standalone",
    background_color: "#05010f",
    theme_color: "#05010f",
    icons: [
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
