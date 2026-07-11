import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "View - أعمال الرخام الفاخر في المنطقة الشرقية";

export default function OpengraphImage() {
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
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "linear-gradient(135deg, #3a2f22 0%, #4f4033 100%)",
              color: "#f6f1e7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -1,
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
                fontWeight: 600,
              }}
            >
              View
            </span>
            <span
              style={{
                fontSize: 46,
                fontWeight: 800,
                color: "#2b241a",
                marginTop: 2,
              }}
            >
              {siteConfig.nameAr}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#2b241a",
              lineHeight: 1.15,
              maxWidth: 1000,
              letterSpacing: -1,
            }}
          >
            توريد وتركيب الرخام والمغاسل ودرج السلالم وواجهات الرخام الفاخرة
          </div>

          <div
            style={{
              fontSize: 30,
              color: "#5d4f3b",
              maxWidth: 900,
              fontWeight: 500,
            }}
          >
            الدمام · الخبر · الظهران · الجبيل · المنطقة الشرقية
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(58,47,34,0.2)",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 24, color: "#5d4f3b", fontWeight: 600 }}>
            view.sa
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              color: "#7a6a52",
              textTransform: "uppercase",
              fontWeight: 600,
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