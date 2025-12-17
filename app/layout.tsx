import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackMe Lab",
  description:
    "Intentionally vulnerable app for local penetration testing practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-zinc-950 text-zinc-50">
          <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
              <div className="flex flex-col">
                <span className="text-sm font-mono uppercase tracking-[0.25em] text-zinc-500">
                  HackMe
                </span>
                <span className="text-lg font-semibold text-zinc-100">
                  Local Pentest Playground
                </span>
              </div>
              <nav className="flex gap-3 text-sm text-zinc-400">
                <a href="/" className="hover:text-zinc-100">
                  Home
                </a>
                <a href="/login" className="hover:text-zinc-100">
                  Login
                </a>
                <a href="/profile" className="hover:text-zinc-100">
                  Profiles
                </a>
                <a href="/notes" className="hover:text-zinc-100">
                  Notes (XSS)
                </a>
                <a href="/search" className="hover:text-zinc-100">
                  Search
                </a>
                <a href="/upload" className="hover:text-zinc-100">
                  Upload
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
