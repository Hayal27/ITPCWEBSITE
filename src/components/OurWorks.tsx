import React from 'react';

interface WorkItem {
  img: string;
  title: string;
  tag: string;
  desc: string;
  highlighted?: boolean;
}

const works: WorkItem[] = [
  { img: '/src/assets/images/portfolio-img-1.jpg', title: 'brand transformation', tag: 'marketing', desc: 'Revamped the brand identity of XYZ Company…' },
  { img: '/src/assets/images/portfolio-img-2.jpg', title: 'E-commerce Website', tag: 'branding', desc: 'Transformed ABC Retail\'s online…' },
  { img: '/src/assets/images/portfolio-img-3.jpg', title: 'Digital Marketing', tag: 'web development', desc: 'Executed a comprehensive digital marketing…', highlighted: true },
  { img: '/src/assets/images/portfolio-img-4.jpg', title: 'Content Creation', tag: 'web design', desc: 'Developed engaging content for GHI…' },
  { img: '/src/assets/images/portfolio-img-5.jpg', title: 'social media strategy', tag: 'UI/UX design', desc: 'Focused on content creation, scheduling…' },
];

const OurWorks: React.FC = () => (
  <section className="our-works">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">our works</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Showcasing our creative excellence
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/portfolio" className="btn-default">view all portfolio</a>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        {works.map((w, i) => (
          <div
            className={`col-md-${w.highlighted ? '12' : '6'} ${w.highlighted ? 'mb-4' : ''}`}
            key={i}
          >
            <div className={`our-work-item work-box${w.highlighted ? ' work-highlighted-box' : ''}`}>
              <div className="work-item-image">
                <a href="/portfolio-single" data-cursor-text="View">
                  <figure className="image-anime reveal">
                    <img src={w.img} alt={w.title} />
                  </figure>
                </a>
                <div className="work-readmore-btn">
                  <a href="/portfolio-single">
                    <img src="/src/assets/images/icon-plus.svg" alt="View" />
                  </a>
                </div>
              </div>
              <div className="work-item-body wow fadeInUp" data-wow-delay="0.5s">
                <div className="work-item-title">
                  <h3>{w.title}</h3>
                </div>
                <div className="work-item-tags">
                  <ul><li>{w.tag}</li></ul>
                </div>
              </div>
              <div className="work-item-content wow fadeInUp" data-wow-delay="0.5s">
                <p>{w.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurWorks;