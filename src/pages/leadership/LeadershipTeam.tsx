import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import './LeadershipTeam.css';

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  git?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  img?: string;
  description?: string;
  social?: SocialLinks;
  children?: TeamMember[];
}

const leadershipData: TeamMember[] = [
  {
    id: '1',
    name: 'Henok Ahmed Ali',
    role: 'CEO',
    img: 'https://randomuser.me/api/portraits/men/10.jpg',
    description: 'Leading our organization with vision and dedication.',
    social: {
      twitter: 'https://twitter.com/henokali',
      linkedin: 'https://linkedin.com/in/henokali',
      facebook: 'https://facebook.com/henokali',
    },
    children: [
      {
        id: '1.1',
        name: 'Woyzero Senayt',
        role: 'General Manager',
        img: 'https://randomuser.me/api/portraits/women/20.jpg',
        description: 'Overseeing operations and strategy execution.',
        social: {
          twitter: 'https://twitter.com/henokali',
          linkedin: 'https://linkedin.com/in/henokali',
          facebook: 'https://facebook.com/henokali',
        },
        children: [
          {
            id: '1.1.1',
            name: 'Weyzero Habtam',
            role: 'Accounting and Finance',
            img: 'https://randomuser.me/api/portraits/women/30.jpg',
            description: 'Managing budgets and financial reporting.',
            social: {
              twitter: 'https://twitter.com/henokali',
              linkedin: 'https://linkedin.com/in/henokali',
              facebook: 'https://facebook.com/henokali',
            },
            children: [
              {
                id: '1.1.1.1',
                name: 'Ato Yosef Kinfe',
                role: 'HR',
                img: 'https://randomuser.me/api/portraits/men/40.jpg',
                description: 'Driving talent acquisition and engagement.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
            ],
          },
          {
            id: '1.1.2',
            name: 'Ass. Prof. Simegn',
            role: 'IT Deputy Manager',
            img: 'https://randomuser.me/api/portraits/women/50.jpg',
            description: 'Supporting IT infrastructure and innovation.',
            social: {
              linkedin: 'https://linkedin.com/in/simegnit',
            },
            children: [
              {
                id: '1.1.2.1',
                name: 'Woyzero Nebyat Gebretsadik',
                role: 'IT Service Head',
                img: 'https://randomuser.me/api/portraits/women/60.jpg',
                description: 'Ensuring smooth IT service delivery.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
              {
                id: '1.1.2.2',
                name: 'Ato Merso Gobena',
                role: 'Incubation and Innovation',
                img: 'https://randomuser.me/api/portraits/men/70.jpg',
                description: 'Driving new product incubation.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
              {
                id: '1.1.2.3',
                name: 'Woyzero Eskedar Teshager',
                role: 'Investment and Follow-up',
                img: 'https://randomuser.me/api/portraits/women/80.jpg',
                description: 'Managing investments and project follow-ups.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
            ],
          },
          {
            id: '1.1.3',
            name: 'Ato Ermiyas Ketema',
            role: 'Construction Deputy Manager',
            img: 'https://randomuser.me/api/portraits/men/90.jpg',
            description: 'Coordinating construction projects.',
            social: {
              twitter: 'https://twitter.com/henokali',
              linkedin: 'https://linkedin.com/in/henokali',
              facebook: 'https://facebook.com/henokali',
            },
            children: [
              {
                id: '1.1.3.1',
                name: 'Ato Walelgn Walelgn',
                role: 'Building Follow-up',
                img: 'https://randomuser.me/api/portraits/men/15.jpg',
                description: 'Monitoring building progress.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
              {
                id: '1.1.3.2',
                name: 'Ato Ermiyas Ketema',
                role: 'Land and Infrastructure',
                img: 'https://randomuser.me/api/portraits/men/16.jpg',
                description: 'Managing land acquisition and site prep.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
              {
                id: '1.1.3.3',
                name: 'Ato Desta Desta',
                role: 'Facility and Maintenance',
                img: 'https://randomuser.me/api/portraits/men/17.jpg',
                description: 'Ensuring facilities run smoothly.',
                social: {
                  twitter: 'https://twitter.com/henokali',
                  linkedin: 'https://linkedin.com/in/henokali',
                  facebook: 'https://facebook.com/henokali',
                },
              },
            ],
          },
        ],
      },
      {
        id: '1.2',
        name: 'Ato Fetene',
        role: 'Business Development',
        img: 'https://randomuser.me/api/portraits/men/18.jpg',
        description: 'Expanding partnerships and markets.',
        social: {
          twitter: 'https://twitter.com/henokali',
          linkedin: 'https://linkedin.com/in/henokali',
          facebook: 'https://facebook.com/henokali',
        },
      },
    ],
  },
];

const developerData: TeamMember[] = [
  {
    id: '2.1',
    name: 'Hayal Tamrat',
    role: 'Senior Software Engineer @ Ethiopian IT Park',
    img: 'https://randomuser.me/api/portraits/men/19.jpg',
    description: 'Fullstack Engineer and Machine Learning Engineer',
    social: {
      twitter: 'https://twitter.com/henokali',
      linkedin: 'https://linkedin.com/in/henokali',
      facebook: 'https://facebook.com/henokali',
      git: 'https://git.com/henokali',
    },
  },
  {
    id: '2.2',
    name: 'Yesuf Fenta',
    role: 'Senior Software Engineer and Incubator @ Ethiopian IT Park',
    img: 'https://randomuser.me/api/portraits/men/20.jpg',
    description: 'Fullstack Engineer and API Engineer.',
    social: {
      twitter: 'https://twitter.com/henokali',
      linkedin: 'https://linkedin.com/in/henokali',
      facebook: 'https://facebook.com/henokali',
      git: 'https://git.com/henokali',
    },
  },
];

const Card: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    className="lt-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {member.img ? (
      <img
        src={member.img}
        alt={member.name}
        className="lt-card__img"
      />
    ) : (
      <div className="lt-card__fallback">
        {member.name.slice(0, 2)}
      </div>
    )}
    <div className="lt-card__body">
      <h3 className="lt-card__name">{member.name}</h3>
      <p className="lt-card__role">{member.role}</p>
      {member.description && (
        <p className="lt-card__desc">{member.description}</p>
      )}
      <div className="lt-card__social">
        {member.social?.twitter && (
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="lt-card__social-link">
            <FaTwitter />
          </a>
        )}
        {member.social?.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="lt-card__social-link">
            <FaLinkedin />
          </a>
        )}
        {member.social?.facebook && (
          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="lt-card__social-link">
            <FaFacebook />
          </a>
        )}
        {member.social?.git && (
          <a href={member.social.git} target="_blank" rel="noopener noreferrer" className="lt-card__social-link">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const TreeNode: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="lt-tree-node">
    <Card member={member} />
    {member.children && (
      <div className="lt-tree-children">
        {member.children.map(child => (
          <TreeNode key={child.id} member={child} />
        ))}
      </div>
    )}
  </div>
);

const LeadershipTeam: React.FC = () => (
  <section className="lt-section">
    {/* Hero */}
    <div className="lt-hero">
      <motion.h1
        className="lt-hero__title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Leadership & Team
      </motion.h1>
      <motion.p
        className="lt-hero__subtitle"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Visionaries driving Africa’s digital transformation.
      </motion.p>
    </div>

    {/* Tree */}
    <div className="lt-tree-area">
      <div className="lt-tree-wrapper">
        <div className="lt-tree-content">
          {leadershipData.map(member => (
            <TreeNode key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>

    {/* Developers Section */}
    <div className="lt-dev-section">
      <h2 className="lt-dev-section__title">Software Developers</h2>
      <div className="lt-dev-section__grid">
        {developerData.map(dev => (
          <Card key={dev.id} member={dev} />
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="lt-cta">
      <h2 className="lt-cta__title">Interested in building Africa’s digital future?</h2>
      <a href="/career" className="lt-cta__btn">Explore Careers</a>
    </div>
  </section>
);

export default LeadershipTeam;