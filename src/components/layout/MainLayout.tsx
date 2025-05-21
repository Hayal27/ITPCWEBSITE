import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    {/* Header (Top Bar + Main Header) */}
    <Header />
    {/* Main content: always visible, never overlapped */}
    <main className="flex-1 w-full max-w-full mx-auto py-4">
      {children}
    </main>
    {/* Footer */}
    <Footer />
  </div>
);

export default MainLayout;