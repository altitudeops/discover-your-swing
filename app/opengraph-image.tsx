import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Discover Your Swing!® — Golf lessons with Christie Quinn, LPGA Class A Professional, in Palm Springs, Palm Desert & San Diego";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#fffdf7";
const INK = "#1c2a28";
const ORANGE = "#f28c22";
const MUTED = "#5b6b67";

async function dataUri(file: string, mime: string) {
  const buf = await readFile(join(process.cwd(), "public", "images", file));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function Image() {
  const [photo, logo] = await Promise.all([
    dataUri("coach-action.jpg", "image/jpeg"),
    dataUri("logo-mark.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: message + CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "62%",
            padding: "64px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={64} height={75} alt="" />
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 800,
                color: INK,
                letterSpacing: -0.5,
              }}
            >
              Discover Your Swing!®
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 66,
                fontWeight: 800,
                lineHeight: 1.05,
                color: INK,
                letterSpacing: -1.5,
              }}
            >
              Golf lessons with Christie Quinn
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 28,
                color: MUTED,
                lineHeight: 1.3,
              }}
            >
              LPGA Class A Professional · Palm Springs, Palm Desert &amp; San Diego
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: ORANGE,
                color: "#ffffff",
                fontSize: 28,
                fontWeight: 700,
                padding: "18px 34px",
                borderRadius: 999,
              }}
            >
              Book your lesson →
            </div>
          </div>
        </div>

        {/* Right: coach photo */}
        <div style={{ display: "flex", width: "38%", height: "100%", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            width={456}
            height={630}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              boxShadow: `inset 40px 0 60px -20px ${PAPER}`,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
