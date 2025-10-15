import { NextRequest, NextResponse } from "next/server";
import { issueSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { idCode } = await req.json().catch(() => ({}));
  if (!idCode || !/^[A-Za-z0-9-]{6,}$/.test(idCode)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // In production: verify against state/registry. For now, accept format-valid codes.
  await issueSession(idCode);
  return NextResponse.json({ ok: true });
}
