"use client";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

export default function PrivatePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Members Area</h1>

  
      <Authenticator>
        <ProtectedContent />
      </Authenticator>
    </main>
  );
}

function ProtectedContent() {
  const { user, signOut } = useAuthenticator();
  return (
    <div className="border rounded p-4">
      <p className="mb-2">Welcome, <strong>{user?.username ?? user?.signInDetails?.loginId}</strong></p>
      <button onClick={signOut} className="border rounded px-3 py-2">
        Sign out
      </button>
      <div className="mt-4">This content is only visible when logged in.</div>
    </div>
  );
}
