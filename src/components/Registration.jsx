import React from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white" id="registration">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Call for Abstracts */}
        <motion.div 
          className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-6 border border-white/30">
              Scientific Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
              Call for Abstracts
            </h2>
            <p className="mb-6 text-white/90 text-lg leading-relaxed">
              We invite researchers, academics, and practitioners to submit their abstracts for the <strong>Nigerian dermatologists conference 2026</strong>. Share your clinical trials, case reports, and innovations in the treatment and prevention of skin diseases.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Submission Deadline</h4>
                  <p className="text-white/80 text-sm">May 31, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Email Submissions To</h4>
                  <a href="mailto:abstract@edodeltanad.com" className="text-accent font-semibold hover:underline">abstract@edodeltanad.com</a>
                </div>
              </div>
            </div>
            <a 
              href="mailto:abstract@edodeltanad.com?subject=Abstract Submission - NAD 2026"
              className="inline-block w-full text-center bg-white text-secondary font-bold py-4 px-8 rounded-xl hover:bg-slate-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Your Abstract
            </a>
          </div>
        </motion.div>

        {/* Registration Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-3">
            Secure Your Spot
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary font-heading">
            Registration Details
          </h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Join leading experts at the premier <strong>NAD 2026 conference</strong>. Early booking guarantees your access to all scientific sessions, workshops, networking events, and conference materials for Nigerian dermatologists and global colleagues.
          </p>

          <div className="space-y-6">
            {/* Early Bird */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Early Bird Registration
                </h3>
                <p className="text-slate-500 text-sm mt-1">Available until May 20, 2026</p>
                <ul className="text-sm text-slate-600 mt-3 space-y-1">
                  <li>✓ Access to all keynote sessions</li>
                  <li>✓ Conference kit & materials</li>
                  <li>✓ Daily lunch and tea breaks</li>
                  <li>✓ Certificate of participation</li>
                </ul>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <a href="#contact" className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto text-center">
                  Register Now
                </a>
              </div>
            </div>

            {/* Standard */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  Standard Registration
                </h3>
                <p className="text-slate-500 text-sm mt-1">From May 21, 2026</p>
              </div>
            </div>

            {/* Students/Residents */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Residents / Students
                </h3>
                <p className="text-slate-500 text-sm mt-1">Special discounted rate available</p>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-slate-500 italic">
            For group registration inquiries or payment assistance regarding the Nigerian dermatologists conference, please contact our support team.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
