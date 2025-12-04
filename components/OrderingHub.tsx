import React from 'react';
import { ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';

const OrderingHub: React.FC = () => {
  return (
    <section id="ordering" className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cherry-50 to-white"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-cherry-100 rounded-2xl text-cherry-600 mb-6">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            HUNGRY? ORDER NOW.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get your favorites delivered straight to your door or ready for pickup.
            Choose your preferred platform below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* Grubhub Card */}
          <a 
            href="https://www.grubhub.com" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-cherry-200 transition-all duration-300 text-left"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="text-cherry-600" />
            </div>
            <div className="h-16 w-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <span className="text-2xl font-bold text-red-600 group-hover:text-white">GH</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Order on Grubhub</h3>
            <p className="text-slate-500 mb-6">Fast delivery and real-time tracking.</p>
            <span className="inline-flex items-center font-bold text-cherry-600 group-hover:translate-x-2 transition-transform">
              Order Now <ArrowRight size={18} className="ml-2" />
            </span>
          </a>

          {/* Seamless Card */}
          <a 
            href="https://www.seamless.com" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-cherry-200 transition-all duration-300 text-left"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="text-cherry-600" />
            </div>
            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <span className="text-2xl font-bold text-blue-600 group-hover:text-white">SL</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Order on Seamless</h3>
            <p className="text-slate-500 mb-6">Convenient pickup or contactless delivery.</p>
            <span className="inline-flex items-center font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
              Order Now <ArrowRight size={18} className="ml-2" />
            </span>
          </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-400">
          Also available for direct phone orders: <span className="font-bold text-slate-600">(516) 292-3381</span>
        </p>

      </div>
    </section>
  );
};

export default OrderingHub;