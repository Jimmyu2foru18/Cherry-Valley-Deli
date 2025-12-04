import React, { useState, useMemo } from 'react';
import { Search, Flame, Star, Tag } from 'lucide-react';
import { Category, MenuItem } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === Category.ALL || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            OUR <span className="text-cherry-600">MENU</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From our legendary heroes to fresh salads, we craft every meal with premium ingredients.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-center sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 border-b border-gray-200">
          
          {/* Category Pills */}
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

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cherry-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-slate-500">No items found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory(Category.ALL)}}
                className="mt-4 text-cherry-600 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-cherry-900/10 transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges */}
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
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-cherry-600 transition-colors leading-tight">
              {item.name}
            </h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
           <a href="#ordering" className="w-full block text-center bg-gray-50 hover:bg-cherry-600 text-slate-700 hover:text-white font-bold py-3 rounded-xl transition-all">
             Add to Order
           </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;