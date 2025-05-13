import React from 'react';

interface Testimonial {
  starsImg: string;
  quoteImg: string;
  text: string;
  authorImg: string;
  name: string;
  company: string;
}

const data: Testimonial[] = [
  {
    starsImg: '/src/assets/images/icon-star.svg',
    quoteImg: '/src/assets/images/testimonial-quote.svg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    authorImg: '/src/assets/images/author-1.jpg',
    name: 'Emily Carter',
    company: 'Creative Solutions Co.'
  },
  {
    starsImg: '/src/assets/images/icon-star.svg',
    quoteImg: '/src/assets/images/testimonial-quote.svg',
    text: 'Their data-driven approach helped us reach our target audience.',
    authorImg: '/src/assets/images/author-2.jpg',
    name: 'Mark Thompson',
    company: 'Tech Innovations Inc.'
  },
  {
    starsImg: '/src/assets/images/icon-star.svg',
    quoteImg: '/src/assets/images/testimonial-quote.svg',
    text: 'Highly recommend! They significantly increased our leads.',
    authorImg: '/src/assets/images/author-3.jpg',
    name: 'Laura Chen',
    company: 'Trendy Boutique'
  }
];

const Testimonials: React.FC = () => (
  <section className="our-testimonials">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">testimonials</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Success stories that speak for themselves
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/contact" className="btn-default">contact now</a>
          </div>
        </div>
      </div>
      <div className="testimonial-slider">
        <div className="swiper">
          <div className="swiper-wrapper">
            {data.map((t, i) => (
              <div className="swiper-slide" key={i}>
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      <img src={t.starsImg} alt="stars" />
                    </div>
                    <div className="testimonial-quote">
                      <img src={t.quoteImg} alt="quote" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>{t.text}</p>
                  </div>
                  <div className="testimonial-body">
                    <div className="author-image image-anime">
                      <img src={t.authorImg} alt={t.name} />
                    </div>
                    <div className="author-content">
                      <h3>{t.name}</h3>
                      <p>{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;