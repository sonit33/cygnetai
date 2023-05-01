"use client";

import Link from "next/link";
import { UserInfo, login, logout } from "./reusables/lib/utils/google-auth";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<UserInfo | null>(null);

  async function onLogin() {
    const result = await login();
    setUser(result.user);
  }

  async function onLogout() {
    await logout();
    setUser(null);
  }

  return (
    <div className="max-w-md mx-auto m-6">
      <Link href="/chat">Talk to AI</Link>
      <div>
        {!user && (
          <button
            type="button"
            className="border-2 border-blue-300 shadow p-2 px-4 bg-blue-200 rounded"
            onClick={onLogin}
          >
            Login with Google
          </button>
        )}
        {user && (
          <button
            type="button"
            className="border-2 border-orange-300 shadow p-2 px-4 bg-orange-200 rounded"
            onClick={onLogout}
          >
            Logout {user.displayName}
          </button>
        )}
      </div>
    </div>
  );
}
