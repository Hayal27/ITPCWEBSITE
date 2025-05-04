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
  <section className="our-works" style={{ background: 'var(--neutral,#f4f4f4)', padding: '0 0 48px 0' }}>
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp" style={{ color: 'var(--primary,#0C7C92)', fontWeight: 700, letterSpacing: 1 }}>our works</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s" style={{ fontWeight: 800, color: 'var(--accent,#16284F)', fontSize: 36, letterSpacing: 0.5 }}>
              Showcasing Ethiopia’s Digital Breakthroughs
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/portfolio" className="btn-default" style={{
              background: 'linear-gradient(90deg, var(--primary,#0C7C92) 0%, var(--secondary,#6EC9C4) 100%)',
              color: '#fff',
              borderRadius: 24,
              padding: '12px 32px',
              fontWeight: 700,
              fontSize: 16,
              boxShadow: '0 2px 12px rgba(22,40,79,0.08)'
            }}>Explore Full Portfolio</a>
          </div>
        </div>
      </div>

      {/* Impact Metrics - modern, icon and title side by side, smaller icon, visible tag */}
      <div className="row align-items-center" style={{ marginBottom: 40 }}>
        {works.slice(0, 5).map((w, i) => (
          <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center" key={i}>
            <div style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 2px 12px rgba(22,40,79,0.07)',
              padding: '14px 10px 10px 10px',
              minWidth: 120,
              minHeight: 80,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              transition: 'box-shadow 0.2s',
              marginBottom: 16,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 6,
                width: '100%',
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, var(--primary,#0C7C92) 60%, var(--secondary,#6EC9C4) 100%)',
                  borderRadius: '50%',
                  width: 28,
                  height: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(22,40,79,0.08)'
                }}>
                  <i
                    className={`fa ${w.icon}`}
                    style={{
                      fontSize: 14,
                      color: '#fff',
                    }}
                    aria-hidden="true"
                  ></i>
                </span>
                <span style={{ color: 'var(--accent,#16284F)', fontWeight: 800, fontSize: 18, lineHeight: 1 }}>{w.title}</span>
              </div>
              <div style={{
                color: '#fff',
                background: 'linear-gradient(90deg, var(--primary,#0C7C92) 0%, var(--secondary,#6EC9C4) 100%)',
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 600,
                padding: '2px 8px',
                display: 'inline-block',
                letterSpacing: 0.2,
                boxShadow: '0 1px 4px rgba(22,40,79,0.06)'
              }}>{w.tag}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Startup Spotlight, Innovation Program, Testimonial, Coming Soon */}
      <div className="row align-items-center">
        {works.slice(5).map((w, i) => {
          // Partners handled separately below
          if (w.isPartner) return null;

          // Coming Soon Callout
          if (w.desc && w.desc.startsWith('More startups')) {
            return (
              <div className="col-12 text-center" key={i + 5}>
                <div className="our-work-item" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, var(--primary,#0C7C92) 0%, var(--secondary,#6EC9C4) 100%)',
                  color: '#fff',
                  borderRadius: 18,
                  padding: '32px 24px',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 32px 0 rgba(22, 40, 79, 0.08)'
                }}>
                  <i
                    className={`fa ${w.icon}`}
                    style={{
                      fontSize: 22,
                      marginRight: 10,
                      color: '#fff',
                      verticalAlign: 'middle'
                    }}
                    aria-hidden="true"
                  ></i>
                  {w.desc}
                </div>
              </div>
            );
          }

          // Testimonial - modern compact card
          if (w.title === 'Testimonial') {
            return (
              <div className="col-lg-6 col-md-8 col-12 mx-auto" key={i + 5}>
                <div className="our-work-item" style={{
                  background: '#fff',
                  borderRadius: 18,
                  padding: 24,
                  boxShadow: '0 2px 12px rgba(22,40,79,0.07)',
                  marginBottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 120
                }}>
                  <blockquote style={{
                    fontStyle: 'italic',
                    color: 'var(--accent,#16284F)',
                    textAlign: 'center',
                    fontSize: 16,
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: 0.1
                  }}>
                    <span style={{
                      display: 'inline-block',
                      background: 'linear-gradient(90deg, var(--primary,#0C7C92) 0%, var(--secondary,#6EC9C4) 100%)',
                      color: '#fff',
                      borderRadius: 8,
                      padding: '6px 14px',
                      fontWeight: 600,
                      marginBottom: 8,
                      fontSize: 14,
                      marginRight: 8
                    }}>Testimonial</span>
                    {w.desc}
                    <footer style={{
                      marginTop: 10,
                      color: 'var(--primary,#0C7C92)',
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: 0.1
                    }}>— {w.tag}</footer>
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
              <div className={`our-work-item work-box${w.highlighted ? ' work-highlighted-box' : ''} text-center`} style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 2px 12px rgba(22,40,79,0.07)',
                marginBottom: 24,
                padding: '24px 12px'
              }}>
                {w.img && (
                  <div className="work-item-image" style={w.highlighted ? {
                    background: 'none',
                    aspectRatio: '1/1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    maxWidth: 120
                  } : {}}>
                    <img src={w.img} alt={w.title} style={w.highlighted ? {
                      maxHeight: 64,
                      maxWidth: 120,
                      objectFit: 'contain',
                      margin: '0 auto'
                    } : {}} />
                  </div>
                )}
                <div className="work-item-body wow fadeInUp" data-wow-delay="0.5s">
                  <div className="work-item-title">
                    <h3 style={{ fontWeight: 700, color: 'var(--accent,#16284F)', fontSize: 20 }}>{w.title}</h3>
                  </div>
                  <div className="work-item-tags">
                    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                      <li style={{
                        display: 'inline-block',
                        background: 'linear-gradient(90deg, var(--primary,#0C7C92) 0%, var(--secondary,#6EC9C4) 100%)',
                        color: '#fff',
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        padding: '2px 10px',
                        marginTop: 6,
                        letterSpacing: 0.2
                      }}>{w.tag}</li>
                    </ul>
                  </div>
                </div>
                <div className="work-item-content wow fadeInUp" data-wow-delay="0.5s">
                  <p style={{ color: 'var(--text-color,#2D3748)', fontSize: 15, marginTop: 10 }}>{w.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partners Row */}
      <div className="row section-row justify-content-center" style={{ marginBottom: 40 }}>
        <div className="col-12">
          <h3 className="wow fadeInUp" style={{ fontWeight: 700, marginBottom: 24, textAlign: 'center', color: 'var(--primary,#0C7C92)' }}>Partners & Collaborators</h3>
        </div>
        {partnerItems.map((p, i) => (
          <div className="col-lg-2 col-md-3 col-6 d-flex flex-column align-items-center mb-4" key={i}>
            <div style={{
              background: '#fff',
              borderRadius: '50%',
              boxShadow: '0 2px 12px rgba(22,40,79,0.08)',
              width: 90,
              height: 90,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 12,
            }}>
              <img src={p.img} alt={p.title} style={{ maxHeight: 60, maxWidth: 60, objectFit: 'contain' }} />
            </div>
            <div style={{ color: 'var(--accent,#16284F)', fontWeight: 700, fontSize: 15, textAlign: 'center' }}>{p.title}</div>
            <div style={{ color: 'var(--primary,#0C7C92)', fontSize: 13, textAlign: 'center' }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurWorks;