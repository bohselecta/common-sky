import { NextRequest, NextResponse } from "next/server";

type Body = {
  incidentId: string;
  hashes: string[];
  createdAt: string; // ISO datetime
};

const store: any[] = []; // In-memory for MVP. Replace with DB/LOG connector.

export async function POST(req: NextRequest) {
  const data = (await req.json().catch(() => null)) as Body | null;
  if (!data) return NextResponse.json({ ok: false }, { status: 400 });

  const { incidentId, hashes, createdAt } = data;
  const isoOk = !Number.isNaN(Date.parse(createdAt));
  const hashesOk = Array.isArray(hashes) && hashes.length > 0 && hashes.every(h => /^sha256:/.test(h));
  if (!incidentId || !isoOk || !hashesOk) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const rec = { ...data, id: `rec_${Date.now()}` };
  store.push(rec);
  return NextResponse.json({ ok: true, record: rec });
}

export async function GET() {
  // Return last 50 (debug/MVP). Remove or protect in prod.
  return NextResponse.json({ ok: true, records: store.slice(-50).reverse() });
}
