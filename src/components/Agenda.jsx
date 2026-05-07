import React from 'react';

const Agenda = () => {
  return (
    <section className="py-20 px-6 bg-white" id="agenda">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Event Schedule</h2>
          <p className="text-gray-600">A prelimary look at our 4-day scientific conference schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pre-Conference */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PRE-CONF</div>
            <h3 className="text-xl font-bold text-secondary mb-2">June 23rd</h3>
            <p className="text-accent font-semibold mb-4 text-sm">Pre-Conference Workshop</p>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                Registration
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                Workshop Sessions
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                Networking Mixer
              </li>
            </ul>
          </div>

          {/* Day 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DAY 1</div>
            <h3 className="text-xl font-bold text-secondary mb-2">June 24th</h3>
            <p className="text-accent font-semibold mb-4 text-sm">Closing the Care Gap</p>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Welcome Note & Plenary 1
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Access, Affordability & Equity
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Medical & Pediatric Derm
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DAY 2</div>
            <h3 className="text-xl font-bold text-secondary mb-2">June 25th</h3>
            <p className="text-accent font-semibold mb-4 text-sm">Aesthetics & Diagnostics</p>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Plenary 3: Aesthetics
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Plenary 4: Diagnostics
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 shrink-0"></span>
                Sponsored Sessions
              </li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-primary transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DAY 3</div>
            <h3 className="text-xl font-bold text-secondary mb-2">June 26th</h3>
            <p className="text-accent font-semibold mb-4 text-sm">Business & AGM</p>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 shrink-0"></span>
                Hair & Nails / Business of Derm
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 shrink-0"></span>
                Residents Competition
              </li>
              <li className="flex items-start text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 shrink-0"></span>
                AGM & Gala Dinner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;