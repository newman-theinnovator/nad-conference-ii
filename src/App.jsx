import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax'; // For parallax effects
import { Helmet, HelmetProvider } from 'react-helmet-async'; // SEO integration
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const SubThemes = React.lazy(() => import('./components/SubThemes'));
const About = React.lazy(() => import('./components/About'));
const Registration = React.lazy(() => import('./components/Registration'));
const Agenda = React.lazy(() => import('./components/Agenda'));
const Speakers = React.lazy(() => import('./components/Speakers'));
const Sponsors = React.lazy(() => import('./components/Sponsors'));
const VenueMap = React.lazy(() => import('./components/VenueMap'));
const FunFacts = React.lazy(() => import('./components/FunFacts'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Newsletter = React.lazy(() => import('./components/Newsletter'));
const Footer = React.lazy(() => import('./components/Footer'));
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles

// Removed eager AOS.init() to defer it un until component mounts
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "NAD 20th AGM & Scientific Conference 2026",
    "startDate": "2026-06-23T08:00+01:00",
    "endDate": "2026-06-26T18:00+01:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "CATHELEA CONVENTION AND SUITES",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Benin City",
        "addressRegion": "Edo State",
        "addressCountry": "NG"
      }
    },
    "image": [
      "https://www.edodeltanad.com/nad-logo.webp"
    ],
    "description": "Join the Nigerian Association of Dermatologists for the 20th AGM & Scientific Conference 2026 in Benin City. Theme: Treatment and Prevention of Skin Diseases as a Global Health Priority.",
    "organizer": {
      "@type": "Organization",
      "name": "Nigerian Association of Dermatologists",
      "url": "https://www.edodeltanad.com"
    },
    "performer": [
      { "@type": "Person", "name": "Dr. Benson Okwara", "jobTitle": "Chairman (LOC)" },
      { "@type": "Person", "name": "Prof Cynthia Madubuko", "jobTitle": "Dermatologist" },
      { "@type": "Person", "name": "Dr. Sebastine Oiwoh", "jobTitle": "Scientific Committee" }
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://lu.ma",
      "price": "0",
      "priceCurrency": "NGN",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href="https://www.edodeltanad.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <ParallaxProvider>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <React.Suspense fallback={<div className="py-20 flex justify-center items-center text-primary font-bold">Loading...</div>}>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <SubThemes />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <About />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <Registration />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <Agenda />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <Speakers />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <Sponsors />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <VenueMap />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <FunFacts />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <FAQ />
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
              <Newsletter />
            </motion.section>
            <Footer />
          </React.Suspense>
        </div>
      </ParallaxProvider>
    </HelmetProvider>
  );
}

export default App;