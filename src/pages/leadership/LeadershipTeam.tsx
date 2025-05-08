import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'

interface SocialLinks {
  twitter?: string
  linkedin?: string
  facebook?: string
  git?: string
}

interface TeamMember {
  id: string
  name: string
  role: string
  img?: string
  description?: string
  social?: SocialLinks
  children?: TeamMember[]
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
    className="bg-primary-light rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center min-w-[220px] max-w-xs transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring" }}
    viewport={{ once: true }}
    tabIndex={0}
    aria-label={`${member.name}, ${member.role}`}
  >
    {member.img ? (
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 rounded-full border-4 border-primary mb-4 object-cover shadow"
        loading="lazy"
      />
    ) : (
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-primary border-4 border-primary mb-4">
        {member.name.slice(0, 2)}
      </div>
    )}
    <div className="text-center">
      <h3 className="text-lg font-bold text-primary-dark mb-1">{member.name}</h3>
      <p className="text-primary font-semibold mb-2">{member.role}</p>
      {member.description && (
        <p className="text-gray-600 mb-3 text-sm">{member.description}</p>
      )}
      <div className="flex gap-3 justify-center">
        {member.social?.twitter && (
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
        )}
        {member.social?.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        )}
        {member.social?.facebook && (
          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
        )}
        {member.social?.git && (
          <a href={member.social.git} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const TreeNode: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="flex flex-col items-center relative">
    <Card member={member} />
    {member.children && (
      <div className="flex flex-col items-center w-full">
        {/* Vertical connector */}
        <div className="h-8 w-1 bg-gradient-to-b from-primary to-black rounded-full" />
        {/* Horizontal connector and children */}
        <div className="flex w-full justify-center items-start relative">
          <div className="absolute left-0 right-0 top-4 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full z-0" style={{ marginLeft: '60px', marginRight: '60px' }} />
          <div className="flex gap-8 w-full justify-center z-10">
            {member.children.map(child => (
              <TreeNode key={child.id} member={child} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
)

const LeadershipTeam: React.FC = () => (
  <section className="bg-background min-h-screen font-primary">
    {/* Hero */}
    <div className="bg-gradient-to-br from-primary to-primary-light text-white text-center py-16 px-4 rounded-b-3xl shadow-lg mb-10">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Leadership & Team
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Visionaries driving Africa’s digital transformation.
      </motion.p>
    </div>

    {/* Org Chart */}
    <div className="w-full max-w-6xl mx-auto mb-16 px-2 overflow-x-auto">
      <div className="flex justify-center pt-8">
        {leadershipData.map(member => (
          <TreeNode key={member.id} member={member} />
        ))}
      </div>
    </div>

    {/* Developers Section */}
    <div className="max-w-5xl mx-auto py-10 px-2">
      <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">
        Software Developers
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {developerData.map(dev => (
          <Card key={dev.id} member={dev} />
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-gradient-to-tr from-primary to-primary-light text-white text-center py-10 px-6 rounded-2xl shadow-lg max-w-xl mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Interested in building Africa’s digital future?
      </h2>
      <a
        href="/career"
        className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary-dark hover:text-white transition"
      >
        Explore Careers
      </a>
    </div>
  </section>
)

export default LeadershipTeam