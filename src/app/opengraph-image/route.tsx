import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #f6f1e7 0%, #ece2cf 55%, #d9c9a8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "#3a2f22",
              color: "#f6f1e7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            V
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 20,
                letterSpacing: 12,
                color: "#7a6a52",
                textTransform: "uppercase",
              }}
            >
              View
            </span>
            <span style={{ fontSize: 42, fontWeight: 700, color: "#2b241a" }}>
              {siteConfig.nameAr}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#2b241a",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {"\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u0645\u063A\u0627\u0633\u0644 \u0648\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645"}
          </div>

          <div
            style={{
              fontSize: 30,
              color: "#5d4f3b",
              maxWidth: 900,
            }}
          >
            {"\u0627\u0644\u062F\u0645\u0627\u0645 \u00B7 \u0627\u0644\u062E\u0628\u0631 \u00B7 \u0627\u0644\u0638\u0647\u0631\u0627\u0646 \u00B7 \u0627\u0644\u062C\u0628\u064A\u0644 \u00B7 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(58,47,34,0.2)",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 22, color: "#5d4f3b" }}>view.sa</div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 8,
              color: "#7a6a52",
              textTransform: "uppercase",
            }}
          >
            Marble Studio
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}