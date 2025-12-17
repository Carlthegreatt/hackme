"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const reflectedHtml = query
    ? `<span>Results for: <code>${query}</code></span>`
    : "";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">Search</h1>
        <p className="mt-2 text-xs text-zinc-400">
          This page reflects your query directly into the DOM with{" "}
          <code>dangerouslySetInnerHTML</code>. Try classic reflected XSS
          payloads.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex max-w-md items-center gap-2 text-xs"
      >
        <input
          className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-cyan-500"
          placeholder="Search term or payload..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs">
        <p className="mb-2 text-zinc-400">Reflected output:</p>
        <div
          className="rounded border border-zinc-800 bg-zinc-950/80 p-2"
          // Intentionally unsafe reflection
          dangerouslySetInnerHTML={{ __html: reflectedHtml }}
        />
      </div>
    </div>
  );
}


