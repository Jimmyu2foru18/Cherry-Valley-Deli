import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="text-cherry-600" /> Your Order
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                <ShoppingBag size={64} className="text-gray-200" />
                <p className="text-lg font-medium">Your cart is empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-cherry-600 font-bold hover:underline"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-4 items-start animate-fade-in-up">
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900 line-clamp-2">{item.name}</h4>
                      <p className="font-bold text-slate-900 ml-4">{item.price}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.category}</p>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="mt-2 text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">Estimated Total</span>
                <span className="text-3xl font-display font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
              
              <button className="w-full py-4 bg-cherry-600 hover:bg-cherry-700 text-white font-bold rounded-xl shadow-lg shadow-cherry-600/20 transition-all flex items-center justify-center gap-2 group">
                Checkout Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Prices may vary. Payment collected at pickup/delivery.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartSidebar;