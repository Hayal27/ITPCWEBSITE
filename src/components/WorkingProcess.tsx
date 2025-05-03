import React from 'react';

const steps = [
  {
    title: 'Ideation',
    desc: 'We nurture bold ideas through collaboration, market research, and ecosystem insights to identify real-world tech challenges and opportunities.',
  },
  {
    title: 'Validation',
    desc: 'Concepts are tested through stakeholder feedback, feasibility studies, and early prototyping to ensure relevance and sustainability.',
  },
  {
    title: 'Planning',
    desc: 'We define clear objectives, align resources, and create agile roadmaps that guide project execution from start to scale.',
  },
  {
    title: 'Development',
    desc: 'Our resident experts, startups, and partners collaborate to build solutions using modern technologies and continuous innovation practices.',
  },
  {
    title: 'Testing & Improvement',
    desc: 'We rigorously test, refine, and improve through iterations, user feedback, and quality assurance to ensure excellence.',
  },
  {
    title: 'Launch & Acceleration',
    desc: 'Solutions are launched with strategic support — from investment readiness to marketing and global scaling — powered by IT Park infrastructure.',
  },
  {
    title: 'Growth & Impact',
    desc: 'We support ongoing growth, monitor impact, and facilitate expansion across Ethiopia and beyond, strengthening the national digital economy.',
  },
];

const WorkingProcess: React.FC = () => (
  <section className="working-process">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">From Idea to Impact at Ethiopian IT Park</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
            Collaborative journey towards Africa’s Innovation Pulse
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