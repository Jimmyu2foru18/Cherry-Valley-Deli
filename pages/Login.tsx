import React, { useState } from 'react';
import { Lock, ArrowRight, User } from 'lucide-react';
import { Page } from '../types';

interface LoginProps {
  onLoginSuccess: (isAdmin: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Authentication Logic
    if (username === 'admin' && password === 'admin') {
      onLoginSuccess(true);
    } else if (username === 'user' && password === 'user') {
      onLoginSuccess(false);
    } else {
      setError('Invalid credentials. Try admin/admin or user/user');
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4 animate-fade-in-up">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-cherry-600 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Lock className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold text-white">Employee Portal</h2>
          <p className="text-cherry-100 mt-2">Authorized Access Only</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Username / Employee ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cherry-500"
                  placeholder="Enter ID"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cherry-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

            <button type="submit" className="w-full bg-dark-900 hover:bg-dark-800 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              Login <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-100 pt-4">
            <p>Protected by Cherry Valley Security System v2.0</p>
            <p>If you forgot your password, contact your manager.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;