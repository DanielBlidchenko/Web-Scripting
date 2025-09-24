"use client";
import { useState, FormEvent } from "react";

type RegData = {
  username: string;
  email: string;
  password: string;
};

export default function Home() {
  const [form, setForm] = useState<RegData>({
    username: "",
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState<RegData | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("REGISTER DATA:", form); 
    setSubmitted(form); // to show it on screen
  }

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-3 border rounded p-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="ex: coolstudent123"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="••••••••"
            type="password"
            required
          />
        </div>

        <button type="submit" className="border rounded px-4 py-2">Register</button>
      </form>

      {submitted && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Submitted Data</h2>
          <pre className="text-sm border rounded p-3 overflow-x-auto">
{JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
