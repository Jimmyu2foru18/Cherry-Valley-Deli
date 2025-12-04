import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Page } from '../types';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const navLinks: { name: string; value: Page }[] = [
    { name: 'Home', value: 'HOME' },
    { name: 'Menu', value: 'MENU' },
    { name: 'About', value: 'ABOUT' },
    { name: 'Reviews', value: 'REVIEWS' },
    { name: 'Location', value: 'LOCATION' },
  ];

  const handleNavClick = (page: Page) => {
    setIsOpen(false);
    onNavigate(page);
  };

  const handleCartClick = () => {
    setIsOpen(false);
    setIsCartOpen(true);
  };

  return (
    <nav className="fixed w-full z-40 bg-dark-900/95 backdrop-blur-lg shadow-lg border-b border-white/5 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('HOME')}>
            <span className="font-display font-bold text-2xl tracking-wider uppercase text-white transition-colors hover:text-cherry-500">
              Cherry<span className="text-cherry-600">Valley</span>Deli
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentPage === link.value 
                    ? 'text-cherry-500 font-bold scale-105' 
                    : 'text-gray-300 hover:text-white hover:text-cherry-400'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={handleCartClick}
              className="relative bg-cherry-600 hover:bg-cherry-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-cherry-600/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              My Order
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-cherry-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={handleCartClick}
              className="relative text-white p-2"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-cherry-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-t border-white/10 absolute w-full backdrop-blur-xl h-screen">
          <div className="px-4 pt-8 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value)}
                className={`block px-3 py-3 text-2xl font-display uppercase tracking-widest ${
                  currentPage === link.value ? 'text-cherry-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
             <button 
              onClick={handleCartClick}
              className="w-full max-w-xs mt-8 bg-cherry-600 text-white px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg shadow-xl shadow-cherry-600/20"
            >
              <ShoppingBag size={24} />
              View Order ({cartCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;