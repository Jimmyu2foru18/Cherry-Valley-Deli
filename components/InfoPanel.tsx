import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { calculateDistance } from '../services/locationService';

const InfoPanel: React.FC = () => {
  const [distance, setDistance] = useState<number | null>(null);
  const [loadingLoc, setLoadingLoc] = useState(false);

  const handleGetDistance = () => {
    setLoadingLoc(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const miles = calculateDistance(position.coords.latitude, position.coords.longitude);
          setDistance(miles);
          setLoadingLoc(false);
        },
        (error) => {
          console.error("Error getting location", error);
          setLoadingLoc(false);
        }
      );
    } else {
      setLoadingLoc(false);
      alert("Geolocation is not supported by your browser");
    }
  };

  const openDirections = () => {
    const destination = encodeURIComponent(BUSINESS_INFO.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <div className="relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl animate-fade-in-up [animation-delay:800ms]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Address Card */}
        <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform transition hover:-translate-y-1 hover:shadow-cherry-500/10 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Visit Us</h3>
              <p className="text-slate-600 leading-relaxed mb-3">{BUSINESS_INFO.address}</p>
              
              <div className="flex flex-col gap-2">
                {distance !== null ? (
                  <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
                    <Navigation size={14} /> {distance} miles away
                  </p>
                ) : (
                  <button 
                    onClick={handleGetDistance}
                    disabled={loadingLoc}
                    className="text-sm font-bold text-slate-500 hover:text-cherry-600 flex items-center gap-1 transition-colors w-fit"
                  >
                    <Navigation size={14} /> 
                    {loadingLoc ? "Calculating..." : "Calculate Distance"}
                  </button>
                )}
                
                <button 
                  onClick={openDirections}
                  className="text-sm font-bold text-cherry-600 hover:text-cherry-800 flex items-center gap-1 transition-colors mt-1"
                >
                   Get Directions <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Card */}
        <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform transition hover:-translate-y-1 hover:shadow-cherry-500/10 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Open 24/7</h3>
              <p className="text-slate-600 leading-relaxed">
                <span className="block font-semibold">Store: Always Open</span>
                <span className="block text-sm text-slate-500 mt-1">Takeout: 12:00 AM – 11:59 PM</span>
                <span className="block text-sm text-slate-500">Delivery: See apps</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform transition hover:-translate-y-1 hover:shadow-cherry-500/10 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Call Ahead</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Skip the line by calling in your order for pickup.
              </p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-display font-bold text-slate-900 hover:text-cherry-600 transition-colors block">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoPanel;