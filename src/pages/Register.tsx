import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, MapPin, User, Phone } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions!');
      return;
    }
    console.log('Registration submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-slide-up">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-10 w-10 text-black" />
            <div>
              <span className="font-mono font-bold text-2xl text-black underline">Wanderers Club</span>
              <p className="text-sm text-black font-mono">Travel With No Regrets</p>
            </div>
          </Link>
          <h2 className="font-mono font-extrabold text-3xl text-black mb-2">Join the Adventure!</h2>
          <p className="font-mono text-black">Create your account and start exploring amazing destinations</p>
        </div>

        <div className="bg-orange-100 border-4 border-black shadow-[6px_6px_0_#000] p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-none bg-white font-mono"
                  placeholder="First name"
                />
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-4 border-black rounded-none bg-white font-mono"
                placeholder="Last name"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-none bg-white font-mono"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-none bg-white font-mono"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-12 py-3 border-4 border-black rounded-none bg-white font-mono"
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-12 py-3 border-4 border-black rounded-none bg-white font-mono"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="space-y-3 text-sm text-black">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 mr-2 border-2 border-black"
                />
                I agree to the <a href="#" className="underline ml-1">Terms</a> and <a href="#" className="underline ml-1">Privacy</a>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                  className="mt-1 mr-2 border-2 border-black"
                />
                Subscribe to our newsletter
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 border-4 border-black rounded-none font-mono font-bold text-lg transition-transform hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_#000]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
