import type { Metadata } from "next";
import { fontMain } from '@/helpers/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "The Useless Web Clone",
  description: "The Useless Web Button... take me somewhere... useless. The perfect button for the bored, or those looking to find random sites online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMain.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
