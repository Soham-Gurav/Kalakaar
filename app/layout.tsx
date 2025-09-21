import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata = {
  title: "Kalakaar",
  description: "Helping local artisans sell online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  className={`${pixelFont.variable} bg-[var(--color-bg)] text-[var(--color-text)] transition-colors`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
