import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              COMMUNITY <span className="text-cherry-500">LOVE</span>
            </h2>
            <p className="text-gray-400 text-lg">
              See what our neighbors in West Hempstead are saying.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} fill="#e11d48" className="text-cherry-600" size={24} />
            ))}
            <span className="ml-2 font-bold text-xl">4.8/5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-dark-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 relative group hover:bg-dark-900 transition-colors">
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

      </div>
    </section>
  );
};

export default Reviews;