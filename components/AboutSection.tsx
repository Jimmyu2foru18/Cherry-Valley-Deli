import React from 'react';
import { Clock, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 text-white overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cherry-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Kitchen Staff" 
                className="rounded-2xl shadow-2xl transform translate-y-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1509722747741-090d8984c16d?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Hero Sandwich" 
                className="rounded-2xl shadow-2xl transform -translate-y-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cherry-600 p-8 rounded-full shadow-2xl shadow-cherry-900/50 flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 text-center animate-pulse-slow">
              <span className="text-4xl md:text-5xl font-display font-bold">32</span>
              <span className="text-xs uppercase tracking-wider font-medium">Years of Excellence</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-cherry-500 font-bold uppercase tracking-widest mb-2">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                BROTHERS,<br />
                <span className="text-gray-400">PARTNERS,</span><br />
                SANDWICH LEGENDS.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cherry Valley was founded 32 years ago by brothers Max, Tony, Danny & Joe. 
                What started as a humble corner deli has transformed into a West Hempstead institution.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From the legendary <strong className="text-white">Chicken Sandwich (TCS)</strong>, they’ve crafted more than twenty signature heroes, wraps, rolls, and appetizers — with new creations always on the way. We don't just make sandwiches; we make memories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <Clock className="text-cherry-500 mb-1" size={24} />
                <span className="font-bold text-lg">24/7 Service</span>
                <span className="text-sm text-gray-400">Always open when you need us.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="text-cherry-500 mb-1" size={24} />
                <span className="font-bold text-lg">Top Rated</span>
                <span className="text-sm text-gray-400">Voted Best Deli in West Hempstead.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="text-cherry-500 mb-1" size={24} />
                <span className="font-bold text-lg">Family Owned</span>
                <span className="text-sm text-gray-400">Serving our community for decades.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;