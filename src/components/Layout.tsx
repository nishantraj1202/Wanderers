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
    { name: 'Adventure Sites', href: '/adventure-destinations' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#fefae0] text-black">
  {/* Navigation */}
  <nav className="bg-yellow-500 border-b-4 border-black shadow-[4px_4px_0_0_black] sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <MapPin className="h-8 w-8 text-black group-hover:text-red-600 transition-colors" />
          <div>
            <span className="font-poppins font-bold text-xl">Wanderers Club</span>
            <p className="text-xs text-black font-roboto">Travel With No Regrets</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-roboto font-bold transition-all duration-200 border-b-4 ${
                isActive(item.href) ? 'border-black text-black' : 'border-transparent text-black hover:border-black hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 text-black hover:text-red-600 font-bold"
              >
                <User className="h-4 w-4" />
                <span className="font-roboto">Dashboard</span>
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center space-x-1 text-black hover:text-red-600 font-bold"
              >
                <LogOut className="h-4 w-4" />
                <span className="font-roboto">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="font-roboto text-black hover:text-red-600 font-bold">
                Login
              </Link>
              <Link to="/register" className="bg-black text-white px-4 py-2 rounded-md font-roboto font-bold shadow-[2px_2px_0_0_black] hover:bg-red-700 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-black hover:bg-yellow-200 transition"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden bg-yellow-200 border-t-4 border-black">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md font-roboto font-bold ${
                isActive(item.href) ? 'bg-red-200 text-black border-l-4 border-black' : 'hover:bg-yellow-300 text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-black hover:bg-yellow-300 font-roboto font-bold" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <button onClick={() => { setIsLoggedIn(false); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-black hover:text-red-600 hover:bg-yellow-300 font-roboto font-bold">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 rounded-md text-black hover:bg-yellow-300 font-roboto font-bold" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 rounded-md bg-black text-white font-roboto font-bold hover:bg-red-700" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    )}
  </nav>

  {/* Main Content */}
  <main className="flex-1 animate-fade-in-up">
    {children}
  </main>

  {/* Footer */}
  <footer className="bg-black text-white border-t-4 border-yellow-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-yellow-300" />
            <span className="font-poppins font-bold text-lg">Wanderers Club</span>
          </div>
          <p className="text-white/80 font-roboto">Your trusted companion for unforgettable journeys. Travel with no regrets.</p>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 font-roboto">
            <li><Link to="/destinations" className="hover:text-yellow-300 transition">Destinations</Link></li>
            <li><Link to="/adventure-destinations" className="hover:text-yellow-300 transition">Adventure Sites</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300 transition">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-yellow-300 transition">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2 font-roboto">
            <li><a href="#" className="hover:text-yellow-300 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-lg mb-4">Contact Info</h3>
          <div className="space-y-2 font-roboto text-white/80">
            <p>📧 hello@wanderersclub.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Mumbai, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-500 mt-8 pt-8 text-center">
        <p className="text-white/70 font-roboto">
          © 2025 Wanderers Club. All rights reserved. Made with ❤️ for travelers.
        </p>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Layout;