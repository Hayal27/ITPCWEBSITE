import React from 'react';

interface WorkItem {
  img: string;
  title: string;
  tag: string;
  desc: string;
  highlighted?: boolean;
  icon?: string; // Font Awesome icon class
  isPartner?: boolean;
}

const works: WorkItem[] = [
  // Impact Metrics (with icons)
  { img: '', title: '2', tag: 'Years Active', desc: '', icon: 'fa-calendar-alt' },
  { img: '', title: '1', tag: 'Startups Supported', desc: '', icon: 'fa-rocket' },
  { img: '', title: '10+', tag: 'Jobs Created', desc: '', icon: 'fa-users' },
  { img: '', title: '1', tag: 'Innovations Launched', desc: '', icon: 'fa-lightbulb' },
  { img: '', title: '$0.0M+', tag: 'Investments Attracted', desc: '', icon: 'fa-coins' },

  // Startup Spotlight (highlighted)
  {
    img: '/assets/images/startups/tugza-id.png',
    title: 'Tugza AID Innovation Group',
    tag: 'Innovation | 2024 | First Cohort',
    desc: 'Our very first startup cohort: pioneering digital solutions and innovation at Ethiopian IT Park.',
    highlighted: true,
  },

  // Innovation Program
  {
    img: '',
    title: '2024 Innovation Launchpad',
    tag: 'Innovation Program',
    desc: '1 startup | 100% local founders | Focus: Digital ID & Innovation',
  },

  // Partners (set isPartner: true)
  {
    img: '/assets/images/partners/IE.png',
    title: 'IE Networks',
    tag: 'Partner',
    desc: 'Leading ICT Solutions Provider',
    isPartner: true,
  },
  {
    img: '/assets/images/partners/ws.png',
    title: 'WebSprix',
    tag: 'Partner',
    desc: 'Internet & Cloud Services',
    isPartner: true,
  },
  {
    img: '/assets/images/partners/zergaw.png',
    title: 'Zergaw Cloud',
    tag: 'Partner',
    desc: 'Cloud Infrastructure',
    isPartner: true,
  },
  {
    img: '/assets/images/partners/raxio.png',
    title: 'Raxio',
    tag: 'Partner',
    desc: 'The Data Centre Company',
    isPartner: true,
  },

  // Testimonial
  {
    img: '',
    title: 'Testimonial',
    tag: 'Tugza AID Innovation Group',
    desc: '“Ethiopian IT Park gave us the space and support to turn our idea into a real product.”',
  },

  // Coming Soon Callout (with icon)
  {
    img: '',
    title: '',
    tag: '',
    desc: 'More startups and innovations coming soon. Be part of our journey!',
    icon: 'fa-rocket',
    highlighted: true,
  },
];

const partnerItems = works.filter(w => w.isPartner);

const OurWorks: React.FC = () => (
  <section className="our-works">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">our works</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Showcasing Ethiopia’s Digital Breakthroughs
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/portfolio" className="btn-default">Explore Full Portfolio</a>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="row align-items-center metrics-row">
        {works.slice(0, 5).map((w, i) => (
          <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center" key={i}>
            <div className="metric-card">
              <div className="metric-content">
                <span className="metric-icon">
                  <i className={`fa ${w.icon}`} aria-hidden="true"></i>
                </span>
                <span className="metric-value">{w.title}</span>
              </div>
              <div className="metric-tag">{w.tag}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Startup Spotlight, Innovation Program, Testimonial, Coming Soon */}
      <div className="row align-items-center works-row">
        {works.slice(5).map((w, i) => {
          if (w.isPartner) return null;

          // Coming Soon Callout
          if (w.desc && w.desc.startsWith('More startups')) {
            return (
              <div className="col-12 text-center" key={i + 5}>
                <div className="coming-soon-card">
                  <i className={`fa ${w.icon}`} aria-hidden="true"></i>
                  {w.desc}
                </div>
              </div>
            );
          }

          // Testimonial
          if (w.title === 'Testimonial') {
            return (
              <div className="col-lg-6 col-md-8 col-12 mx-auto" key={i + 5}>
                <div className="testimonial-card">
                  <blockquote>
                    <span className="testimonial-label">Testimonial</span>
                    {w.desc}
                    <footer>— {w.tag}</footer>
                  </blockquote>
                </div>
              </div>
            );
          }

          // Startup Spotlight, Innovation Program
          return (
            <div
              className={`col-md-${w.highlighted ? '12' : '6'} ${w.highlighted ? 'mb-4' : ''}`}
              key={i + 5}
            >
              <div className={`work-card${w.highlighted ? ' highlighted' : ''}`}>
                {w.img && (
                  <div className="work-image">
                    <img src={w.img} alt={w.title} />
                  </div>
                )}
                <div className="work-content">
                  <h3>{w.title}</h3>
                  <div className="work-tags">
                    <span className="work-tag">{w.tag}</span>
                  </div>
                  <p>{w.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partners Row */}
      <div className="row section-row justify-content-center partners-row">
        <div className="col-12">
          <h3 className="wow fadeInUp">Partners & Collaborators</h3>
        </div>
        {partnerItems.map((p, i) => (
          <div className="col-lg-2 col-md-3 col-6 d-flex flex-column align-items-center mb-4" key={i}>
            <div className="partner-logo">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="partner-name">{p.title}</div>
            <div className="partner-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurWorks;