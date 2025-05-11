import React from "react";

const LeadershipTeam: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-neutral font-sans">
  <div className="container text-center py-24">
    <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
      Welcome to Ethiopian IT Park
    </h1>
    <p className="text-lg md:text-xl text-primary-light mb-8">
      Empowering Ethiopia’s Digital Future — Driving Africa’s Innovation Pulse.
    </p>
    <a
      href="/about"
      className="inline-block bg-primary-light text-white font-semibold px-8 py-3 rounded-full shadow-card hover:bg-primary-dark transition"
    >
      Learn More About Us
    </a>
  </div>
</section>
);

export default LeadershipTeam;