import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 64, height: 64 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#3a2f22",
          color: "#f6f1e7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 14,
        }}
      >
        V
      </div>
    ),
    { ...size }
  );
}