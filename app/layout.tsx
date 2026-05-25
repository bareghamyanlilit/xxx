import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Վահան և Միլա",
  description: "Վահան և Միլա",
  openGraph: {
    title: "Վահանի և Միլայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://site-up-l012.vercel.app",
    siteName: "Վահան և Միլա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      className="bgC"
      >
        {children}
      </body>
    </html>
  );
}
