"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b px-4 py-3 mb-6">
      <ul className="flex gap-4">
        <li><Link href="/" className="underline">Home</Link></li>
        <li><Link href="/about" className="underline">About</Link></li>
        <li><Link href="/contact" className="underline">Contact</Link></li>
        <li><Link href="/weather" className="underline">Weather</Link></li>
        <li><Link href="/private" className="underline">Private</Link></li>
      </ul>
    </nav>
  );
}
