import React from 'react';
import { FaHeartbeat, FaGlobeAfrica, FaHandHoldingMedical } from 'react-icons/fa';

const SubThemes = () => {
  const themes = [
    {
      icon: <FaHeartbeat className="text-4xl text-primary mb-4" />,
      title: "Closing the Care Gap",
      description: "Addressing Access, Affordability, and Equity in Dermatology Care across Nigeria."
    },
    {
      icon: <FaGlobeAfrica className="text-4xl text-secondary mb-4" />,
      title: "Local Challenges & Global Innovation",
      description: "Navigating the intersection of knowledge, technologies, and innovations with local challenges."
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl text-accent mb-4" />,
      title: "Health Equity in Skin Care",
      description: "Achieving health equity and addressing burning issues in skin care practices."
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50" id="sub-themes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Conference Sub-Themes</h3>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-primary group">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {theme.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-secondary">{theme.title}</h4>
              <p className="text-gray-600 leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubThemes;