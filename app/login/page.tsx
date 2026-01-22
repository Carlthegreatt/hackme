/* Intentionally weak login for pentest practice */
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      setMessage(data.message || `Status: ${res.status}`);
    } catch (err) {
      setMessage("Request failed");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">Login</h1>
        <p className="mt-2 text-xs text-zinc-400">
          This login flow is intentionally weak. Try enumerating users, bypassing
          checks, and abusing the session cookie.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-sm space-y-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4"
      >
        <div className="space-y-1 text-xs">
          <label className="block text-zinc-300" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-emerald-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="space-y-1 text-xs">
          <label className="block text-zinc-300" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-emerald-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-emerald-950 hover:bg-emerald-400"
        >
          Login
        </button>

        {message && (
          <p className="text-xs text-zinc-300" data-test-id="login-message">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}



