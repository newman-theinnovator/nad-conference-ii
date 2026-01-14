import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { initParticlesEngine } from '@tsparticles/react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: '#111827' },
        },
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          number: { value: isMobile ? 40 : 80, density: { enable: true, value_area: 800 } },
          color: { value: ['#4ade80', '#f472b6', '#ffffff'] },
          shape: { type: ['circle', 'triangle'] },
          opacity: { value: 0.6, random: true },
          size: { value: 4, random: true, anim: { enable: true, speed: 15 } },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            attract: { enable: true, rotateX: 800, rotateY: 1200 }
          },
          links: {
            enable: true,
            distance: 180,
            color: '#4ade80',
            opacity: 0.3,
            width: 1
          }
        },
        interactivity: {
          events: {
            onhover: { enable: !isMobile, mode: 'attract' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            attract: { distance: 200, duration: 0.4, factor: 5 },
            push: { quantity: 6 }
          }
        },
        detectRetina: true
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;