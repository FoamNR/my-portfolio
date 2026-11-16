import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profileData } from "@/data/portfolio";

export const alt = `${profileData.name}, ${profileData.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read at module load (as in the Next docs) so the image stays static under Cache Components.
const portrait = await readFile(join(process.cwd(), "public/profile.png"));
const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#131418",
          color: "#f3f4f6",
          padding: "0 0 0 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div style={{ fontSize: 28, color: "#60a5fa", marginBottom: 20 }}>{profileData.role}</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, marginBottom: 28 }}>{profileData.name}</div>
          <div style={{ fontSize: 34, color: "#d1d5db", lineHeight: 1.3, maxWidth: 620 }}>{profileData.positioning}</div>
          <div style={{ fontSize: 24, color: "#9ca3af", marginTop: 36 }}>{profileData.contact.location}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
        <img src={portraitSrc} width={480} height={553} alt="" style={{ alignSelf: "flex-end" }} />
      </div>
    ),
    size
  );
}
