
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integr(AI)te",
  description: "Secrets and API Management Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/secrets" style={{ marginRight: '10px' }}>Secrets Dashboard</a>
          <a href="/endpoints" style={{ marginRight: '10px' }}>Endpoints Dashboard</a>
          <a href="/logs" style={{ marginRight: '10px' }}>Logs Viewer</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
