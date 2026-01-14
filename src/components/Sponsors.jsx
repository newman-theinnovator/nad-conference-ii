import React from 'react';

const Sponsors = () => {
  return (
    <section className="py-20 px-6 bg-slate-50" id="sponsors">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our Partners & Sponsors</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We are proud to partner with leading organizations committed to advancing dermatology and global health.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {/* Placeholders for logos */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <span className="text-gray-400 font-bold text-xl uppercase">Sponsor {i}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h4 className="text-2xl font-bold text-secondary mb-4">Interested in Sponsoring?</h4>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with key decision makers and showcase your innovations to a targeted audience of dermatology professionals.
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
            Download Sponsorship Kit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;