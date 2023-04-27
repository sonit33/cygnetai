import "./globals.css";
import "katex/dist/katex.min.css";
import { Bitter } from "next/font/google";

export const metadata = {
  title: "Aarya AI",
  description: "AI tutor for all",
};

const serif = Bitter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.className}>
      <body className="max-w-2xl mx-auto">{children}</body>
    </html>
  );
}
