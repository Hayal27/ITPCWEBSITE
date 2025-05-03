
import React, { useEffect } from 'react';
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBuilding,
  FaHandsHelping,
  FaChalkboardTeacher
} from 'react-icons/fa';
import '../../public/assets/css/AboutUs.css';
import '../../public/assets/images/portfolio-img-1.jpg';
import '../../public/assets/images/author-3.jpg';


const FEATURES = [
  { icon: FaRocket, title: 'Innovation Hub', desc: 'State-of-the-art labs & maker spaces driving next-gen solutions.' },
  { icon: FaLightbulb, title: 'Entrepreneur Support', desc: 'Mentorship, funding channels & incubator programs for startups.' },
  { icon: FaUsers, title: 'Community Events', desc: 'Hackathons, workshops & networking meetups—connect & collaborate.' },
  { icon: FaBuilding, title: 'World-Class Infrastructure', desc: 'High-speed fiber, coworking floors & secure data centers.' },
  { icon: FaHandsHelping, title: 'Public–Private Partnerships', desc: 'Bridging industry & government to accelerate digital growth.' },
  { icon: FaChalkboardTeacher, title: 'Training & Education', desc: 'Certifications, bootcamps & e-learning for all skill levels.' }
];

const AboutUs: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-park">
      <div className="about-wrapper">
        <header className="about-header">
          <h2>We Are</h2>
          <p className="intro">
            Ethiopia’s premier technology Hub – empowering innovators, entrepreneurs, and the community to shape Africa’s digital future.
          </p>

          {/* Paragraph #1 */}
          <div className="image-text-block scroll-animate image-left">
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-1.jpg" alt="Innovation Lab" />
            </div>
            <div className="text-container">
              <p className="about-general">
                Ethiopian IT Park stands at the crossroads of innovation and industry, providing
                a dedicated ecosystem where ideas are nurtured from conception to market-ready
                solutions. With modern facilities tailored for R&D, prototyping, and large-scale
                deployments, the Park bridges the gap between academia, startups, and established
                enterprises.
              </p>
            </div>
          </div>

          {/* Paragraph #2 */}
          <div className="image-text-block scroll-animate image-right">
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-2.jpg" alt="Community Event" />
            </div>
            <div className="text-container">
              <p className="about-general">
                At its heart lies a commitment to collaboration: co-working spaces buzzing with
                diverse talents, regular meetups that spark cross-disciplinary partnerships, and
                mentoring programs that connect seasoned professionals with budding technologists.
                This synergy fuels novel applications in AI, IoT, renewable energy, and beyond.
              </p>
            </div>
          </div>

          {/* Paragraph #3 */}
          <div className="image-text-block scroll-animate image-left">
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-3.jpg" alt="Training Session" />
            </div>
            <div className="text-container">
              <p className="about-general">
                Beyond infrastructure, Ethiopian IT Park invests in talent development through
                workshops, certification programs, and direct industry placements, ensuring
                graduates and innovators alike are equipped to drive both national and continental
                digital transformation. Join us in building the future of technology in Africa.
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default AboutUs;
