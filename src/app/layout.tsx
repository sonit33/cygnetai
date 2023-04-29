import "./globals.css";
import "katex/dist/katex.min.css";
import { Bitter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Aarya AI",
  description: "AI tutor for all",
};

const serif = Bitter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.className}`}>
      <body
        style={{ backgroundImage: `url("./images/bg-tile.jpg")`, backgroundRepeat: "repeat" }}
        className="max-w-2xl mx-auto"
      >
        {children}
      </body>
    </html>
  );
}
