import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 8,
        }}
      >
        V
      </div>
    ),
    { ...size }
  );
}