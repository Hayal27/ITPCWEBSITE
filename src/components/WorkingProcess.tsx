import React from 'react';

const steps = [
  { title: 'research', desc: 'Research needs and trends for informed decisions.' },
  { title: 'planning', desc: 'Planning actions to achieve business goals.' },
  { title: 'development', desc: 'Enhance offerings based on feedback and innovation.' },
  { title: 'launch', desc: 'Introduce products/services with a strategic rollout.' },
];

const WorkingProcess: React.FC = () => (
  <section className="working-process">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">how it works</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              Collaborative journey from concept to execute
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/contact" className="btn-default">contact us</a>
          </div>
        </div>
      </div>
      <div className="row">
        {steps.map((step, i) => (
          <div className="col-lg-3 col-md-6" key={i}>
            <div className="working-process-step wow fadeInUp" data-wow-delay={`${i * 0.25}s`}>
              <div className="working-process-header">
                <div className="working-process-title">
                  <h3>{step.title}</h3>
                </div>
                <div className="working-process-no">
                  <p>{i + 1}</p>
                </div>
              </div>
              <div className="working-process-content">
                <p>{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkingProcess;