import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "M7 Bike & Scooters";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f4f5f7",
          color: "#111827",
          display: "flex",
          height: "100%",
          padding: "52px",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #e5e7eb",
            borderRadius: "28px",
            display: "flex",
            height: "100%",
            overflow: "hidden",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "54px",
              width: "58%"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  alignItems: "center",
                  background: "#e11d2e",
                  borderRadius: "14px",
                  color: "#ffffff",
                  display: "flex",
                  fontSize: "38px",
                  fontWeight: 900,
                  height: "82px",
                  justifyContent: "center",
                  width: "82px"
                }}
              >
                M7
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "36px", fontWeight: 900 }}>Bike & Scooters</div>
                <div style={{ color: "#6b7280", fontSize: "22px", fontWeight: 700 }}>
                  Sale - Repair - Accessories
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: "#e11d2e",
                  fontSize: "24px",
                  fontWeight: 800,
                  marginBottom: "16px"
                }}
              >
                Salford local service centre
              </div>
              <div
                style={{
                  fontSize: "68px",
                  fontWeight: 900,
                  letterSpacing: "-2px",
                  lineHeight: 1.02
                }}
              >
                Bike repairs, sales, rentals and scooter support.
              </div>
            </div>

            <div style={{ color: "#374151", display: "flex", flexDirection: "column", fontSize: "25px", gap: "8px" }}>
              <div>Phone / WhatsApp: 07838 148971</div>
              <div>5 Bramley St, Salford M7 1UF</div>
            </div>
          </div>

          <div
            style={{
              background: "#111827",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "46px",
              width: "42%"
            }}
          >
            <div
              style={{
                border: "5px solid #ffffff",
                borderRadius: "999px",
                height: "170px",
                position: "relative",
                width: "170px"
              }}
            />
            <div
              style={{
                border: "5px solid #ffffff",
                borderRadius: "999px",
                height: "170px",
                marginLeft: "210px",
                marginTop: "-170px",
                width: "170px"
              }}
            />
            <div
              style={{
                background: "#e11d2e",
                height: "10px",
                marginLeft: "84px",
                marginTop: "-88px",
                transform: "rotate(-22deg)",
                width: "235px"
              }}
            />
            <div
              style={{
                background: "#ffffff",
                height: "10px",
                marginLeft: "95px",
                marginTop: "58px",
                width: "250px"
              }}
            />
            <div style={{ fontSize: "30px", fontWeight: 900, marginTop: "118px" }}>
              All Bikes Spare Parts & Service Center
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
