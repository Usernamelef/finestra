import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img
              src="/assets/lafinestra-geneve-logo-blanc.png"
              alt="La Finestra Genève"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 mb-4">
              Une fenêtre sur l'Italie au cœur de Genève depuis 2006. 
              Cuisine traditionnelle italienne dans un cadre chaleureux et authentique.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm">Rue de la Cité 11, 1204 Genève</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary" />
                <span className="text-sm">+41(0)22 312 23 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-secondary" />
                <span className="text-sm">reservation@lafinestra.ch</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lun - Ven:</span>
                <span>12h00 - 14h30</span>
              </div>
              <div className="flex justify-between">
                <span></span>
                <span>19h00 - 22h30</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi:</span>
                <span>19h00 - 22h30</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/lafinestrarestaurant" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/lafinestrarestaurant" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 La Finestra. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Site créé par <a href="https://qora.ch" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">Qora</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;