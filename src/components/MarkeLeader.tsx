import React from 'react';

const logos = [
  '/assets/images/market-leader-img-1.svg',
  '/assets/images/market-leader-img-2.svg',
  '/assets/images/market-leader-img-3.svg',
  '/assets/images/market-leader-img-4.svg',
  '/assets/images/market-leader-img-5.svg',
  '/assets/images/market-leader-img-6.svg',
];

const MarketLeader: React.FC = () => (
  <section className="market-leader">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">leaders</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Market leaders use diggy to grow
            </h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="market-leader-images d-flex flex-wrap">
            {logos.map((src, i) => (
              <div className="market-leader-img wow fadeInUp" data-wow-delay={`${i * 0.2}s`} key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MarketLeader;