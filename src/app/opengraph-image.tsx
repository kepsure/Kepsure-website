import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Kepsure Solutions — A Total IT Solution Provider";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#061322";
const NAVY_700 = "#1a3a6b";
const NAVY_500 = "#2d5d9a";
const NAVY_300 = "#7ea1d2";
const ORANGE_500 = "#f39200";
const ORANGE_400 = "#fd9a1c";
const PAPER = "#ffffff";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background: `linear-gradient(135deg, #f4f6fb 0%, #eef3fb 100%)`,
          color: INK,
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Decorative blur blobs */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "rgba(243,146,0,0.22)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background: "rgba(26,58,107,0.22)",
            filter: "blur(70px)",
            display: "flex",
          }}
        />

        {/* Top row: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "20px",
              background: `linear-gradient(135deg, ${NAVY_500} 0%, ${NAVY_700} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 40px rgba(26,58,107,0.30)",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 64 64">
              <path
                d="M 32 8 L 54 18 L 54 36 C 54 48, 44 56, 32 60 C 20 56, 10 48, 10 36 L 10 18 Z"
                fill={PAPER}
              />
              <path
                d="M 22 33 L 30 41 L 44 25"
                fill="none"
                stroke={ORANGE_500}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontSize: "44px",
                fontWeight: 800,
                color: NAVY_700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                display: "flex",
              }}
            >
              KEPSURE
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: NAVY_500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Solutions Pvt. Ltd.
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: INK,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            We engineer the IT
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              display: "flex",
              gap: "20px",
            }}
          >
            <span style={{ color: INK, display: "flex" }}>your business</span>
            <span style={{ color: ORANGE_500, display: "flex" }}>runs on.</span>
          </div>
        </div>

        {/* Tag chips */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "36px",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          {[
            "Cyber Security",
            "Infrastructure",
            "Backup & DR",
            "Email",
            "Licensing",
            "Enterprise",
          ].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 20px",
                borderRadius: "9999px",
                background: "rgba(26,58,107,0.10)",
                color: NAVY_700,
                fontSize: "20px",
                fontWeight: 600,
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "48px",
            paddingTop: "28px",
            borderTop: `1px solid rgba(26,58,107,0.18)`,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: ORANGE_500,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            A Total IT Solution Provider
          </div>
          <div
            style={{
              fontSize: "20px",
              color: INK,
              fontWeight: 600,
              display: "flex",
            }}
          >
            kepsure.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
