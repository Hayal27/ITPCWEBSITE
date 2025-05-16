
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@heroicons/react/24/solid/CheckIcon';
import BuildingOffice2Icon from '@heroicons/react/24/solid/BuildingOffice2Icon';
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon';
import Cog8ToothIcon from '@heroicons/react/24/solid/Cog8ToothIcon';
import ChatBubbleLeftRightIcon from '@heroicons/react/24/solid/ChatBubbleLeftRightIcon';
import buildingSpaceImg from '/images/BUILDING.jpeg';
import servicedLandImg from '/images/SERVICELAND.jpeg';
import telecomImg from '/images/TELECOM.jpeg';
import consultingImg from '/images/CONSULTING.jpeg';
import bpoImg from '/images/BPO.jpeg';
import '../assets/css/Investment.css';
import { SatelliteDish } from 'lucide-react';

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
    title: 'VSAT Internet Solutions',
    description:
      'Reliable, remote, and scalable internet connectivity through satellite-based VSAT systems.',
    details: [
      'Dedicated and shared VSAT bandwidth provisioning',
      'Remote site connectivity for rural and off-grid areas',
      'High-availability service with SLAs and 24/7 support',
      'Integration with existing network and surveillance infrastructure',
    ],
    Icon: SatelliteDish,
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
