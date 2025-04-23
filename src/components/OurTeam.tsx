import React from 'react';

interface Member {
  img: string;
  name: string;
  role: string;
}

const team: Member[] = [
  { img: '/assets/images/team-1.jpg', name: 'Sophia Mitchell', role: 'Creative Director' },
  { img: '/assets/images/team-2.jpg', name: 'John Smith', role: 'Marketing Manager' },
  { img: '/assets/images/team-3.jpg', name: 'Emily Johnson', role: 'Software Engineer' },
];

const OurTeam: React.FC = () => (
  <section className="our-team">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">our team</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Meet the minds behind the magic
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/team" className="btn-default">view team</a>
          </div>
        </div>
      </div>
      <div className="row">
        {team.map((m, i) => (
          <div className="col-lg-4 col-md-6" key={i}>
            <div className="team-member-item wow fadeInUp" data-wow-delay={`${i * 0.25}s`}>
              <div className="team-image">
                <a href="/team-single" data-cursor-text="View">
                  <figure><img src={m.img} alt={m.name} /></figure>
                </a>
              </div>
              <div className="team-social-list">
                <div className="team-social-link">
                  <a href="#"><i className="fa-solid fa-share-nodes" /></a>
                </div>
                <div className="team-social-icon">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeam;