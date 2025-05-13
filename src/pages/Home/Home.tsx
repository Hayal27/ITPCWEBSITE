import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import WorkingProcess from '../../components/WorkingProcess';
// import Testimonials from '../../components/Testimonials';
import Investment from '../../components/Investment';
import FAQs from '../../components/FAQs';
import './Home.css';
import IncubationCard from '../../components/IncubationCard';
import LiveChatWidget from '../../components/LiveChatWidget';
import Service from '../../components/Service';
import NewsEventsHighlights from '../../components/NewsEventsHighlights';

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

      {/* News & Events Highlights Section */}
      <section id="news-events" className="news-events-highlights-section section-padding bg-neutral">
        <div className="section-container">
          <div className="section-header">
            <h2>
              Latest <span className="text-primary-default">News & Events</span>
            </h2>
            <p className="text-primary-dark">
              Stay up to date with the latest happenings, announcements, and opportunities at Ethiopian IT Park.
            </p>
          </div>
          <NewsEventsHighlights />
          <div className="text-center mt-6">
            <a
              href="/resources/digital/news"
              className="inline-block px-6 py-2 rounded-lg bg-primary-default text-white font-semibold shadow hover:bg-primary-dark transition"
            >
              View All News & Events
            </a>
          </div>
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
        avatarUrl="/src/assets/images/hero-client-image.jpg"
        chatLink="/contact"
      />
    </main>
  );
};

export default Home;