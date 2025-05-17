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
import connectorImg from '/images/connector.png';
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
    description: 'Rent modern office spaces with utilities.',
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
      'Sub-lease serviced land with basic utilities.',
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
      'Reliable, remote, and scalable internet.',
    details: [
      'Dedicated and shared VSAT bandwidth provisioning',
      'Remote site connectivity for rural and off-grid areas',
      'High-availability service with SLAs and 24/7 support',
      'Integration with existing network & surveillance infrastructure',
    ],
    Icon: SatelliteDish,
    image: telecomImg,
  },
  {
    title: 'Consulting & IT Services',
    description:
      'Agile project management, automation & smart infrastructure consultancy.',
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
      'Business service, software development & IT support.',
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
        const textBlock = img.parentElement?.parentElement?.parentElement?.querySelector('.reveal-text') as HTMLElement | null;
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
    <section className="investment-section">
      <div className="investment-zigzag-container">
        {services.map((svc, idx) => {
          const Icon = svc.Icon;
          return (
            <React.Fragment key={svc.title}>
              <div className={`investment-zigzag-row${idx % 2 === 1 ? ' reverse' : ''}`}>
                <div className="investment-image-block">
                  <div className="investment-image-circle">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="investment-image reveal-image float-anim"
                    />
                  </div>
                </div>
                <div className="investment-content-block">
                  <div className="investment-number">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="investment-title">
                    <span style={{ marginRight: 10, verticalAlign: 'middle' }}>
                      <Icon width={28} height={28} style={{ color: '#92489B', verticalAlign: 'middle' }} />
                    </span>
                    <Link to="/services" className="investment-title-link">
                      {svc.title}
                    </Link>
                  </div>
                  <div className="investment-desc reveal-text">{svc.description}</div>
                  <ul className="investment-list">
                    {svc.details.map((detail) => (
                      <li key={detail}>
                        <CheckIcon className="investment-check" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Connector image between blocks, except after last */}
              {idx < services.length - 1 && (
                <div className={`investment-connector${idx % 2 === 1 ? ' reverse' : ''}`}>
                  <img src={connectorImg} alt="connector" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Investment;