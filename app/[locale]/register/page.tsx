"use client";
import { useState } from "react";
import { getMessages, Locale } from "@/lib/locale";

export default function RegisterPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");
  const [idCode, setIdCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Working…");
    const r = await fetch("/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ idCode: idCode.trim() })
    });
    if (r.ok) window.location.href = `/${params.locale}/dashboard`;
    else setStatus(t.register.error);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-semibold">{t.register.title}</h1>
      <p className="text-gray-700 mt-2">{t.register.prompt}</p>
      <form onSubmit={onSubmit} className="space-y-4 mt-6">
        <label className="block">
          <span className="text-sm">{t.register.idLabel}</span>
          <input className="mt-1 w-full border rounded px-3 py-2"
                 placeholder="e.g., GZ-2F9K-1A"
                 pattern="[A-Za-z0-9-]{6,}"
                 value={idCode} onChange={e => setIdCode(e.target.value)} required />
        </label>
        <button className="bg-sky text-white px-4 py-2 rounded w-full">{t.register.submit}</button>
      </form>
      {status && <p className="text-sm text-gray-600 mt-3">{status}</p>}
    </div>
  );
}
