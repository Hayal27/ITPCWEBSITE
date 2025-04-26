
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  CloudArrowUpIcon,
  SignalIcon,
  Cog8ToothIcon,
  ServerIcon,
  UsersIcon,
  HeartIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';
import buildingSpaceImg from '../../public/assets/images/BUILDING.jpeg';
import servicedLandImg from '../../public/assets/images/SERVICELAND.jpeg';
import cloudServicesImg from '../../public/assets/images/CLOUDE.jpeg';
import telecomImg from '../../public/assets/images/TELECOM.jpeg';
import consultingImg from '../../public/assets/images/CONSULTING.jpeg';
import dataCenterImg from '../../public/assets/images/DATACENTER.jpeg';
import workspaceImg from '../../public/assets/images/SHARED.jpeg';
import healthImg from '../../public/assets/images/HEALTH.jpeg';
import trainingImg from '../../public/assets/images/EDUCATION.jpeg';
import bpoImg from '../../public/assets/images/BPO.jpeg';
import '../../public/assets/css/Investment.css';

interface Service {
  title: string;
  description: string;
  details: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
}

const services: Service[] = [
  {
    title: 'Building Space',
    description: 'Rent modern office spaces connected with utilities.',
    details: [
      'Flexible lease terms to fit your needs',
      'High-speed fiber internet and VoIP',
      '24/7 secure access and CCTV monitoring',
      'Fully furnished meeting and breakout rooms',
    ],
    Icon: BuildingOffice2Icon,
    image: buildingSpaceImg,
  },
  {
    title: 'Serviced Land',
    description:
      'Sub-lease serviced land plots ready for your ICT development all connected to basic utilities.',
    details: [
      'Levelled and fenced plots',
      'Reliable power and water supply',
      'On-site drainage and waste management',
      'Estate security and perimeter CCTV',
    ],
    Icon: MapPinIcon,
    image: servicedLandImg,
  },
  {
    title: 'Cloud Services',
    description:
      'Cloud infrastructure, software and security solutions. PaaS, cloud storage, cybersecurity, consulting and digital transformation services.',
    details: [
      'Auto-scaling compute and storage',
      'Enterprise-grade firewalls & WAF',
      '99.99% uptime SLA with 24/7 support',
      'Migration planning and cost optimization',
    ],
    Icon: CloudArrowUpIcon,
    image: cloudServicesImg,
  },
  {
    title: 'Telecommunications & Surveillance',
    description:
      'Integration of telecommunications products and surveillance systems.',
    details: [
      'End-to-end VoIP & SIP trunk solutions',
      'Fiber-to-premises and microwave links',
      'IP CCTV install & monitoring stations',
      'Access control and alarm integration',
    ],
    Icon: SignalIcon,
    image: telecomImg,
  },
  {
    title: 'Consulting & IT Services',
    description:
      'Agile project management, AI/ML development and custom IT solutions. ERP implementation, business automation and smart infrastructure consultancy.',
    details: [
      'Agile coaching and Scrum masters',
      'AI/ML prototyping and PoCs',
      'ERP selection, customization & rollout',
      'Process automation & RPA services',
    ],
    Icon: Cog8ToothIcon,
    image: consultingImg,
  },
  {
    title: 'Data Center & Connectivity',
    description:
      'Colocation content delivery networks and carrier-neutral infrastructure.',
    details: [
      'Tier III carrier-neutral facility',
      'Redundant PDUs and diesel generators',
      'Cross-connects to multiple carriers',
      'Global CDN integration and caching',
    ],
    Icon: ServerIcon,
    image: dataCenterImg,
  },
  {
    title: 'Shared Workspace',
    description:
      'Collaborative co-working spaces for startups, tech companies and innovators.',
    details: [
      'Hot-desk, dedicated desk & private suites',
      'Community events and networking',
      'Printer, scanner & mailroom services',
      'Tea/coffee bars and lounge areas',
    ],
    Icon: UsersIcon,
    image: workspaceImg,
  },
  {
    title: 'Health & Digital Health Solutions',
    description:
      'Electronic Medical Records (EMR), cloud-based health solutions and telemedicine services. Remote diagnoses and healthcare financial solutions.',
    details: [
      'HIPAA-compliant EMR systems',
      'Video consultations & tele-triage',
      'Digital billing & claims management',
      'Integration with labs & pharmacies',
    ],
    Icon: HeartIcon,
    image: healthImg,
  },
  {
    title: 'Training & Education',
    description:
      'Cutting-edge training in robotics, AI and emerging technologies. Programs for IT professionals in software development, cloud management and technical support.',
    details: [
      'Hands-on robotics and automation labs',
      'Cloud certification bootcamps',
      'Live AI/ML workshops & hackathons',
      'Mentorship and career placement',
    ],
    Icon: AcademicCapIcon,
    image: trainingImg,
  },
  {
    title: 'Business Process Outsourcing (BPO)',
    description:
      'Call center service, software development and IT support. HR outsourcing, payroll processing and digitalization services.',
    details: [
      'Multilingual call center operations',
      'Custom software dev & QA teams',
      'Payroll, benefits & HR back office',
      'RPA and workflow digitalization',
    ],
    Icon: ChatBubbleLeftRightIcon,
    image: bpoImg,
  },
];

const Investment: React.FC = () => {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('.reveal-image');
    const revealTextAfterImage = () => {
      const windowHeight = window.innerHeight;
      images.forEach((img) => {
        const textBlock = img.parentElement?.querySelector('.reveal-text') as HTMLElement | null;
        const imgTop = img.getBoundingClientRect().top;
        if (imgTop < windowHeight - 150) {
          img.classList.add('active');
          if (textBlock && !textBlock.classList.contains('active')) {
            setTimeout(() => textBlock.classList.add('active'), 500);
          }
        }
      });
    };
    window.addEventListener('scroll', revealTextAfterImage);
    window.addEventListener('load', revealTextAfterImage);
    revealTextAfterImage();
    return () => {
      window.removeEventListener('scroll', revealTextAfterImage);
      window.removeEventListener('load', revealTextAfterImage);
    };
  }, []);

  return (
    <div className="investment-container">
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold mb-16 text-gray-800 relative">
          Our Services
          <span className="block w-16 h-1 bg-clip-text text-transparent bg-gradient-to-r from-[#16284F] to-[#0C7C92] mx-auto mt-3 rounded" />
        </h2>

        {services.map((svc, idx) => {
          const Icon = svc.Icon;
          return (
            <React.Fragment key={svc.title}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {idx % 2 === 0 && (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="rounded-3xl shadow-xl transform transition duration-500 float-anim reveal-image"
                  />
                )}

                <div className="reveal-text">
                  <div className="title-container mb-5 flex items-center">
                    <Icon className="h-10 w-10 text-blue-600 animated-icon mr-3" />
                    <Link
                      to="/services"
                      className="text-2xl font-bold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {svc.title}
                    </Link>
                  </div>
                  <p className="text-base text-gray-700">{svc.description}</p>
                  <ul className="mt-4 space-y-2">
                    {svc.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <CheckIcon className="h-6 w-6 text-green-500 animate-ping flex-shrink-0" />
                        <span className="ml-2 text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {idx % 2 !== 0 && (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="rounded-3xl shadow-xl transform transition duration-500 float-anim reveal-image"
                  />
                )}
              </div>

              {idx < services.length - 1 && (
                <div className="flex justify-center my-12">
                  <div
                    className="w-1 h-24 rounded"
                    style={{
                      background: 'linear-gradient(90deg, #16284F 10%, #0C7C92 50%)',
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Investment;
