import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-6 tracking-tight text-white">NAD 2026</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            The 20th Annual General Meeting and Scientific Conference of the Nigerian Association of Dermatologists.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#agenda" className="hover:text-primary transition-colors">Agenda</a></li>
            <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
            <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsorships</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">Abstract Submission</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Hotel Booking</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              <span>CATHELEA CONVENTION AND SUITES, Benin City, Edo State</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a href="mailto:info@nadconference.com" className="hover:text-white">info@nadconference.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary" />
              <a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2025 Nigerian Association of Dermatologists. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;