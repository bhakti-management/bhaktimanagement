import React from 'react';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Bhakti Management Services',
  description: 'Building India\'s Workforce Since 1998',
};

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