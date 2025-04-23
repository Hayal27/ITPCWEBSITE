import './index.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketLeader from './components/MarkeLeader';
import Footer from './components/Footer';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import OurSerices from './components/OurSerices';
import OurTeam from './components/OurTeam';
import OurWorks from './components/OurWorks';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';


const App: React.FC = () => (
  <>
    <Header />
    <Hero />
    <MarketLeader />
   <WorkingProcess />
    <Testimonials />
    <OurSerices />
    <OurTeam />
    <OurWorks />
    <AboutUs />
    <FAQs />
    <Footer />
  </>
);

export default App;