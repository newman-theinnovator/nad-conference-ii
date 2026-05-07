import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import nadLogo from '../assets/nad-logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
  });

  // Dynamic classes for scroll effect
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
      : 'bg-transparent py-5'
    }`;

  const linkClasses = `text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${scrolled ? 'text-secondary hover:text-primary' : 'text-secondary md:text-white md:hover:text-accent'
    }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={nadLogo} alt="NAD Logo" className="h-10 rounded-full shadow-sm" />
          <h1 className={`text-xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-slate-900 md:text-white'}`}>
            NAD 2026
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {['Home', 'Themes', 'About', 'Agenda', 'Speakers', 'Sponsors', 'Venue'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={linkClasses}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://lu.ma"
              target="_blank"
              className="bg-accent hover:bg-amber-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden focus:outline-none ${scrolled ? 'text-secondary' : 'text-slate-900'}`} onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <animated.ul style={menuAnimation} className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 space-y-4">
          {['Home', 'Themes', 'About', 'Agenda', 'Speakers', 'Sponsors', 'Venue'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-secondary font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </animated.ul>
      )}
    </nav>
  );
};

export default Navbar;