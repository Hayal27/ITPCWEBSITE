import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import WorkingProcess from '../../components/WorkingProcess';
import Testimonials from '../../components/Testimonials';
import OurServices from '../../components/OurSerices';
import OurTeam from '../../components/OurTeam';
import OurWorks from '../../components/OurWorks';
import FAQs from '../../components/FAQs';

const Home: React.FC = () => {
  return (
    <main className="home-page">
      {/* Hero Section - First Impression */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* About Section - Company Introduction */}
      <section className="about-section">
        <AboutUs />
      </section>

      {/* Services Section - What We Offer */}
      <section className="services-section">
        <OurServices />
      </section>

      {/* Process Section - How We Work */}
      <section className="process-section">
        <WorkingProcess />
      </section>

      {/* Portfolio Section - Our Work */}
      <section className="portfolio-section">
        <OurWorks />
      </section>

      {/* Team Section - Who We Are */}
      <section className="team-section">
        <OurTeam />
      </section>

      {/* Testimonials Section - Client Feedback */}
      <section className="testimonials-section">
        <Testimonials />
      </section>

      {/* FAQ Section - Common Questions */}
      <section className="faq-section">
        <FAQs />
      </section>
    </main>
  );
};

export default Home; 