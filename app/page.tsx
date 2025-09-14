"use client";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState<{ id: number; text: string; rank: number }[]>([]);
  const [text, setText] = useState("");
  const [rank, setRank] = useState(3);

  function addItem() {
    const t = text.trim();
    if (t === "") return;
    const next = [...items, { id: Date.now(), text: t, rank }];
    next.sort((a, b) => b.rank - a.rank); // show higher rank first
    setItems(next);
    setText("");
    setRank(3);
  }

  function doneItem(id: number) {
    setItems(items.filter(x => x.id !== id));
  }

  return (
    <main className="min-h-screen p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Simple to do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 border rounded px-3 py-2"
        />
        <select
          value={rank}
          onChange={(e) => setRank(parseInt(e.target.value))}
          className="border rounded px-2 py-2"
        >
          <option value={5}>Rank 5 (High)</option>
          <option value={4}>Rank 4</option>
          <option value={3}>Rank 3</option>
          <option value={2}>Rank 2</option>
          <option value={1}>Rank 1 (Low)</option>
        </select>
        <button onClick={addItem} className="border rounded px-3 py-2">Add</button>
      </div>

      {items.length === 0 ? (
        <p className="text-sm">No tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.id} className="flex items-center justify-between border rounded p-2">
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 border rounded">Rank {it.rank}</span>
                <span>{it.text}</span>
              </div>
              <button onClick={() => doneItem(it.id)} className="text-sm border rounded px-2 py-1">
                Done
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
