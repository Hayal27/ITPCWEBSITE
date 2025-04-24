import './index.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import OurSerices from './components/OurSerices';
import OurTeam from './components/OurTeam';
import OurWorks from './components/OurWorks';
// import AboutUs from './components/abt';
import FAQs from './components/FAQs';


const App: React.FC = () => (
  <>
    <Header />
    <Hero />
    <AboutUs />
   <WorkingProcess />
    <Testimonials />
    <OurSerices />
    <OurTeam />
    <OurWorks />
    
    <FAQs />
    <Footer />
  </>
);

export default App;