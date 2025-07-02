import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/menu', label: 'Menu' },
    { path: '/events', label: 'Événements' },
    { path: '/reservations', label: 'Réservation' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="brush-script logo-medium text-secondary hover:text-white transition-colors font-light">
              La Finestra
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-sans text-sm uppercase tracking-wide transition-colors hover:text-secondary ${
                    location.pathname === item.path ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-secondary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
        <nav className={`absolute top-0 right-0 h-full w-80 bg-primary shadow-xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-20 px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-4 font-sans text-lg transition-colors hover:text-secondary ${
                  location.pathname === item.path ? 'text-secondary border-l-4 border-secondary pl-4' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;