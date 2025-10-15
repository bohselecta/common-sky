"use client";
import { useEffect, useState } from "react";
import { getMessages, Locale } from "@/lib/locale";

type Rec = { id: string; incidentId: string; hashes: string[]; createdAt: string };

export default function ReceiptsPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");
  const [incidentId, setIncidentId] = useState("");
  const [hashes, setHashes] = useState("sha256:"); // users paste computed media hashes from the app
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());
  const [status, setStatus] = useState<string | null>(null);
  const [records, setRecords] = useState<Rec[]>([]);

  async function load() {
    const r = await fetch("/api/receipts");
    const j = await r.json();
    if (j.ok) setRecords(j.records || []);
  }
  useEffect(() => { load(); }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Submitting…");
    const hashesArr = hashes.split(/\s+/).filter(Boolean);
    const r = await fetch("/api/receipts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ incidentId: incidentId.trim(), hashes: hashesArr, createdAt })
    });
    const j = await r.json();
    if (j.ok) {
      setStatus(t.receipts.statusOk);
      setIncidentId(""); setHashes("sha256:"); setCreatedAt(new Date().toISOString());
      load();
    } else {
      setStatus(t.receipts.statusBad);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">{t.receipts.title}</h1>
        <p className="text-gray-700 mt-2">
          {t.receipts.blurb}
        </p>
      </header>

      <form onSubmit={submit} className="grid md:grid-cols-3 gap-4 border rounded p-5">
        <label className="block md:col-span-1">
          <span className="text-sm">{t.receipts.incidentId}</span>
          <input className="mt-1 w-full border rounded px-3 py-2" value={incidentId}
                 onChange={e => setIncidentId(e.target.value)} placeholder="inc_..." required />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm">{t.receipts.hashes}</span>
          <textarea className="mt-1 w-full border rounded px-3 py-2 h-24"
                    value={hashes} onChange={e => setHashes(e.target.value)}
                    placeholder={"sha256:abc123...\nsha256:def456..."} required />
        </label>
        <label className="block md:col-span-1">
          <span className="text-sm">{t.receipts.createdAt}</span>
          <input className="mt-1 w-full border rounded px-3 py-2"
                 value={createdAt} onChange={e => setCreatedAt(e.target.value)} />
        </label>
        <div className="md:col-span-2 flex items-end">
          <button className="bg-sky text-white px-4 py-2 rounded">{t.receipts.submit}</button>
          {status && <span className="ml-3 text-sm text-gray-600">{status}</span>}
        </div>
      </form>

      <section>
        <h2 className="text-xl font-semibold">{t.receipts.recent}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {records.map(r => (
            <li key={r.id} className="border rounded p-3">
              <div><strong>{r.incidentId}</strong> · <span className="text-gray-600">{r.createdAt}</span></div>
              <div className="mt-1">
                {r.hashes.map((h, i) => <code key={i} className="mr-2 bg-gray-50 border rounded px-1">{h}</code>)}
              </div>
              <div className="text-xs text-gray-500 mt-2">{t.receipts.recId}: {r.id}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
