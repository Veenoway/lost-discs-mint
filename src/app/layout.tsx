import { Header } from "@/layouts/header";
import ContextProvider from "@/lib/wagmi/provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const poppins = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lost Discs | Mint",
  description: "Mint your Lost Discs NFTs from Monshape on Monad testnet.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get("cookie");
  return (
    <html lang="en-US">
      <body className={`${poppins} `}>
        {/* <Analytics /> */}
        <ContextProvider cookies={cookies}>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
