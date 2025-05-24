import React, { useState } from 'react';

const features = [
  {
    title: 'Local Cloud Infrastructure (Data Center as a Service)',
    icon: 'fa-database',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li><b>Hosted on IT Park Premises:</b> Reduces latency for local startups, ensures data sovereignty within Ethiopia</li>
        <li><b>Virtualized Environments:</b> Linux & Windows VMs, Docker & Kubernetes support</li>
        <li><b>Elastic Resources:</b> Auto-scaling storage/compute, pay-as-you-grow pricing</li>
      </ul>
    ),
  },
  {
    title: 'Web Hosting Services',
    icon: 'fa-server',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li><b>Shared Hosting:</b> cPanel, 1-click installers (WordPress, Laravel, etc.)</li>
        <li><b>VPS:</b> Custom OS, root access, scalable RAM/CPU</li>
        <li><b>Cloud Hosting:</b> Fully managed, auto-scaling, backups, load balancing</li>
        <li><b>Dedicated Hosting:</b> On-request, full control for enterprise</li>
      </ul>
    ),
  },
  {
    title: 'Security & Compliance',
    icon: 'fa-shield-alt',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Data encryption at rest & in transit</li>
        <li>Firewall & DDoS protection</li>
        <li>Role-Based Access Control (RBAC)</li>
        <li>Daily backups & snapshot management</li>
        <li>Compliance: ISO 27001, GDPR, local laws</li>
      </ul>
    ),
  },
  {
    title: 'Developer-Friendly Tools',
    icon: 'fa-code',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Self-service portals for VM/web app management</li>
        <li>RESTful APIs & SDKs for automation</li>
        <li>CI/CD integrations (GitHub, GitLab, Jenkins)</li>
        <li>CLI tools for easy deployment</li>
      </ul>
    ),
  },
  {
    title: 'Dev & Test Environments',
    icon: 'fa-flask',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Isolated sandbox hosting</li>
        <li>Time-based instance auto-deletion</li>
        <li>Pre-built images: Node.js, Python, Java, .NET Core</li>
      </ul>
    ),
  },
  {
    title: 'Monitoring, Logging & Support',
    icon: 'fa-chart-line',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Real-time monitoring dashboard</li>
        <li>Centralized logging (Elastic Stack, Graylog)</li>
        <li>Tiered support: Basic, Pro, Enterprise</li>
      </ul>
    ),
  },
  {
    title: 'Network & CDN',
    icon: 'fa-network-wired',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>High-speed uplink to national backbone</li>
        <li>Private network between tenants (VLAN/SDN)</li>
        <li>Optional CDN for global reach</li>
      </ul>
    ),
  },
  {
    title: 'Multi-Tenant Architecture',
    icon: 'fa-users-cog',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Isolated tenants, flexible permissions/quotas</li>
        <li>Role-based control (Admin, Developer, Auditor)</li>
      </ul>
    ),
  },
  {
    title: 'Use Cases',
    icon: 'fa-lightbulb',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Startup MVP hosting</li>
        <li>SaaS product deployment</li>
        <li>Internal app hosting (HR, ERP, CRM)</li>
        <li>Learning & research environments</li>
        <li>NGO, GovTech, Smart City apps</li>
      </ul>
    ),
  },
];

const plans = [
  {
    name: 'Startup',
    price: 'Free*',
    features: [
      'Shared hosting',
      '10GB storage',
      'Free subdomain',
      'Community support',
    ],
  },
  {
    name: 'Developer',
    price: 'From $9/mo',
    features: [
      'VPS/Cloud hosting',
      'Scalable resources',
      'API access',
      'Email/ticket support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Dedicated hosting',
      'SLA-backed uptime',
      'Compliance ready',
      'Dedicated support',
    ],
  },
];

