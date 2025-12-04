import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';
import { MENU_ITEMS } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=2500&auto=format&fit=crop" 
            alt="Delicious Sandwich" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-transparent to-dark-900/80"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 mt-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cherry-600/20 border border-cherry-500/30 backdrop-blur-md">
            <span className="text-cherry-400 font-bold tracking-widest text-xs uppercase">Est. 1993 • Open 24 Hours</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            ICONIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cherry-500 to-orange-500">FLAVOR</span> <br />
            LEGENDARY <span className="text-white">TASTE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            West Hempstead’s premier destination. Famous for <span className="font-bold text-white">The Chicken Sandwich (TCS)</span> and over 20 signature heroes crafted to perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate('ORDER')}
              className="group relative px-8 py-4 bg-cherry-600 rounded-full font-bold text-white shadow-xl shadow-cherry-600/20 overflow-hidden transition-all hover:scale-105 hover:shadow-cherry-600/40 w-64 sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Order <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => onNavigate('MENU')}
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 w-64 sm:w-auto"
            >
              View Full Menu
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Info Panel */}
      <InfoPanel />

      {/* Quick Featured Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-display font-bold text-slate-900">Fan Favorites</h2>
            <button onClick={() => onNavigate('MENU')} className="text-cherry-600 font-bold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map(item => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all" onClick={() => onNavigate('MENU')}>
                <img src={item.imageUrl} alt={item.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{item.name}</h3>
                  <p className="text-cherry-400 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;