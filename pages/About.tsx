import React from 'react';
import { Clock, Award, Users, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const timelineEvents = [
    { year: '1993', title: 'The Beginning', desc: 'Brothers Max, Tony, Danny & Joe open Cherry Valley Deli in West Hempstead.' },
    { year: '1998', title: 'The TCS is Born', desc: 'The Chicken Sandwich (TCS) is added to the menu and instantly becomes a local legend.' },
    { year: '2010', title: '24/7 Service', desc: 'To serve the late-night community, we expand our hours to stay open 24 hours a day, 7 days a week.' },
    { year: '2025', title: 'The Modern Era', desc: 'Celebrating 32 years of excellence with a new digital experience and the same great taste.' }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-20 animate-fade-in-up">
      <div className="relative overflow-hidden py-20">
         <div className="absolute top-0 right-0 w-96 h-96 bg-cherry-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">OUR STORY</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                More than just a deli. We are a family tradition, a late-night refuge, and the home of West Hempstead's favorite flavors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
               <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Kitchen Staff" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold text-cherry-500">Brothers & Partners</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Cherry Valley was founded 32 years ago by brothers Max, Tony, Danny & Joe. 
                  What started as a humble corner deli has transformed into an institution. 
                  From the legendary TCS to over twenty signature heroes, we craft everything with passion.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <Users className="text-cherry-500 mb-2" />
                    <h4 className="font-bold">Family Owned</h4>
                    <p className="text-sm text-gray-400">Locally operated since day one.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <Clock className="text-cherry-500 mb-2" />
                    <h4 className="font-bold">Always Open</h4>
                    <p className="text-sm text-gray-400">Serving you 24/7/365.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Feature */}
            <div className="relative py-12">
              <h2 className="text-3xl font-display font-bold text-center mb-12">Through The Years</h2>
              <div className="absolute left-1/2 w-0.5 bg-gradient-to-b from-transparent via-cherry-600 to-transparent h-full -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`flex items-center justify-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 flex justify-end">
                      <div className={`text-right ${index % 2 !== 0 && 'text-left'}`}>
                        {index % 2 === 0 && (
                          <>
                            <span className="text-4xl font-display font-bold text-cherry-500 block mb-2">{event.year}</span>
                            <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                            <p className="text-gray-400">{event.desc}</p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-4 h-4 rounded-full bg-cherry-500 shadow-[0_0_15px_rgba(225,29,72,0.8)]"></div>
                    
                    <div className="w-1/2">
                      <div className={`text-left ${index % 2 !== 0 && 'text-right'}`}>
                        {index % 2 !== 0 && (
                          <>
                            <span className="text-4xl font-display font-bold text-cherry-500 block mb-2">{event.year}</span>
                            <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                            <p className="text-gray-400">{event.desc}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;