const CloudInfrastructure: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen w-full pt-36 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-400 text-white py-16 px-4 md:px-12 lg:px-24 3xl:px-48 4xl:px-64 5xl:px-96 3xl:py-24 4xl:py-32 5xl:py-40 flex flex-col items-center text-center">
        <div className="max-w-3xl 3xl:max-w-5xl 4xl:max-w-6xl 5xl:max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Cloud Infrastructure & Web Hosting</h1>
          <p className="text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-medium mb-6 opacity-90">Enterprise-grade, secure, and scalable cloud & hosting solutions for startups, developers, and enterprises at Ethiopian IT Park.</p>          
        </div>
        <div className="absolute right-8 bottom-8 3xl:right-24 4xl:right-40 5xl:right-64 3xl:bottom-24 4xl:bottom-40 5xl:bottom-64 opacity-20 hidden md:block">
          <i className="fas fa-cloud fa-7x 3xl:fa-9x 4xl:fa-10x 5xl:fa-12x"></i>
        </div>
      </section>

      {/* Feature Accordion */}
      <section className="max-w-5xl 3xl:max-w-7xl 4xl:max-w-8xl 5xl:max-w-screen-2xl mx-auto py-12 3xl:py-20 4xl:py-28 5xl:py-36 px-4 md:px-8 3xl:px-20 4xl:px-32 5xl:px-48">
        <h2 className="text-2xl md:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 text-blue-800 text-center">Key Features</h2>
        <div className="space-y-4 3xl:space-y-8">
          {features.map((f, idx) => (
            <div key={f.title} className="border border-blue-100 rounded-lg bg-white shadow-sm overflow-hidden 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">
              <button
                className="w-full flex items-center bg-white text-primary-default justify-between px-6 py-4 3xl:px-12 3xl:py-8 4xl:px-16 4xl:py-10 5xl:px-24 5xl:py-14 text-left focus:outline-none focus:ring-2 focus:ring-primary-default transition-colors hover:bg-blue-50"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <div className="flex items-center gap-3 3xl:gap-6">
                  <i className={`fas ${f.icon} text-primary-default text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl`}></i>
                  <span className="font-semibold text-lg md:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl">{f.title}</span>
                </div>
                <i className={`fas fa-chevron-${openIdx === idx ? 'up' : 'down'} text-primary-default text-lg 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-transform`}></i>
              </button>
              {openIdx === idx && (
                <div className="px-8 pb-6 pt-2 3xl:px-16 3xl:pb-12 4xl:px-24 4xl:pb-16 5xl:px-32 5xl:pb-20 text-gray-700 animate-fade-in">
                  {f.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Optional Visuals (Placeholder) */}
      <section className="max-w-5xl 3xl:max-w-7xl 4xl:max-w-8xl 5xl:max-w-screen-2xl mx-auto py-8 3xl:py-16 4xl:py-24 5xl:py-32 px-4 md:px-8 3xl:px-20 4xl:px-32 5xl:px-48">
        <div className="grid grid-cols-1 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-6 3xl:gap-10 4xl:gap-14 5xl:gap-20">
          <div className="bg-white rounded-xl shadow p-6 3xl:p-10 4xl:p-14 5xl:p-20 flex flex-col items-center">
            <i className="fas fa-project-diagram text-3xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-primary-default mb-2"></i>
            <div className="font-semibold mb-1 3xl:text-lg 4xl:text-xl 5xl:text-2xl">Cloud Architecture Diagram</div>
            <div className="text-xs 3xl:text-base 4xl:text-lg 5xl:text-xl text-gray-500">(Visual placeholder)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 3xl:p-10 4xl:p-14 5xl:p-20 flex flex-col items-center">
            <i className="fas fa-table text-3xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-primary-default mb-2"></i>
            <div className="font-semibold mb-1 3xl:text-lg 4xl:text-xl 5xl:text-2xl">Hosting Plan Comparison</div>
            <div className="text-xs 3xl:text-base 4xl:text-lg 5xl:text-xl text-gray-500">(Visual placeholder)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 3xl:p-10 4xl:p-14 5xl:p-20 flex flex-col items-center">
            <i className="fas fa-users text-3xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-primary-default mb-2"></i>
            <div className="font-semibold mb-1 3xl:text-lg 4xl:text-xl 5xl:text-2xl">Customer Testimonials</div>
            <div className="text-xs 3xl:text-base 4xl:text-lg 5xl:text-xl text-gray-500">(Visual placeholder)</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructure;
