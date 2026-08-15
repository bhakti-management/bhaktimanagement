import Script from "next/script";
import React from 'react';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL("https://bhaktimanagement.com"),

  title: {
    default: "Bhakti Management Services",
    template: "%s | Bhakti Management Services",
  },

  description:
    "Leading manpower outsourcing, contract staffing, payroll management and recruitment company in Gujarat since 1998.",

  keywords: [
    "Manpower Services",
    "Contract Staffing",
    "Payroll Services",
    "Recruitment Company Gujarat",
    "Industrial Staffing",
    "Temporary Staffing",
    "Bhakti Management Services",
  ],

  alternates: {
    canonical: "https://bhaktimanagement.com",
  },

  openGraph: {
    title: "...",
    description: "...",
    url: "https://bhaktimanagement.com",
    siteName: "Bhakti Management Services",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}