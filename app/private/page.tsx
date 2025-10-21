"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function PrivatePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Private</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="space-y-3">
            <p>Hello {user?.username}</p>
            <button onClick={signOut} className="border px-3 py-2 rounded">
              Sign out
            </button>
          </div>
        )}
      </Authenticator>
    </main>
  );
}
