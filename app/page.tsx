export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-6 shadow-xl">
        <h1 className="text-3xl font-semibold text-zinc-50">
          Welcome to <span className="text-emerald-400">HackMe Lab</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400">
          This is an intentionally vulnerable full‑stack application running only
          on your machine. Use it to practice web penetration testing techniques
          in a safe environment you fully control.
        </p>
        <p className="mt-3 text-xs text-amber-300">
          Warning: Do not deploy this application to the public internet. It is
          intentionally insecure.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-zinc-100">
            Auth & Session
          </h2>
          <ul className="mt-2 space-y-1 text-xs text-zinc-400">
            <li>
              - Weak login with hardcoded users and insecure session cookie
            </li>
            <li>- Missing protections against brute force</li>
            <li>- Insecure direct object references on profile data</li>
          </ul>
          <a
            href="/login"
            className="mt-3 inline-flex items-center rounded-full border border-emerald-500/40 px-3 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/10"
          >
            Explore login flaws →
          </a>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-zinc-100">
            XSS & Injection
          </h2>
          <ul className="mt-2 space-y-1 text-xs text-zinc-400">
            <li>- Reflected XSS in the search feature</li>
            <li>- Stored XSS in a shared notes board</li>
            <li>- Over‑trusting client data in APIs</li>
          </ul>
          <div className="mt-3 flex gap-2">
            <a
              href="/search"
              className="inline-flex items-center rounded-full border border-cyan-500/40 px-3 py-1 text-xs font-medium text-cyan-300 hover:bg-cyan-500/10"
            >
              Reflected XSS →
            </a>
            <a
              href="/notes"
              className="inline-flex items-center rounded-full border border-pink-500/40 px-3 py-1 text-xs font-medium text-pink-300 hover:bg-pink-500/10"
            >
              Stored XSS →
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-zinc-100">
            File Upload & Path Issues
          </h2>
          <ul className="mt-2 space-y-1 text-xs text-zinc-400">
            <li>- Unvalidated file uploads</li>
            <li>- Weak file type checks</li>
            <li>- Files served directly from the web root</li>
          </ul>
          <a
            href="/upload"
            className="mt-3 inline-flex items-center rounded-full border border-orange-500/40 px-3 py-1 text-xs font-medium text-orange-300 hover:bg-orange-500/10"
          >
            Inspect upload handling →
          </a>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-zinc-100">Tips</h2>
          <ul className="mt-2 space-y-1 text-xs text-zinc-400">
            <li>- Intercept traffic with a proxy (Burp, ZAP, etc.).</li>
            <li>- Tamper with cookies, headers, and JSON bodies.</li>
            <li>- Try both browser‑based and automated attacks.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h2 className="text-sm font-semibold text-zinc-100">Scope</h2>
        <p className="mt-2 text-xs text-zinc-400">
          You are authorized to attack anything served by this app on{" "}
          <span className="font-mono text-zinc-200">localhost</span>. Do not use
          techniques from this lab against systems you do not own or have
          explicit permission to test.
        </p>
      </section>
    </div>
  );
}
