import React from 'react';

const FactCard = ({ title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
    <h4 className="text-xl font-bold mb-4 text-secondary">{title}</h4>
    <div className="text-gray-600 leading-relaxed text-sm space-y-3">
      {children}
    </div>
  </div>
);

const FunFacts = () => {
  return (
    <section className="py-20 px-6 bg-slate-50" id="fun-facts">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Discover Edo State</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">The Heartbeat of the Nation. Explore the rich culture, history, and sights of our host state.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FactCard title="About Edo State">
            <p>Located in South-South Nigeria, created in 1991 from Bendel State.</p>
            <p><strong>Capital:</strong> Benin City (4th largest city in Nigeria).</p>
            <p>Home to the ancient Benin Kingdom and some of the world's largest earthworks.</p>
          </FactCard>

          <FactCard title="Culture & People">
            <p>Inhabited by Edoid people (Bini, Esan, Afemai).</p>
            <p><strong>The Oba:</strong> The pinnacle custodian of history and culture.</p>
            <p>Renowned for bronze casting, elaborate dress culture, beads, and red coral.</p>
          </FactCard>

          <FactCard title="Climate">
            <p>Tropical monsoon climate (Hot & Humid).</p>
            <p><strong>Avg Temp:</strong> 25-30°C (77-86°F).</p>
            <p>Expect some rains in June - pack an umbrella!</p>
          </FactCard>

          <FactCard title="Sites to Visit">
            <ul className="list-disc pl-5 space-y-1">
              <li>National Museum & Oba Palace</li>
              <li>Igun Street (Bronze Casters World Heritage Site)</li>
              <li>Benin Moats</li>
              <li>Ring Road (King's Square)</li>
            </ul>
          </FactCard>

          <FactCard title="Festivals & Markets">
            <p><strong>Igue Festival:</strong> Annual event to usher in the new year.</p>
            <p><strong>Markets:</strong> 4 market days (Ekioba, Ekenaka, Agbado, Eken).</p>
            <p>Host of the Benin City Film Festival.</p>
          </FactCard>

          <FactCard title="Neighbor: Delta State">
            <p>Known as "The Big Heart".</p>
            <p>Major oil-producing state.</p>
            <p>Airports: Asaba and Osubi.</p>
          </FactCard>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;