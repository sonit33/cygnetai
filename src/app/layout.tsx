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
      <body className="max-w-lg mx-auto border shadow-sm p-4 mt-4">{children}</body>
    </html>
  );
}
