"use client";

import Link from "next/link";
import { UserInfo, isLoggedIn, login, logout } from "./_reusables/lib/utils/google-auth";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<UserInfo | null>(null);

  async function onLogin() {
    const { user } = await login();
    console.log(user);
    setUser(user);
  }

  async function onLogout() {
    await logout();
    setUser(null);
  }

  return (
    <div className="max-w-md mx-auto m-6 flex flex-col">
      <Link href="/chat">Chat</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
