import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Location from './pages/Location';
import Reviews from './pages/Reviews';
import Order from './pages/Order';
import Careers from './pages/Careers';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (adminStatus: boolean) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
    handleNavigate('DASHBOARD');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    handleNavigate('LOGIN');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={handleNavigate} />;
      case 'MENU':
        return <Menu />;
      case 'ABOUT':
        return <About />;
      case 'LOCATION':
        return <Location />;
      case 'REVIEWS':
        return <Reviews />;
      case 'ORDER':
        return <Order />;
      case 'CAREERS':
        return <Careers />;
      case 'LOGIN':
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case 'DASHBOARD':
        return isAuthenticated ? (
          <Dashboard isAdmin={isAdmin} onLogout={handleLogout} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        );
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  // Hide Navbar/Footer for Dashboard to give it a "SaaS app" feel
  const isDashboard = currentPage === 'DASHBOARD';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!isDashboard && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isDashboard && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;