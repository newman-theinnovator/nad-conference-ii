import React from 'react';

const sponsorsData = {
  diamond: [
    { id: 'eucerin', name: 'EUCERIN', logo: '/eucerin.webp' }
  ],
  platinum: [
    { id: 'loreal', name: "L'ORÉAL", logo: '/loreal.png' }
  ],
  gold: [
    { id: 'sebamed', name: 'SEBAMED', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sebamed.svg' }
  ],
  others: [
    { id: 'faes', name: 'FAES PHARMA', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Faes_Farma_Logo.svg' },
    { id: 'osworth', name: 'OSWORTH HEALTHCARE', logo: '/osworth.webp' },
    { id: 'careline', name: 'CARELINE', logo: '/careline.jpg' }
  ]
};

const SponsorTier = ({ title, sponsors, colClass, heightClass, borderColor, titleColor }) => (
  <div className="mb-16 last:mb-0" data-aos="fade-up">
    <h3 className={`text-xl md:text-2xl font-bold mb-8 text-center uppercase tracking-wider ${titleColor}`}>
      <span className="inline-block border-b-2 pb-1 border-current">{title} Sponsor{sponsors.length > 1 ? 's' : ''}</span>
    </h3>
    <div className={`grid ${colClass} gap-6 md:gap-8 justify-center mx-auto`}>
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className={`${heightClass} bg-white rounded-2xl shadow-sm border-2 ${borderColor} hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 md:grayscale md:hover:grayscale-0 group relative overflow-hidden`}
        >
          {sponsor.logo ? (
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="text-slate-400 font-bold text-2xl md:text-3xl uppercase tracking-widest text-center">{sponsor.name}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative" id="sponsors">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3">
            Industry Leaders
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary font-heading">Our Partners & Sponsors</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud to partner with leading organizations committed to advancing dermatology and global health.
          </p>
        </div>

        {/* Diamond Tier */}
        <SponsorTier
          title="Diamond"
          sponsors={sponsorsData.diamond}
          colClass="grid-cols-1 max-w-2xl"
          heightClass="h-48 md:h-64"
          borderColor="border-cyan-300"
          titleColor="text-cyan-600"
        />

        {/* Platinum Tier */}
        <SponsorTier
          title="Platinum"
          sponsors={sponsorsData.platinum}
          colClass="grid-cols-1 max-w-2xl"
          heightClass="h-40 md:h-48"
          borderColor="border-slate-300"
          titleColor="text-slate-500"
        />

        {/* Gold Tier */}
        <SponsorTier
          title="Gold"
          sponsors={sponsorsData.gold}
          colClass="grid-cols-1 max-w-2xl"
          heightClass="h-32 md:h-40"
          borderColor="border-yellow-400"
          titleColor="text-yellow-600"
        />

        {/* Others Tier */}
        <SponsorTier
          title="Exhibitors & Partners"
          sponsors={sponsorsData.others}
          colClass="grid-cols-2 md:grid-cols-3 max-w-5xl"
          heightClass="h-24 md:h-32"
          borderColor="border-slate-100"
          titleColor="text-slate-700"
        />

      </div>
    </section>
  );
};

export default Sponsors;