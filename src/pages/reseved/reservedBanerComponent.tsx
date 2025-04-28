import React from 'react';

const BannerAreaTwo: React.FC = () => (
  <section className="banner-area-two banner-bg-two" data-background="https://abronal.com/website/img/banner/h2_banner_bg.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content-two">
            <span className="sub-title" data-aos="fade-up" data-aos-delay="0">Abronal Technologies PLC.</span>
            <h2 className="title" data-aos="fade-up" data-aos-delay="300">Your Trusted Software Provider</h2>
            <p data-aos="fade-up" data-aos-delay="500">Abronal helps you to convert your business data into a strategic asset and get top-notch business insights.</p>
            <div className="banner-btn">
              <a href="abronal-services.html" className="btn" data-aos="fade-right" data-aos-delay="700">Our Services</a>
              <a href="https://www.youtube.com/watch?v=aHBBEdIdF08" className="play-btn popup-video" data-aos="fade-left" data-aos-delay="700">
                <i className="fas fa-play"></i> <span>Watch The Video</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-img text-center">
            <img src="website/img/banner/h2_banner_img.png" alt="" data-aos="fade-left" data-aos-delay="400" />
          </div>
        </div>
      </div>
    </div>
    <div className="banner-shape-wrap">
      <img src="website/img/banner/h2_banner_shape01.png" alt="" />
      <img src="website/img/banner/h2_banner_shape02.png" alt="" />
      <img src="website/img/banner/h2_banner_shape03.png" alt="" data-aos="zoom-in-up" data-aos-delay="800" />
    </div>
  </section>
);

export default BannerAreaTwo;