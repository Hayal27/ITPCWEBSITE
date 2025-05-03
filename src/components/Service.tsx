import React from 'react';
import { Link } from 'react-router-dom';
import BuildingOffice2Icon from '@heroicons/react/24/solid/BuildingOffice2Icon';
import CloudArrowUpIcon from '@heroicons/react/24/solid/CloudArrowUpIcon';
import ServerIcon from '@heroicons/react/24/solid/ServerIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import HeartIcon from '@heroicons/react/24/solid/HeartIcon';
import AcademicCapIcon from '@heroicons/react/24/solid/AcademicCapIcon';
import buildingSpaceImg from '../../public/assets/images/BUILDING.jpeg';
import cloudServicesImg from '../../public/assets/images/CLOUDE.jpeg';
import dataCenterImg from '../../public/assets/images/DATACENTER.jpeg';
import workspaceImg from '../../public/assets/images/SHARED.jpeg';
import healthImg from '../../public/assets/images/HEALTH.jpeg';
import trainingImg from '../../public/assets/images/EDUCATION.jpeg';
import '../styles/Service.css';

interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
}

const services: Service[] = [
  {
    title: 'Building Space',
    description: 'Rent modern office spaces connected with utilities.',
    Icon: BuildingOffice2Icon,
    image: buildingSpaceImg,
  },
  {
    title: 'Cloud Services',
    description: 'Cloud infrastructure, software and security solutions.',
    Icon: CloudArrowUpIcon,
    image: cloudServicesImg,
  },
  {
    title: 'Data Center & Connectivity',
    description: 'Colocation content delivery networks and carrier-neutral infrastructure.',
    Icon: ServerIcon,
    image: dataCenterImg,
  },
  {
    title: 'Shared Workspace',
    description: 'Collaborative co-working spaces for startups and tech companies.',
    Icon: UsersIcon,
    image: workspaceImg,
  },
  {
    title: 'Health & Digital Health Solutions',
    description: 'Electronic Medical Records and telemedicine services.',
    Icon: HeartIcon,
    image: healthImg,
  },
  {
    title: 'Training & Education',
    description: 'Cutting-edge training in robotics, AI and emerging technologies.',
    Icon: AcademicCapIcon,
    image: trainingImg,
  },
];

const Service: React.FC = () => {
  return (
    <div className="service-grid">
      {services.map((service) => {
        const Icon = service.Icon;
        return (
          <div key={service.title} className="service-card">
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-icon">
                <Icon className="h-8 w-8" />
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">
                <Link to="/services" className="hover:text-[#0C7C92] transition-colors">
                  {service.title}
                </Link>
              </h3>
              <p className="service-description">{service.description}</p>
              <Link
                to="/services"
                className="service-link"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;