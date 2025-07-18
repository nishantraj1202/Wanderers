import React, { useState } from 'react';
import { Calendar, MapPin, Star, Clock, CreditCard, User, Settings, LogOut, Heart, Camera } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    memberSince: 'January 2024',
    totalTrips: 3,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  };

  const bookings = [
    {
      id: 1,
      destination: 'Goa Beach Paradise',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
      dates: 'March 15-19, 2024',
      status: 'confirmed',
      amount: 12999,
      travelers: 2,
      bookingRef: 'WC001234',
    },
    {
      id: 2,
      destination: 'Manali Adventure',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400',
      dates: 'April 20-25, 2024',
      status: 'pending',
      amount: 15999,
      travelers: 1,
      bookingRef: 'WC001235',
    },
    {
      id: 3,
      destination: 'Kerala Backwaters',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
      dates: 'December 10-16, 2023',
      status: 'completed',
      amount: 18999,
      travelers: 2,
      bookingRef: 'WC001200',
      rating: 5,
    },
  ];

  const savedDestinations = [
    {
      id: 1,
      name: 'Rajasthan Royal',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 21999,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Ladakh Expedition',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 28999,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Andaman Islands',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 24999,
      rating: 4.7,
    },
  ];

  const tabs = [
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'saved', label: 'Saved Trips', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-cream-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h1 className="font-poppins font-bold text-2xl text-earth-800 mb-1">
                  Welcome back, {user.name}!
                </h1>
                <p className="font-roboto text-gray-600 mb-2">
                  Member since {user.memberSince}
                </p>
                <div className="flex items-center space-x-6 text-sm font-roboto text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {user.totalTrips} trips completed
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    Gold Member
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-poppins font-bold text-2xl text-earth-600">₹45,997</div>
                <div className="font-roboto text-sm text-gray-600">Total spent</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-roboto font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-earth-100 text-earth-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-earth-600'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
                <hr className="my-4" />
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-roboto font-medium text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* My Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="font-poppins font-bold text-2xl text-earth-800">My Bookings</h2>
                
                {bookings.map((booking, index) => (
                  <div 
                    key={booking.id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={booking.image}
                          alt={booking.destination}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-poppins font-semibold text-xl text-earth-800 mb-2">
                              {booking.destination}
                            </h3>
                            <div className="flex items-center text-gray-600 font-roboto mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              {booking.dates}
                            </div>
                            <div className="flex items-center text-gray-600 font-roboto">
                              <User className="h-4 w-4 mr-2" />
                              {booking.travelers} traveler{booking.travelers > 1 ? 's' : ''}
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-roboto font-medium capitalize ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-poppins font-bold text-xl text-earth-600">
                              ₹{booking.amount.toLocaleString()}
                            </div>
                            <div className="font-roboto text-sm text-gray-600">
                              Booking Ref: {booking.bookingRef}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            {booking.status === 'completed' && booking.rating && (
                              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                                <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                                <span className="font-roboto text-sm font-medium">{booking.rating}</span>
                              </div>
                            )}
                            <button className="bg-earth-600 hover:bg-earth-700 text-white px-4 py-2 rounded-lg font-roboto font-medium transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved Trips Tab */}
            {activeTab === 'saved' && (
              <div className="animate-slide-up">
                <h2 className="font-poppins font-bold text-2xl text-earth-800 mb-6">Saved Destinations</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedDestinations.map((destination, index) => (
                    <div 
                      key={destination.id} 
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="relative">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-48 object-cover"
                        />
                        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                          <Heart className="h-5 w-5 text-red-500 fill-current" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                          {destination.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <div className="font-poppins font-bold text-earth-600">
                            ₹{destination.price.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-roboto text-sm">{destination.rating}</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-earth-600 hover:bg-earth-700 text-white py-2 px-4 rounded-lg font-roboto font-medium transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="animate-slide-up">
                <h2 className="font-poppins font-bold text-2xl text-earth-800 mb-6">Profile Information</h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={user.phone}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto resize-none"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="animate-slide-up">
                <h2 className="font-poppins font-bold text-2xl text-earth-800 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-4">
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Email Notifications</div>
                          <div className="font-roboto text-sm text-gray-600">Receive booking confirmations and updates</div>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 text-earth-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">SMS Notifications</div>
                          <div className="font-roboto text-sm text-gray-600">Get trip reminders and alerts</div>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 text-earth-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Marketing Emails</div>
                          <div className="font-roboto text-sm text-gray-600">Special offers and travel deals</div>
                        </div>
                        <input type="checkbox" className="h-5 w-5 text-earth-600" />
                      </div>
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-4">
                      Privacy Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Profile Visibility</div>
                          <div className="font-roboto text-sm text-gray-600">Make your profile visible to other travelers</div>
                        </div>
                        <input type="checkbox" className="h-5 w-5 text-earth-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Trip Sharing</div>
                          <div className="font-roboto text-sm text-gray-600">Allow sharing of your trip experiences</div>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 text-earth-600" />
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-4">
                      Security
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-roboto font-medium text-gray-800">Change Password</div>
                        <div className="font-roboto text-sm text-gray-600">Update your account password</div>
                      </button>
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-roboto font-medium text-gray-800">Two-Factor Authentication</div>
                        <div className="font-roboto text-sm text-gray-600">Add an extra layer of security</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;