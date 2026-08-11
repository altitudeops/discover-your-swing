import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f28c22 0%, #d66d13 100%)",
          color: "#fffdf7",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        DYS
      </div>
    ),
    size,
  );
}
