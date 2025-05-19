import type { Metadata } from "next";
import {Josefin_Sans} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title:{
    default: "Transitix | Travel fast Travel safe",
    template : "Transitix | %s"
  },
  description: "Transitix is your reliable ride booking platform, ensuring fast and safe travel experiences. Book your rides with ease and convenience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className="dark">
      <body
        className={`${josefin.className} antialiased min-h-screen`}
      >
        {children}
      </body>

    </html>
    </ClerkProvider>
  );
}
