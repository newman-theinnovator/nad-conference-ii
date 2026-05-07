import React from 'react';
import bensonOkwara from '../assets/benson-okwara.webp';
import cynthiaMadubuko from '../assets/cynthia-madubuko.webp';
import sebastineOiwoh from '../assets/sebastine-oiwoh.webp';
import olumayowaOninla from '../assets/olumayowa-oninla.webp';
import nkirukaOnodugo from '../assets/nkiruka-onodugo.webp';
import ogunborExcel from '../assets/ogunbor-excel.webp';
import nwoseJephthah from '../assets/nwose-jephthah.webp';
import aishaSokunbi from '../assets/aisha-sokunbi.webp';
import obasiKevwie from '../assets/obasi-kevwie.webp';
import christabelOvesour from '../assets/christabel-ovesour.webp';

const SpeakerCard = ({ image, name, title, role, subRole, bio }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
    {/* Image Container with improved aspect ratio handling */}
    <div className="aspect-[3/4] overflow-hidden relative">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Subtle overlay gradient at the bottom for better transitions if needed, though clean is better here */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-6 text-center flex-grow flex flex-col relative">
      {/* Decorative Top Border on Content - adds a premium touch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-b-full shadow-sm"></div>

      <h3 className="text-xl font-bold text-secondary mt-3 mb-1 font-heading leading-tight">{name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{title}</p>

      {/* Divider */}
      <div className="w-16 h-px bg-slate-200 mx-auto mb-4"></div>

      <p className="text-slate-800 font-medium text-sm leading-relaxed mb-2">{role}</p>
      {bio && (
        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300 text-left">
          {bio}
        </p>
      )}

      {/* Badge Container */}
      <div className="mt-auto pt-2">
        {subRole && (
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
            {subRole}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Speakers = () => {
  const speakers = [
    {
      image: bensonOkwara,
      name: "Dr. Benson Okwara",
      title: "MBBS, FMCP",
      role: "University of Benin Teaching Hospital",
      subRole: "Chairman (LOC)",
      bio: "Leading expert in modern dermatology treatments, presenting innovations at the NAD 2026 conference. Spearheads research on the prevention of skin diseases across Nigerian cohorts."
    },
    {
      image: cynthiaMadubuko,
      name: "Prof Cynthia Madubuko",
      title: "MBBS, FWACP, FMCP",
      role: "University of Benin Teaching Hospital, Edo State",
      subRole: null,
      bio: "Renowned Nigerian dermatologist known for advanced therapies in chronic skin conditions. Her visionary work significantly impacts the global health policy on dermatological care."
    },
    {
      image: sebastineOiwoh,
      name: "Dr. Sebastine Oiwoh",
      title: "MBBS, FWACP",
      role: "Irrua Specialist Teaching Hospital / AAU Ekpoma",
      subRole: "Scientific Committee",
      bio: "Specializing in tropical infectious dermatoses. Evaluates abstract submissions and establishes the clinical guidelines for the Nigerian dermatologists conference 2026."
    },
    {
      image: olumayowaOninla,
      name: "Dr. Olumayowa Oninla",
      title: "Consultant Dermatologist",
      role: "OAUTHC & Associate Professor, OAU, Ile-Ife",
      subRole: "Vice President 2",
      bio: "Academic leader providing key insights into therapeutic dermatology and cosmetic procedures in Nigeria, advocating for evidence-based treatments of skin diseases."
    },
    {
      image: nkirukaOnodugo,
      name: "Dr. Nkiruka Onodugo",
      title: "Consultant Dermatologist",
      role: "University of Nigeria Teaching Hospital, Enugu",
      subRole: "Asst Secretary",
      bio: "Expert in pediatric dermatology and inflammatory skin disorders. A pivotal speaker at NAD 2026 on strengthening dermatological care across local Nigerian communities."
    },
    {
      image: ogunborExcel,
      name: "Dr. Ogunbor Excel",
      title: "Consultant Physician / Dermatologist and Genitourinary Specialist",
      role: "University of Benin Teaching Hospital",
      subRole: null,
      bio: "Brings extensive experience treating complex genitourinary conditions and associated cutaneous manifestations, a key topic at this year's top Nigerian dermatologists conference."
    },
    {
      image: nwoseJephthah,
      name: "Dr. Nwose Jephthah Junior",
      title: "MB.BS (Benin), B.SC Hons (Calabar), FWACP",
      role: "Federal Medical Centre, Asaba. Special interest in Dermatology.",
      subRole: null,
      bio: "Focuses on systemic disease skin manifestations and early prevention strategies, highlighting cost-effective dermatology solutions for resource-limited settings."
    },
    {
      image: aishaSokunbi,
      name: "Dr. Aisha Sokunbi",
      title: "FWACP",
      role: "Consultant Dermatologist, UBTH",
      subRole: "Edo/Delta NAD Secretary",
      bio: "Coordinates the scientific programming and workshops, advancing knowledge transfer and skill acquisition among attendees at the upcoming NAD 2026 conference."
    },
    {
      image: obasiKevwie,
      name: "Dr. Obasi Kevwie Becky",
      title: "Consultant Dermatologist/Physician",
      role: "Delta State University Teaching Hospital, Oghara",
      subRole: "Welfare",
      bio: "Promotes holistic patient wellness and the psychological impact of skin diseases, advocating for comprehensive care models in contemporary Nigerian dermatology."
    },
    {
      image: christabelOvesour,
      name: "Dr. Christabel A. Ovesour",
      title: "Consultant Physician and Dermatologist",
      role: "Federal Medical Centre, Asaba",
      subRole: "Fundraising committee",
      bio: "Instrumental in expanding access to dermatological treatments in rural sectors. Her work focuses on sustainable interventions against prevalent and emerging skin diseases."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden" id="speakers">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3">
            World-Class Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary font-heading">Distinguished Speakers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet the visionaries and leading experts driving the future of dermatology and global health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => {
            // If it's a 3-column grid and there's exactly 1 item in the last row, center it
            const isLastRowSingleItem = speakers.length % 3 === 1 && index === speakers.length - 1;
            return (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className={isLastRowSingleItem ? "lg:col-start-2" : ""}
              >
                <SpeakerCard {...speaker} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;