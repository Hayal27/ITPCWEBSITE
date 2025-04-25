
import { useEffect } from 'react';

const Investment = () => {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('.reveal-image');

    const revealTextAfterImage = () => {
      images.forEach((img) => {
        const textBlock = img.parentElement?.querySelector('.reveal-text') as HTMLElement | null;
        const windowHeight = window.innerHeight;
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < windowHeight - 150) {
          img.classList.add('active');
          if (textBlock && !textBlock.classList.contains('active')) {
            setTimeout(() => {
              textBlock.classList.add('active');
            }, 500);
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
    <div className="bg-white text-gray-900 font-sans leading-relaxed">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .float-anim {
          animation: float 4s ease-in-out infinite;
        }

        .reveal-image,
        .reveal-text {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.3s ease-out;
        }

        .reveal-image.active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-text.active {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.5s;
        }
      `}</style>

      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold mb-16 text-gray-800 relative">
          What We Do at Ethiopian IT Park
          <span className="block w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></span>
        </h2>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://mlevlt8snxuz.i.optimole.com/w:374/h:258/q:mauto/f:best/ig:avif/https://ethiopianitpark.et/wp-content/uploads/2024/10/pm.jpeg"
            alt="Ethiopian IT Park Campus"
            className="rounded-3xl shadow-xl transform transition duration-500 float-anim reveal-image"
          />
          <div className="reveal-text">
            <a href="/investment" className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1 rounded-full inline-block mb-3 uppercase tracking-wider">
              Investment
            </a>
            <h3 className="text-2xl font-bold mb-5 text-gray-900">
              The Ethiopian IT Park Advantage: Why Invest Here
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Ethiopian IT Park is designed to accelerate tech innovation and business growth by offering world-class facilities and strategic support:
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
              <li>Government Endorsement & Incentives</li>
              <li>Prime Geo-Strategic Location</li>
              <li>State-of-the-Art Infrastructure</li>
              <li>Vibrant Tech Ecosystem</li>
              <li>Sustainable & Smart Campus</li>
              <li>Quality Work & Living Environment</li>
            </ul>
            <a href="/investment-opportunities" className="inline-block mt-6 bg-blue-600 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              View Opportunities
            </a>
          </div>
        </div>

        {/* Connectors */}
        <div className="flex justify-center mt-12 mb-12">
          <div className="w-1 h-8 bg-red-500"></div>
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-1 h-8 bg-red-500"></div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-text">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1 rounded-full inline-block mb-3 uppercase tracking-wider">
              Data Center Services
            </span>
            <h3 className="text-2xl font-bold mb-5 text-gray-900">
              Power Your Business with Ethiopian IT Park Cloud
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Our National Data Center provides secure Tier III infrastructure and a full suite of services:
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
              <li>Software as a Service (SaaS)</li>
              <li>Infrastructure as a Service (IaaS)</li>
              <li>Platform as a Service (PaaS)</li>
              <li>High-Density Colocation</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Explore Cloud
            </button>
          </div>
          <img
            src="https://mlevlt8snxuz.i.optimole.com/w:374/h:258/q:mauto/f:best/ig:avif/https://ethiopianitpark.et/wp-content/uploads/2024/10/pm.jpeg"
            alt="Ethiopian IT Park Data Center"
            className="rounded-3xl shadow-xl transform transition duration-500 float-anim reveal-image"
          />
        </div>

        {/* Connectors */}
        <div className="flex justify-center mt-12 mb-12">
          <div className="w-1 h-8 bg-red-500"></div>
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-1 h-8 bg-red-500"></div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://mlevlt8snxuz.i.optimole.com/w:374/h:258/q:mauto/f:best/ig:avif/https://ethiopianitpark.et/wp-content/uploads/2024/10/pm.jpeg"
            alt="Innovation at Ethiopian IT Park"
            className="rounded-3xl shadow-xl transform transition duration-500 float-anim reveal-image"
          />
          <div className="reveal-text">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1 rounded-full inline-block mb-3 uppercase tracking-wider">
              Innovation & Growth
            </span>
            <h3 className="text-2xl font-bold mb-5 text-gray-900">
              Empowering Tech Innovation & Entrepreneurship
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Ethiopian IT Park nurtures startups and innovators through accelerator programs, mentorship, and collaborative labs:
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
              <li>Accelerator & Incubator Support</li>
              <li>Startup & Ecosystem Development</li>
              <li>Innovation Labs & Workshops</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
