import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Users, Filter, Search, UserPlus, ExternalLink, Heart, Settings, Car } from 'lucide-react';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showGroupBookingModal, setShowGroupBookingModal] = useState(false);

  const destinations = [
    {
      id: 1,
      name: 'Goa Beach Paradise',
      location: 'Goa, India',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 12999,
      originalPrice: 15999,
      duration: '4 Days 3 Nights',
      groupSize: '6-12 people',
      rating: 4.8,
      reviews: 124,
      category: 'beach',
      highlights: ['Beach Activities', 'Water Sports', 'Nightlife', 'Local Cuisine'],
      description: 'Experience the perfect beach getaway with pristine shores, vibrant culture, and unforgettable sunsets.',
    },
    {
      id: 2,
      name: 'Manali Adventure',
      location: 'Himachal Pradesh, India',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 15999,
      originalPrice: 19999,
      duration: '5 Days 4 Nights',
      groupSize: '8-15 people',
      rating: 4.9,
      reviews: 89,
      category: 'mountain',
      highlights: ['Trekking', 'Adventure Sports', 'Snow Activities', 'Mountain Views'],
      description: 'Embrace the thrill of the mountains with adventure activities and breathtaking Himalayan views.',
    },
    {
      id: 3,
      name: 'Amritsar Heritage',
      location: 'Punjab, India',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 8999,
      originalPrice: 11999,
      duration: '3 Days 2 Nights',
      groupSize: '10-20 people',
      rating: 4.7,
      reviews: 156,
      category: 'cultural',
      highlights: ['Golden Temple', 'Wagah Border', 'Local Food', 'History Tours'],
      description: 'Immerse yourself in rich Sikh culture, spirituality, and the legendary hospitality of Punjab.',
    },
    {
      id: 4,
      name: 'Kerala Backwaters',
      location: 'Kerala, India',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 18999,
      originalPrice: 22999,
      duration: '6 Days 5 Nights',
      groupSize: '4-10 people',
      rating: 4.9,
      reviews: 203,
      category: 'nature',
      highlights: ['Houseboat Stay', 'Ayurveda', 'Spice Gardens', 'Wildlife'],
      description: 'Cruise through serene backwaters, experience Ayurvedic treatments, and discover Gods Own Country.',
    },
    {
      id: 5,
      name: 'Rajasthan Royal',
      location: 'Rajasthan, India',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 21999,
      originalPrice: 26999,
      duration: '7 Days 6 Nights',
      groupSize: '8-16 people',
      rating: 4.8,
      reviews: 167,
      category: 'cultural',
      highlights: ['Palace Hotels', 'Desert Safari', 'Folk Culture', 'Architecture'],
      description: 'Live like royalty in magnificent palaces and experience the grandeur of the desert state.',
    },
    {
      id: 6,
      name: 'Ladakh Expedition',
      location: 'Ladakh, India',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 28999,
      originalPrice: 34999,
      duration: '8 Days 7 Nights',
      groupSize: '6-12 people',
      rating: 4.9,
      reviews: 91,
      category: 'adventure',
      highlights: ['High Altitude', 'Monasteries', 'Bike Rides', 'Camping'],
      description: 'Conquer the rugged terrain of Little Tibet and witness landscapes that defy imagination.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Destinations' },
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'nature', label: 'Nature' },
    { value: 'adventure', label: 'Adventure' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under ₹15,000' },
    { value: 'mid', label: '₹15,000 - ₹25,000' },
    { value: 'premium', label: 'Above ₹25,000' },
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && destination.price < 15000) ||
                        (priceRange === 'mid' && destination.price >= 15000 && destination.price <= 25000) ||
                        (priceRange === 'premium' && destination.price > 25000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleGroupBooking = () => {
    // Generate Google Form URL with pre-filled data
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform?usp=pp_url&entry.123456789=Group+Booking+Request&entry.987654321=" + encodeURIComponent(window.location.href);
    window.open(formUrl, '_blank');
    setShowGroupBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-earth-800 mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            From pristine beaches to majestic mountains, explore handpicked destinations that promise unforgettable experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-slide-up">
          {/* Service Type Selection */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-4">
              Choose Your Travel Service
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <Users className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Group Tours</span>
              </button>
              
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <Heart className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Family</span>
              </button>
              
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <Star className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Religious</span>
              </button>
              
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <MapPin className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Foreign</span>
              </button>
              
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <Settings className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Customized</span>
              </button>
              
              <button className="flex flex-col items-center p-3 border-2 border-earth-200 rounded-lg hover:border-earth-500 hover:bg-earth-50 transition-all duration-300 group">
                <Car className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-roboto text-sm font-medium text-gray-700 group-hover:text-earth-700">Car Rental</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto appearance-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Group Booking Button */}
            <button
              onClick={() => setShowGroupBookingModal(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-all duration-300 flex items-center justify-center group transform hover:scale-105"
            >
              <UserPlus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Group Booking (10+)
            </button>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 animate-slide-up">
          <p className="font-roboto text-gray-600">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
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
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-roboto font-medium">
                  Save ₹{destination.originalPrice - destination.price}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-roboto text-sm font-medium">{destination.rating}</span>
                    <span className="font-roboto text-xs text-gray-600">({destination.reviews})</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm font-roboto mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {destination.location}
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-earth-800 mb-2">
                  {destination.name}
                </h3>
                
                <p className="font-roboto text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight, idx) => (
                    <span key={idx} className="bg-sage-100 text-sage-700 px-2 py-1 rounded-full text-xs font-roboto">
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-roboto">
                      +{destination.highlights.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm font-roboto text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {destination.groupSize}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-poppins font-bold text-2xl text-earth-600">
                      ₹{destination.price.toLocaleString()}
                    </span>
                    <span className="font-roboto text-sm text-gray-500 line-through ml-2">
                      ₹{destination.originalPrice.toLocaleString()}
                    </span>
                    <div className="font-roboto text-xs text-gray-500">per person</div>
                  </div>
                </div>
                
                <Link
                  to={`/trip/${destination.id}`}
                  className="w-full bg-earth-600 hover:bg-earth-700 text-white py-3 px-4 rounded-lg font-roboto font-medium transition-colors duration-300 flex items-center justify-center group"
                >
                  View Details & Book
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12 animate-slide-up">
            <div className="text-gray-400 mb-4">
              <MapPin className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-gray-600 mb-2">
              No destinations found
            </h3>
            <p className="font-roboto text-gray-500 mb-4">
              Try adjusting your search criteria or clearing the filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Group Booking Modal */}
        {showGroupBookingModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <UserPlus className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-earth-800 mb-2">
                  Group Booking Request
                </h3>
                <p className="font-roboto text-gray-600">
                  Planning a trip for 10+ people? Let us create a custom package for your group!
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-roboto font-semibold text-purple-800 mb-2">
                    What you'll get:
                  </h4>
                  <ul className="space-y-1 text-sm font-roboto text-purple-700">
                    <li>• Custom itinerary planning</li>
                    <li>• Special group discounts</li>
                    <li>• Dedicated trip coordinator</li>
                    <li>• Flexible payment options</li>
                    <li>• 24/7 support during travel</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center text-green-800 mb-2">
                    <span className="font-roboto font-semibold">Quick Response Guarantee</span>
                  </div>
                  <p className="text-sm font-roboto text-green-700">
                    Our team will contact you within 2 hours to discuss your requirements
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowGroupBookingModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-roboto font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGroupBooking}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-roboto font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Open Form</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs font-roboto text-gray-500">
                  You'll be redirected to a secure Google Form to submit your group booking request
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;