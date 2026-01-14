import React from 'react';
import bensonOkwara from '../assets/benson-okwara.jpg';
import cynthiaMadubuko from '../assets/cynthia-madubuko.jpg';
import sebastineOiwoh from '../assets/sebastine-oiwoh.jpg';
import olumayowaOninla from '../assets/olumayowa-oninla.jpg';
import nkirukaOnodugo from '../assets/nkiruka-onodugo.jpg';
import ogunborExcel from '../assets/ogunbor-excel.jpg';

const SpeakerCard = ({ image, name, title, role, subRole }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
    {/* Image Container with improved aspect ratio handling */}
    <div className="aspect-[3/4] overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Subtle overlay gradient at the bottom for better transitions if needed, though clean is better here */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-6 text-center flex-grow flex flex-col relative">
      {/* Decorative Top Border on Content - adds a premium touch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-b-full shadow-sm"></div>

      <h4 className="text-xl font-bold text-secondary mt-3 mb-1 font-heading leading-tight">{name}</h4>
      <p className="text-primary font-medium text-sm mb-4">{title}</p>

      {/* Divider */}
      <div className="w-16 h-px bg-slate-200 mx-auto mb-4"></div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{role}</p>

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
      subRole: "Chairman (LOC)"
    },
    {
      image: cynthiaMadubuko,
      name: "Prof Cynthia Madubuko",
      title: "MBBS, FWACP, FMCP",
      role: "University of Benin Teaching Hospital, Edo State",
      subRole: null
    },
    {
      image: sebastineOiwoh,
      name: "Dr. Sebastine Oiwoh",
      title: "MBBS, FWACP",
      role: "Irrua Specialist Teaching Hospital / AAU Ekpoma",
      subRole: "Scientific Committee"
    },
    {
      image: olumayowaOninla,
      name: "Dr. Olumayowa Oninla",
      title: "Consultant Dermatologist",
      role: "OAUTHC & Associate Professor, OAU, Ile-Ife",
      subRole: "Vice President 2"
    },
    {
      image: nkirukaOnodugo,
      name: "Dr. Nkiruka Onodugo",
      title: "Consultant Dermatologist",
      role: "University of Nigeria Teaching Hospital, Enugu",
      subRole: "Asst Secretary"
    },
    {
      image: ogunborExcel,
      name: "Dr. Ogunbor Excel",
      title: "Dermatologist",
      role: "University of Benin Teaching Hospital",
      subRole: "Visiting Consultant"
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
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-secondary font-heading">Distinguished Speakers</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet the visionaries and leading experts driving the future of dermatology and global health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;