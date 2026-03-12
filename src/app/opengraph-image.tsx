import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = `${siteConfig.shortName} | Premium Gym in Hyderabad`;
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(220,38,38,0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(220,38,38,0.18), transparent 28%), linear-gradient(135deg, #050505 0%, #111111 52%, #1a1a1a 100%)",
          color: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(120deg, transparent 0%, transparent 58%, rgba(220,38,38,0.08) 58%, rgba(220,38,38,0.08) 62%, transparent 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -110,
            right: -30,
            display: "flex",
            fontSize: 380,
            fontWeight: 900,
            letterSpacing: -18,
            color: "rgba(255,255,255,0.05)",
            lineHeight: 1,
          }}
        >
          9
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "54px 58px",
          }}
        >
          <div
            style={{
              width: 760,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 94,
                  height: 94,
                  borderRadius: 24,
                  background: "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)",
                  boxShadow: "0 18px 50px rgba(220,38,38,0.32)",
                  fontSize: 42,
                  fontWeight: 900,
                  letterSpacing: 1,
                }}
              >
                CFS9
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 20,
                    textTransform: "uppercase",
                    letterSpacing: 6,
                    color: "#f87171",
                    fontWeight: 700,
                  }}
                >
                  Central Fitness Station
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 56,
                    fontWeight: 900,
                    letterSpacing: -2,
                    lineHeight: 1.05,
                  }}
                >
                  Premium Gym in Hyderabad
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  lineHeight: 1.45,
                  color: "#d4d4d8",
                  maxWidth: 700,
                }}
              >
                Expert coaches, world-class equipment, and transformation-focused training across Kondapur and Madhapur.
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Strength Training",
                  "Bodybuilding",
                  "Personal Coaching",
                  "Kondapur",
                  "Madhapur",
                ].map((label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(255,255,255,0.06)",
                      padding: "12px 18px",
                      fontSize: 19,
                      color: "#fafafa",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-end",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "10px 16px",
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#f5f5f5",
              }}
            >
              www.cfs9gym.com
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                borderRadius: 28,
                background: "linear-gradient(180deg, rgba(220,38,38,0.18) 0%, rgba(255,255,255,0.05) 100%)",
                border: "1px solid rgba(248,113,113,0.26)",
                padding: "24px 22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#fca5a5",
                  fontWeight: 700,
                }}
              >
                Why CFS9
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontSize: 24,
                  lineHeight: 1.35,
                  fontWeight: 700,
                }}
              >
                <div style={{ display: "flex" }}>500+ active members</div>
                <div style={{ display: "flex" }}>10+ years of training excellence</div>
                <div style={{ display: "flex" }}>Premium facilities and coaching</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              {[
                ["Branches", "2"],
                ["Programs", "12+"],
                ["Coaches", "6+"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 76,
                    height: 76,
                    borderRadius: 22,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 24,
                      fontWeight: 900,
                      color: "#ffffff",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#d4d4d8",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}