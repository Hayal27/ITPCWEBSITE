import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from '../Footer';
import ParticleBackground from '../ParticleBackground';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="main-layout bg-transparent">
  <Header />
  <div className="main-content bg-transparent" tabIndex={-1}>
    {children}
  </div>
  <Footer />
</div>
);

export default MainLayout;