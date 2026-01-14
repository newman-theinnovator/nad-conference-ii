import React from 'react';

const Agenda = () => {
  return (
    <section className="py-20 px-6 bg-white" id="agenda">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Event Schedule</h3>
          <p className="text-gray-600">A prelimary look at our 4-day scientific conference schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DAY 1</div>
            <h4 className="text-2xl font-bold text-secondary mb-2">June 23rd</h4>
            <p className="text-accent font-semibold mb-6">Opening Ceremony</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Registration & Welcome
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Opening Keynotes
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Networking Mixer
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DAY 2</div>
            <h4 className="text-2xl font-bold text-secondary mb-2">June 24th</h4>
            <p className="text-accent font-semibold mb-6">Workshops & Panels</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Scientific Sessions
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Clinical Demonstrations
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Gala Dinner
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            Download Full Agenda (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;