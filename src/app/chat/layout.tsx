"use client";

import RouteGuard from "../_reusables/components/RouteGuard";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <RouteGuard>{children}</RouteGuard>
    </div>
  );
}
