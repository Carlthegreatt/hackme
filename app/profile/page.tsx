"use client";

import { useEffect, useState } from "react";

type Profile = {
  id: number;
  username: string;
  role: string;
  bio: string;
};

export default function ProfilePage() {
  const [userId, setUserId] = useState<string>("1");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function loadProfile(id: string) {
    setError(null);
    setProfile(null);
    try {
      const res = await fetch(`/api/profile?id=${encodeURIComponent(id)}`, {
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to load profile");
        return;
      }
      setProfile(data.profile);
    } catch (e) {
      setError("Request failed");
    }
  }

  useEffect(() => {
    loadProfile(userId).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">Profiles</h1>
        <p className="mt-2 text-xs text-zinc-400">
          This endpoint trusts the <span className="font-mono">id</span> you send
          from the client. Look for IDOR / authz issues and hidden data.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadProfile(userId).catch(() => {});
          }}
          className="flex items-end gap-2 text-xs"
        >
          <div className="space-y-1">
            <label className="block text-zinc-300" htmlFor="userId">
              Profile ID
            </label>
            <input
              id="userId"
              className="w-24 rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-50 outline-none focus:border-emerald-500"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900 hover:bg-zinc-300"
          >
            Load
          </button>
        </form>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs">
        {error && <p className="text-red-400">{error}</p>}
        {profile && (
          <div className="space-y-1">
            <p>
              <span className="text-zinc-500">ID:</span>{" "}
              <span className="font-mono text-zinc-100">{profile.id}</span>
            </p>
            <p>
              <span className="text-zinc-500">Username:</span>{" "}
              <span className="font-mono text-zinc-100">
                {profile.username}
              </span>
            </p>
            <p>
              <span className="text-zinc-500">Role:</span>{" "}
              <span className="font-mono text-amber-300">{profile.role}</span>
            </p>
            <p className="text-zinc-300">{profile.bio}</p>
          </div>
        )}
        {!error && !profile && (
          <p className="text-zinc-500">No profile loaded yet.</p>
        )}
      </div>
    </div>
  );
}



