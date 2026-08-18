import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 18,
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
