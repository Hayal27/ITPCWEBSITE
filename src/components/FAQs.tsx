import React from 'react';
import '../assets/images/faqs-image.png';
interface FAQ {
  question: string;
  answer: string;
  id: number;
}

const items: FAQ[] = [
  { id: 1, question: 'What services do you offer?', answer: 'We provide a comprehensive range of services, including branding, digital marketing, web and graphic design, and content creation.' },
  { id: 2, question: 'How do you approach a new project?', answer: 'We begin with discovery and research, then strategy, design, development, and launch.' },
  { id: 3, question: 'What is the typical timeline for a project?', answer: 'Most projects take 4–8 weeks depending on scope and complexity.' },
  { id: 4, question: 'Will I be involved in the creative process?', answer: 'Absolutely—your feedback is critical at every stage.' },
];

const FAQs: React.FC = () => (
  <section className="our-faqs">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="our-faqs-image">
            <img src="/src/assets/images/faqs-image.png" alt="FAQs" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="our-faqs-content">
            <div className="section-title">
              <h3 className="wow fadeInUp">FAQs</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">Frequently asked questions</h2>
            </div>
            <div className="accordion faq-accordion" id="faqaccordion">
              {items.map((faq, i) => (
                <div className="accordion-item wow fadeInUp" data-wow-delay={`${i * 0.2}s`} key={faq.id}>
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded={i === 0}
                      aria-controls={`collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQs;