import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser favicon rendered from the real brand mark (public/images/logo-mark.png).
export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-mark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffdf7",
          borderRadius: 12,
        }}
      >
        {/* Preserve the 900:1061 aspect ratio of the source mark */}
        <img src={src} width={49} height={58} style={{ objectFit: "contain" }} alt="" />
      </div>
    ),
    size,
  );
}
