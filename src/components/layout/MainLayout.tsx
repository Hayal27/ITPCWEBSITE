import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from '../Footer';
import LiveChatWidget from '../LiveChatWidget';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="main-layout">
    <Header />
    <div className="main-content" tabIndex={-1}>
      {children}
    </div>
    <Footer />
    <LiveChatWidget />
  </div>
);

export default MainLayout;