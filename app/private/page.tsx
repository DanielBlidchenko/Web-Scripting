"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
export default function PrivatePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Private</h1>
      <Authenticator>
        <PrivateContent />
      </Authenticator>
    </main>
  );
}

function PrivateContent() {
  const { user, signOut } = useAuthenticator((ctx) => [ctx.user]);

  return (
    <section className="space-y-3 border rounded p-4 max-w-md">
      <p className="text-sm text-gray-300">
        Logged in as: <span className="font-mono">{user?.username}</span>
      </p>

      <div className="text-lg">This is a secret  </div>

      <button
        onClick={signOut}
        className="border rounded px-3 py-2 mt-2 underline"
      >
        Sign out
      </button>
    </section>
  );
}
