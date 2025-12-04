import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Briefcase, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <span className="font-display font-bold text-3xl tracking-wider uppercase text-white cursor-pointer" onClick={() => onNavigate('HOME')}>
              Cherry<span className="text-cherry-600">Valley</span>Deli
            </span>
            <p className="text-gray-400 leading-relaxed">
              West Hempstead's favorite spot for heroes, wraps, and late-night cravings since 1993.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cherry-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cherry-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cherry-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNavigate('MENU')} className="hover:text-cherry-500 transition-colors">Menu</button></li>
              <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-cherry-500 transition-colors">Our Story</button></li>
              <li><button onClick={() => onNavigate('REVIEWS')} className="hover:text-cherry-500 transition-colors">Reviews</button></li>
              <li><button onClick={() => onNavigate('ORDER')} className="hover:text-cherry-500 transition-colors">Order Online</button></li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-lg font-bold mb-6">Corporate</h4>
             <ul className="space-y-4 text-gray-400">
              <li>
                <button onClick={() => onNavigate('CAREERS')} className="hover:text-cherry-500 transition-colors flex items-center gap-2">
                  <Briefcase size={16} /> Careers / Jobs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('LOGIN')} className="hover:text-cherry-500 transition-colors flex items-center gap-2">
                  <Lock size={16} /> Employee Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Map Preview */}
          <div onClick={() => onNavigate('LOCATION')} className="cursor-pointer">
             <h4 className="text-lg font-bold mb-6">Location</h4>
             <div className="h-40 w-full bg-gray-800 rounded-xl overflow-hidden relative group border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7787494541785!2d-73.65306868459468!3d40.70618097933256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262eb7e9c5a15%3A0x6b6e4d6e9d6e9d6e!2s168%20Hempstead%20Tpke%2C%20West%20Hempstead%2C%20NY%2011552!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
             </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Cherry Valley Deli Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;