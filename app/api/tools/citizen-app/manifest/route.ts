import { NextResponse } from "next/server";

export async function GET() {
  // NOTE: The hash is provided via env (step 5). If empty, we omit it.
  const sha = process.env.APK_SHA256 || null;
  return NextResponse.json({
    name: "Citizen App (Android)",
    version: "0.1.0",
    file: "/citizen-app.apk",
    sha256: sha,
    updated_at: new Date().toISOString()
  });
}
