import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DTI SAU Calculator Variety",
  description: "เว็บรวบรวมเครื่องมือในการคำนวณต่างๆ...",
  keywords: [
    "DTI",
    "SAU",
    "Calculator",
    "Variety",
    "เว็บรวบรวท",
    "คำนวณ",
    "ต่างๆ",
    "เครื่องมือ",
  ],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ name: "DTI SAU Team", url: "https://github.com/limouzeen" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
