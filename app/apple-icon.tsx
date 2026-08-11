import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon rendered from the real brand mark (public/images/logo-mark.png).
export default async function AppleIcon() {
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
        }}
      >
        {/* Preserve the 900:1061 aspect ratio of the source mark */}
        <img src={src} width={127} height={150} style={{ objectFit: "contain" }} alt="" />
      </div>
    ),
    size,
  );
}
