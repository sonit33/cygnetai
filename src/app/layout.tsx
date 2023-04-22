import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Cygnet AI",
  description: "AI tutor for all",
  icons: "/images/favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-xl mx-auto border shadow rounded p-4 mt-4">{children}</body>
    </html>
  );
}
