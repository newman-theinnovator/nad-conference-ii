import React from 'react';
import CountdownTimer from 'react-countdown';

const Countdown = () => {
  const eventDate = new Date('2026-06-23T00:00:00');
  return (
    <div className="text-3xl font-bold text-red-400 mb-6">
      <CountdownTimer date={eventDate}>
        {({ days, hours, minutes, seconds }) => (
          <span>{days} days {hours}h {minutes}m {seconds}s left!</span>
        )}
      </CountdownTimer>
    </div>
  );
};

export default Countdown;