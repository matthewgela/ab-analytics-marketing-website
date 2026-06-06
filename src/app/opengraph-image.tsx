import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AB Analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050912 0%, #0A1430 50%, #1E3A8A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: "#0A1430",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(14,165,233,0.3)",
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700, color: "#E2E8F0" }}>
              AB
            </span>
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#E2E8F0",
              letterSpacing: 4,
            }}
          >
            ANALYTICS
          </span>
        </div>
        <p
          style={{
            fontSize: 22,
            color: "#94A3B8",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          We Industrialize Machine Learning & Generative AI Systems for National
          Scale
        </p>
      </div>
    ),
    { ...size },
  );
}
