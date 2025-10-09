"use client";
import { useState, FormEvent } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("REGISTER DATA:", form);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-3 border rounded p-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Your username"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="border rounded w-full p-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            className="border rounded w-full p-2"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="border rounded px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Register
        </button>
      </form>

      {submitted && (
        <div className="mt-4 border rounded p-3 bg-gray-100">
          <p><strong>Submitted:</strong></p>
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
