import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark-900 text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">COMMUNITY LOVE</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="text-6xl font-bold text-cherry-500">4.8</span>
             <div className="flex flex-col items-start">
               <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} fill="#e11d48" className="text-cherry-600" size={20} />
                  ))}
               </div>
               <span className="text-gray-400 text-sm">Based on 1,200+ ratings</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 relative group hover:bg-white/10 transition-colors">
              <Quote className="absolute top-8 right-8 text-cherry-600/20 group-hover:text-cherry-600/40 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fb7185" className="text-cherry-400" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded bg-white/10 ${
                  review.source === 'Grubhub' ? 'text-red-400' : 'text-blue-400'
                }`}>
                  via {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review CTA */}
        <div className="bg-gradient-to-r from-cherry-900 to-dark-800 rounded-3xl p-12 text-center border border-cherry-900/50">
          <h2 className="text-3xl font-bold mb-4">Tried us recently?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">We'd love to hear about your experience. Leave us a review on your favorite platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-dark-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Review on Google
            </button>
             <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Review on Yelp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;