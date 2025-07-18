import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, User, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <MapPin className="h-8 w-8 text-earth-600 group-hover:text-earth-700 transition-colors" />
              <div>
                <span className="font-poppins font-bold text-xl text-earth-800">Wanderers Club</span>
                <p className="text-xs text-sage-600 font-roboto">Travel With No Regrets</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-roboto font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-earth-600 border-b-2 border-earth-600'
                      : 'text-gray-700 hover:text-earth-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-1 text-gray-700 hover:text-earth-600 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span className="font-roboto">Dashboard</span>
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="font-roboto">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="font-roboto text-gray-700 hover:text-earth-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-earth-600 text-white px-4 py-2 rounded-lg font-roboto font-medium hover:bg-earth-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md font-roboto ${
                    isActive(item.href)
                      ? 'text-earth-600 bg-earth-50'
                      : 'text-gray-700 hover:text-earth-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-earth-600 hover:bg-gray-50 font-roboto"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50 font-roboto"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-earth-600 hover:bg-gray-50 font-roboto"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md bg-earth-600 text-white font-roboto font-medium hover:bg-earth-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-earth-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-earth-400" />
                <span className="font-poppins font-bold text-lg">Wanderers Club</span>
              </div>
              <p className="text-earth-200 font-roboto">
                Your trusted companion for unforgettable journeys. Travel with no regrets.
              </p>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 font-roboto">
                <li><Link to="/destinations" className="text-earth-200 hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/gallery" className="text-earth-200 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/testimonials" className="text-earth-200 hover:text-white transition-colors">Reviews</Link></li>
                <li><Link to="/contact" className="text-earth-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 font-roboto">
                <li><a href="#" className="text-earth-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-earth-200 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-earth-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-earth-200 hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 font-roboto text-earth-200">
                <p>📧 hello@wanderersclub.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Mumbai, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-earth-700 mt-8 pt-8 text-center">
            <p className="text-earth-300 font-roboto">
              © 2025 Wanderers Club. All rights reserved. Made with ❤️ for travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;