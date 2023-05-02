"use client";

import { useEffect, useState } from "react";
import SocialButton from "../_reusables/components/login/SocialButton";
import {
  UserInfo,
  getCurrentUser,
  isLoggedIn,
  login,
  logout,
} from "../_reusables/lib/utils/google-auth";

export default function Home() {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (isLoggedIn()) {
      setUser(getCurrentUser());
    }
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto flex flex-col gap-2 items-center justify-center min-h-screen">
      {!user && (
        <>
          <SocialButton
            imageUrl="./images/g-logo.svg"
            label="Continue with Google"
            onClick={async () => {
              await login();
              setUser(getCurrentUser());
            }}
          />
          <SocialButton
            imageUrl="./images/fb-logo.png"
            label="Continue with Facebook"
            onClick={() => console.log("not implemented")}
          />
        </>
      )}
      {user && (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button
            type="button"
            className="border-2 border-gray-200 bg-gray-50 px-6 p-2 rounded shadow"
            onClick={async () => {
              await logout();
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
