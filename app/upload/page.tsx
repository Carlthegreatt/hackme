"use client";

import { useState } from "react";

export default function UploadPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setMessage(null);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessage(data.message || `Status: ${res.status}`);
      if (data.path) {
        setFileName(data.path);
      }
    } catch (err) {
      setMessage("Upload failed");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">File upload</h1>
        <p className="mt-2 text-xs text-zinc-400">
          This endpoint performs minimal validation and stores files under the
          web root. Explore extension tricks, path issues, and client-side only
          restrictions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs max-w-md"
        encType="multipart/form-data"
      >
        <div className="space-y-1">
          <label className="block text-zinc-300" htmlFor="file">
            Choose file
          </label>
          <input
            id="file"
            name="file"
            type="file"
            className="block w-full text-xs text-zinc-300"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-orange-950 hover:bg-orange-400"
        >
          Upload
        </button>
        {message && <p className="text-zinc-300">{message}</p>}
        {fileName && (
          <p className="text-zinc-300">
            Accessible at:{" "}
            <a
              href={fileName}
              className="font-mono text-emerald-300 underline"
            >
              {fileName}
            </a>
          </p>
        )}
      </form>
    </div>
  );
}



