"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  author: string;
  content: string;
};

export default function NotesPage() {
  const [author, setAuthor] = useState("anon");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  async function loadNotes() {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data.notes || []);
  }

  useEffect(() => {
    loadNotes().catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, content }),
    });
    setContent("");
    loadNotes().catch(() => {});
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">Notes board</h1>
        <p className="mt-2 text-xs text-zinc-400">
          This shared board renders notes with{" "}
          <code>dangerouslySetInnerHTML</code> from untrusted input. It is
          intentionally vulnerable to stored XSS.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs max-w-xl"
      >
        <div className="flex gap-2">
          <div className="w-32 space-y-1">
            <label className="block text-zinc-300" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-pink-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="block text-zinc-300" htmlFor="content">
              Content
            </label>
            <input
              id="content"
              className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-pink-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="HTML/JS payloads welcome here..."
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-pink-950 hover:bg-pink-400"
        >
          Post note
        </button>
      </form>

      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-xs"
          >
            <p className="mb-1 text-zinc-500">
              <span className="text-zinc-400">Author:</span>{" "}
              <span className="font-mono text-zinc-100">{note.author}</span>
            </p>
            <div
              className="rounded border border-zinc-800 bg-zinc-950/80 p-2 text-zinc-50"
              // Intentionally unsafe rendering of note content
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
          </div>
        ))}
        {notes.length === 0 && (
          <p className="text-xs text-zinc-500">
            No notes yet. Try posting something.
          </p>
        )}
      </div>
    </div>
  );
}



