import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Location: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">FIND US</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Interactive Map & Info */}
          <div className="space-y-8">
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-200">
               <div className="h-96 w-full rounded-2xl overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7787494541785!2d-73.65306868459468!3d40.70618097933256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262eb7e9c5a15%3A0x6b6e4d6e9d6e9d6e!2s168%20Hempstead%20Tpke%2C%20West%20Hempstead%2C%20NY%2011552!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-cherry-600">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-cherry-600" />
                    <h3 className="font-bold text-slate-900">Address</h3>
                  </div>
                  <p className="text-slate-600 pl-9">{BUSINESS_INFO.address}</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-cherry-600">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="text-cherry-600" />
                    <h3 className="font-bold text-slate-900">Phone</h3>
                  </div>
                  <p className="text-slate-600 pl-9 text-lg font-bold">{BUSINESS_INFO.phone}</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            {formSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-12">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle size={32} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                 <p className="text-slate-500 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                 <button onClick={() => setFormSubmitted(false)} className="text-cherry-600 font-bold hover:underline">
                   Send another message
                 </button>
               </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Mail className="text-cherry-600" /> Send us a message
                </h2>
                <p className="text-slate-500 mb-8">Have a question about catering or a special request? Drop us a line.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cherry-500 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cherry-500 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cherry-500 transition-all" placeholder="Tell us what's on your mind..."></textarea>
                  </div>

                  <button className="w-full bg-cherry-600 hover:bg-cherry-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-cherry-600/20 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;