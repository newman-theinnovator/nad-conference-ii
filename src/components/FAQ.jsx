import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <h4 className="font-bold text-secondary text-lg pr-4">{question}</h4>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
          <svg 
            className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "When is NAD conference 2026?",
      answer: "The Nigerian Association of Dermatologists (NAD) 20th AGM & Scientific Conference 2026 is scheduled to take place from June 23rd to June 26th, 2026. This includes pre-conference workshops and core scientific sessions tailored for global dermatologists."
    },
    {
      question: "Where is the venue for the Nigerian dermatologists conference?",
      answer: "The prestigious NAD 2026 conference will be hosted at the CATHELEA CONVENTION AND SUITES, located in the historic Benin City, Edo State, Nigeria. It provides state-of-the-art facilities for our scientific programs and networking."
    },
    {
      question: "How to register for the Nigerian dermatologists conference?",
      answer: (
        <React.Fragment>
          To register, simply navigate to our Registration section above or click the "Register Now" button in the menu. We offer Early Bird, Standard, and Student/Resident rates. Secure your spot early to enjoy discounted access to all NAD 2026 conference benefits.
        </React.Fragment>
      )
    },
    {
      question: "What is the theme of this year's NAD 2026 conference?",
      answer: "The central theme is \"Treatment and Prevention of Skin Diseases as a Global Health Priority.\" The scientific committee has curated sessions spanning from innovative clinical dermatology to public health interventions in skin care."
    },
    {
      question: "How can I submit an abstract?",
      answer: "We welcome abstract submissions across various dermatological disciplines. You can email your abstracts to abstract@edodeltanad.com. The final deadline for abstract submissions is May 31, 2026."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative" id="faq">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Find answers to common questions about the upcoming Nigerian dermatologists conference, registration, and abstract submissions.
          </p>
        </div>

        <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
