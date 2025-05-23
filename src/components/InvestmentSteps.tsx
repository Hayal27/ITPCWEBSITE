import React from 'react';
import '../assets/css/investmentSteps.css';

const steps = [
  { title: 'Eligibility Check', desc: 'Review criteria such as sector focus, investment size, and partnership requirements to ensure alignment with park regulations.' },
  { title: 'Application Lettrer Submission', desc: 'Submit completed application forms, feasibility studies, ' },
  { title: 'Business(Investment License)', desc: 'provide business license and other necessary permits from park authorities.' },
  { title: 'Approved Proposal by Information technology park', desc: 'Approve your proposal and receive a formal acceptance letter from the information technology park.' },
  { title: 'Site Evaluation', desc: 'Our team conducts a site visit to assess infrastructure, utilities, and suitability for your planned operations.' },
  { title: 'Agreement Signing', desc: 'Negotiate and sign lease agreements, investment contracts, and incentives packages with park authorities.' },
  { title: 'Infrastructure Setup', desc: 'Develop office spaces, labs, and install IT infrastructure with assistance from park-approved contractors.' },
  { title: 'Operations Launch', desc: 'Obtain necessary permits, hire staff, and commence operations with ongoing administrative support.' },
  { title: 'Expansion & Support', desc: 'Scale your operations with additional incentives, business development services, and networking opportunities.' },
];

const InvestmentSteps = () => (
  <section className="investment-steps working-process py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="section-title">
            <h3 className="title wow fadeInUp text-primary-default">Steps to Invest</h3>
            <h2 className="title wow fadeInUp" data-wow-delay="0.25s">
              Steps to Investing in Ethiopian and Addmition Requirement
            </h2>
          </div>
        </div>
        <div className="lg:w-1/2 flex lg:justify-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/contact" className="btn-default">Get Started</a>
          </div>
        </div>
      </div>
      <div
        className="
          grid
          gap-8
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          3xl:grid-cols-4
          4xl:grid-cols-5
          5xl:grid-cols-6
        "
      >
        {steps.map((step, i) => (
          <div className="custome-css" key={i}>
            <div
              className="working-process-step wow fadeInUp"
              data-wow-delay={`${i * 0.25}s`}
            >
              <div className="working-process-header flex items-center">
                <div className="working-process-no me-3">
                  <p style={{ color: 'black' }}>{i + 1}</p>
                </div>
                <div className="working-process-title">
                  <h3>{step.title}</h3>
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

export default InvestmentSteps;