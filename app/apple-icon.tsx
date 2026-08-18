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
          background: "#163a34",
          color: "#f6f4ef",
          fontSize: 96,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
