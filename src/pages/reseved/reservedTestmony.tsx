import React, { useCallback } from 'react'; 
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Row, Col } from 'react-bootstrap';
import './TestimonialAreaFive.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Abronal Technologies has been an invaluable partner to our company. Their dedication to providing continuous support and custom solutions is exceptional.',
    author: 'Dr. Dereje Tekalgn',
    role: 'CEO, Infolink University College',
    avatar: '/assets/img/images/testi_avatar1.png',
  },
  {
    quote:
      'I’ve worked with numerous technology providers, but Abronal Technologies stands out. Their in-house products are innovative, reliable, and backed by outstanding support.',
    author: 'Dr. Mubarek Hussien',
    role: 'CEO, New York Internal Medicine Specialty',
    avatar: '/assets/img/images/testi_avatar2.png',
  },
];

const TestimonialAreaFive: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="testimonial-area-five position-relative overflow-hidden">
      
      {/* Particles inside the testimonial area */}
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false }, // Not full page, only inside section
            fpsLimit: 60,
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: { min: 1, max: 3 },
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
              links: {
                enable: false,
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Testimonial content */}
      <Container className="position-relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className="text-center mb-5">
            <div className="section-title">
              <span className="sub-title d-block text-uppercase text-primary mb-2">
                Our Testimonials
              </span>
              <h2 className="title">What Our Awesome Customers Say</h2>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="testimonial-item mb-5 p-4 bg-white rounded shadow-sm"
              >
                <div className="rating mb-3 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
                <p className="testimonial-quote font-italic mb-4">“{item.quote}”</p>
                <div className="d-flex align-items-center">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="rounded-circle me-3"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h5 className="mb-0">{item.author}</h5>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialAreaFive;
