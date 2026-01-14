import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import heroBg from '../assets/hero-bg.png'; // Removed as per request

const Hero = () => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-teal-900 to-secondary animate-gradient-slow">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Animated Orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
        <Parallax speed={-5}>
          <div className="inline-block px-4 py-1.5 mb-4 border border-accent/50 rounded-full bg-accent/10 backdrop-blur-sm">
            <span className="text-accent font-bold tracking-widest text-sm uppercase">23rd - 26th June, 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight">
            NAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-200">2026</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-gray-200 mb-8 max-w-3xl mx-auto">
            Treatment and Prevention of Skin Diseases as a <br className="hidden md:block" />
            <span className="font-semibold text-white">Global Health Priority</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
            <a
              href="https://lu.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-white/10 pt-8">
            <div>
              <h3 className="text-accent font-bold text-lg mb-1">Venue</h3>
              <p className="text-gray-300 text-sm">CATHELEA CONVENTION AND SUITES, Benin City</p>
            </div>
            <div>
              <h3 className="text-accent font-bold text-lg mb-1">Association</h3>
              <p className="text-gray-300 text-sm">Nigerian Association of Dermatologists</p>
            </div>
            <div>
              <h3 className="text-accent font-bold text-lg mb-1">Contact</h3>
              <p className="text-gray-300 text-sm">admin@edodeltanad.com</p>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Hero;