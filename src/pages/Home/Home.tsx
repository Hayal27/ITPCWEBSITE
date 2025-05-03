import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import WorkingProcess from '../../components/WorkingProcess';
import Testimonials from '../../components/Testimonials';
import Investment from '../../components/Investment';
import OurWorks from '../../components/OurWorks';
import FAQs from '../../components/FAQs';
import './Home.css';
import IncubationCard from '../../components/IncubationCard';
import LiveChatWidget from '../../components/LiveChatWidget';
import Service from '../../components/Service';

const Home: React.FC = () => {
  return (
    <main className="home-page">
      {/* Hero Section - First Impression */}
      <section id="hero" className="hero-section">
        <div className="section-container">
          <Hero />
        </div>
      </section>

      {/* About Section - Company Introduction */}
      <section id="about" className="about-section section-padding">
        <div className="section-container">
          <AboutUs />
        </div>
      </section>

      {/* Services Section - What We Offer */}
      <section id="services" className="services-section section-padding bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2>Our <span className="brand-highlight">Services</span></h2>
            <p>Comprehensive solutions tailored to meet Ethiopia's growing tech needs</p>
          </div>
          <Service />
        </div>
      </section>

      {/* Incubation Section - Special Program Highlight */}
      <section id="incubation" className="incubation-section section-padding">
        <div className="section-container">
          <IncubationCard />
        </div>
      </section>

      {/* Process Section - How We Work */}
      <section id="process" className="process-section section-padding bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2>Our <span className="brand-accent">Process</span></h2>
            <p> A structured, end-to-end process that transforms ideas into impactful solutions across Ethiopia's digital economy.</p>
          </div>
          <WorkingProcess />
        </div>
      </section>

      {/* Portfolio Section - Our Work */}
      <section id="portfolio" className="portfolio-section section-padding">
        <div className="section-container">
          <div className="section-header">
            <h2>Our <span className="brand-highlight">Portfolio</span></h2>
            <p>Explore our successful projects and case studies in Ethiopia's tech landscape</p>
          </div>
          <OurWorks />
        </div>
      </section>

      {/* Team Section - Who We Are */}
      <section id="team" className="team-section section-padding bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2>Our <span className="brand-highlight">Team</span></h2>
            <p>Meet the talented professionals driving Ethiopia's tech innovation</p>
          </div>
          {/* You should create and use a dedicated Team component here */}
          {/* <TeamMembers /> */}
        </div>
      </section>

      {/* Testimonials Section - Client Feedback */}
      <section id="testimonials" className="testimonials-section section-padding">
        <div className="section-container">
          <div className="section-header">
            <h2>Client <span className="brand-accent">Testimonials</span></h2>
            <p>What our partners say about working with Ethiopia's leading tech hub</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Investment Section - Partnership Opportunities */}
      <section id="investment" className="investment-section section-padding bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2>Investment <span className="brand-highlight">Opportunities</span></h2>
            <p>Explore collaborative ventures in Ethiopia's burgeoning tech sector</p>
          </div>
          <Investment />
        </div>
      </section>

      {/* FAQ Section - Common Questions */}
      <section id="faq" className="faq-section section-padding">
        <div className="section-container">
          <div className="section-header">
            <h2>Frequently Asked <span className="brand-highlight">Questions</span></h2>
            <p>Find answers to common questions about our services and Ethiopia's tech ecosystem</p>
          </div>
          <FAQs />
        </div>
      </section>

      <LiveChatWidget
        bgMode="auto"
        infoText="Need help? Chat with us!"
        avatarUrl="/assets/images/hero-client-image.jpg"
        chatLink="/contact"
      />
    </main>
  );
};

export default Home;