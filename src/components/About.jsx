import React from 'react';
import aboutImg from '../assets/new-about-conference.jpg';

const About = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative" data-aos="fade-right">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={aboutImg} alt="Conference Audience" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 space-y-6" data-aos="fade-left">
          <h3 className="text-secondary font-bold text-sm tracking-widest uppercase mb-2">About The Conference</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Advancing Dermatology in <span className="text-primary">Nigeria</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us for the <span className="font-semibold text-secondary">20th Annual General Meeting and Scientific Conference</span> of the Nigerian Association of Dermatologists. This landmark event brings together global experts, professionals, and investors to shape the future of skin health.
          </p>
          <div className="bg-slate-50 border-l-4 border-accent p-4 rounded-r-lg">
            <p className="text-gray-700 font-medium">
              "We welcome international investors and pioneers to join the conversation on innovations and global health priorities."
            </p>
          </div>
          <p className="text-gray-600">
            We are streamlining certifications and processes using modern digital tools to ensure a seamless experience for all delegates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;