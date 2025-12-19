import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { Providers } from "./providers";

// Ładujemy Space Grotesk jako główny font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tymon Jezionek | Inżynieria Biznesu",
  description: "Internal Ops & High-Performance Frontends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={spaceGrotesk.className}
        style={{
         backgroundColor: '#0A0A0A'

        }}
      >
        <Navbar />
        <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-black text-white">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}