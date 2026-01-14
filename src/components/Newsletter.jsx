import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-secondary relative overflow-hidden" id="newsletter">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-3xl font-bold mb-6 text-white">Stay Connected</h3>
        <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest updates on speakers, schedule changes, and travel information.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full py-3 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/50 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">
          By subscribing, you agree to our Privacy Policy. We promise not to spam.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;