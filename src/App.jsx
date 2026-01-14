import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax'; // For parallax effects
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubThemes from './components/SubThemes';
import About from './components/About';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import VenueMap from './components/VenueMap';
import FunFacts from './components/FunFacts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles

// Initialize AOS for global scroll animations
AOS.init({ duration: 1000, once: true });

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
          <SubThemes />
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} data-aos="fade-up">
          <About />
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
          <Newsletter />
        </motion.section>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;