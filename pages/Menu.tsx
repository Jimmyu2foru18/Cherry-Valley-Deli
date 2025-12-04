import React, { useState, useMemo } from 'react';
import { Search, Flame, Star, X, ShoppingBag } from 'lucide-react';
import { Category, MenuItem } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === Category.ALL || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOrder = (platform: 'grubhub' | 'seamless') => {
    // In a real app, these would be deep links to the specific item
    const url = platform === 'grubhub' 
      ? 'https://www.grubhub.com/restaurant/cherry-valley-deli-inc-168-hempstead-tpke-west-hempstead/259478' 
      : 'https://www.seamless.com';
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fade-in-up">
      <div className="bg-dark-900 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">OUR MENU</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our extensive selection of heroes, wraps, and grill favorites.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Search & Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 justify-between items-center sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 border-b border-gray-200 transition-all">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            <button
              onClick={() => setActiveCategory(Category.ALL)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === Category.ALL
                  ? 'bg-cherry-600 text-white shadow-lg shadow-cherry-600/30'
                  : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name as Category)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.name
                    ? 'bg-cherry-600 text-white shadow-lg shadow-cherry-600/30'
                    : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cherry-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-cherry-900/10 transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.featured && (
                    <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                      <Star size={12} fill="currentColor" /> Signature
                    </span>
                  )}
                  {item.tags?.includes('Spicy') && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                      <Flame size={12} /> Spicy
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
                  <span className="font-bold text-slate-900">{item.price}</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cherry-600 transition-colors leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-cherry-600">
                  <span>View Details</span>
                  <div className="w-8 h-8 rounded-full bg-cherry-50 flex items-center justify-center group-hover:bg-cherry-600 group-hover:text-white transition-colors">
                    <ShoppingBag size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedItem.imageUrl} alt={selectedItem.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cherry-600">{selectedItem.category}</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">{selectedItem.name}</h2>
                <h3 className="text-2xl font-bold text-slate-700 mb-4">{selectedItem.price}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
                
                {selectedItem.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-slate-600 rounded-full text-xs font-bold border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => handleOrder('grubhub')}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Order on Grubhub
                </button>
                 <button 
                  onClick={() => handleOrder('seamless')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Order on Seamless
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;