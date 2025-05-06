
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
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

// Top-level leadership & management teams
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
          twitter: 'https://twitter.com/senaytgm',
          linkedin: 'https://linkedin.com/in/senaytgm',
        },
        children: [
          {
            id: '1.1.1',
            name: 'Weyzero Habtam',
            role: 'Accounting and Finance',
            img: 'https://randomuser.me/api/portraits/women/30.jpg',
            description: 'Managing budgets and financial reporting.',
            social: {
              linkedin: 'https://linkedin.com/in/habtamfinance',
            },
            children: [
              {
                id: '1.1.1.1',
                name: 'Ato Yosef Kinfe',
                role: 'HR',
                img: 'https://randomuser.me/api/portraits/men/40.jpg',
                description: 'Driving talent acquisition and engagement.',
                social: {
                  twitter: 'https://twitter.com/ykinfe_hr',
                  facebook: 'https://facebook.com/ykinfe.hr',
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
                  twitter: 'https://twitter.com/nebyat_it',
                },
              },
              {
                id: '1.1.2.2',
                name: 'Ato Merso Gobena',
                role: 'Incubation and Innovation',
                img: 'https://randomuser.me/api/portraits/men/70.jpg',
                description: 'Driving new product incubation.',
                social: {
                  linkedin: 'https://linkedin.com/in/mersogobena',
                },
              },
              {
                id: '1.1.2.3',
                name: 'Woyzero Eskedar Teshager',
                role: 'Investment and Follow-up',
                img: 'https://randomuser.me/api/portraits/women/80.jpg',
                description: 'Managing investments and project follow-ups.',
                social: {
                  facebook: 'https://facebook.com/eskedar.invest',
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
              linkedin: 'https://linkedin.com/in/ermiyasbuild',
            },
            children: [
              {
                id: '1.1.3.1',
                name: 'Ato Walelgn Walelgn',
                role: 'Building Follow-up',
                img: 'https://randomuser.me/api/portraits/men/15.jpg',
                description: 'Monitoring building progress.',
                social: {},
              },
              {
                id: '1.1.3.2',
                name: 'Ato Ermiyas Ketema',
                role: 'Land and Infrastructure',
                img: 'https://randomuser.me/api/portraits/men/16.jpg',
                description: 'Managing land acquisition and site prep.',
                social: {},
              },
              {
                id: '1.1.3.3',
                name: 'Ato Desta Desta',
                role: 'Facility and Maintenance',
                img: 'https://randomuser.me/api/portraits/men/17.jpg',
                description: 'Ensuring facilities run smoothly.',
                social: {
                  twitter: 'https://twitter.com/desta_maint',
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
          linkedin: 'https://linkedin.com/in/fetenebd',
        },
      },
    ],
  },
];

// Separate developers section at bottom
const developerData: TeamMember[] = [
  {
    id: '2.1',
    name: 'Hayal Tamrat',
    role: 'Software Developer',
    img: 'https://randomuser.me/api/portraits/men/19.jpg',
    description: 'Frontend specialist.',
    social: {
      twitter: 'https://twitter.com/hayaldev',
      linkedin: 'https://linkedin.com/in/hayaldev',
    },
  },
  {
    id: '2.2',
    name: 'Yesuf Fenta',
    role: 'Software Developer',
    img: 'https://randomuser.me/api/portraits/men/20.jpg',
    description: 'Backend and API engineer.',
    social: {
      linkedin: 'https://linkedin.com/in/yesufapi',
    },
  },
];

const Card: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    className="flex flex-col justify-between items-center w-64 h-80 p-6 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {member.img ? (
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 object-cover rounded-full border-4 border-primary-500"
      />
    ) : (
      <div className="w-24 h-24 rounded-full border-4 border-primary-500 bg-gray-200 flex items-center justify-center font-bold">
        {member.name.slice(0, 2)}
      </div>
    )}
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-primary-600 mb-2">{member.role}</p>
      {member.description && (
        <p className="text-xs text-gray-500 italic mb-4">{member.description}</p>
      )}
      <div className="flex space-x-3 justify-center">
        {member.social?.twitter && (
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 hover:text-blue-600" />
          </a>
        )}
        {member.social?.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-900" />
          </a>
        )}
        {member.social?.facebook && (
          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-700" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const TreeNode: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="flex flex-col items-center relative">
    <Card member={member} />
    {member.children && (
      <div className="flex justify-center items-center gap-8 mt-8 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400" />
        <div className="absolute -top-3 left-0 right-0 h-0.5 bg-gray-400" />
        {member.children.map(child => (
          <TreeNode key={child.id} member={child} />
        ))}
      </div>
    )}
  </div>
);

const resevedServiece: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
    <div className="container mx-auto px-4 text-center">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-primary-600 uppercase tracking-widest text-sm mb-2 block">
          የቡድኑ አባላት
        </span>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Meet Our Organization Team
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          የንብረት ትኬት ጥራት ጥናት ቁልፍ አስተዳደር በሙሉ አቀፍ ስብስክ ቅርጸት ይገልጻል።
        </p>
      </motion.div>

      {/* Leadership Tree with Zoom & Pan */}
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={3} wheel={{ step: 0.1 }}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => zoomIn()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Zoom In
              </button>
              <button
                onClick={() => zoomOut()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Zoom Out
              </button>
              <button
                onClick={() => resetTransform()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Reset
              </button>
            </div>
            <TransformComponent>
              <div className="flex justify-center items-center gap-8">
                {leadershipData.map(member => (
                  <TreeNode key={member.id} member={member} />
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* Software Developers Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Software Developers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {developerData.map(dev => (
            <Card key={dev.id} member={dev} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default resevedServiece;
