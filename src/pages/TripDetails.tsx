import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, MapPin, Clock, Users, Calendar, Shield, Wifi, Car, 
  UtensilsCrossed, Camera, ArrowRight, Heart, Share2, Check 
} from 'lucide-react';

const TripDetails: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in real app, fetch based on ID
  const trip = {
    id: 1,
    name: 'Goa Beach Paradise',
    location: 'Goa, India',
    price: 12999,
    originalPrice: 15999,
    duration: '4 Days 3 Nights',
    groupSize: '6-12 people',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'Experience the perfect beach getaway with pristine shores, vibrant culture, and unforgettable sunsets. This carefully crafted itinerary combines relaxation with adventure.',
    highlights: [
      'Stay in beachfront resorts',
      'Water sports activities',
      'Sunset cruise experience',
      'Local cuisine tasting',
      'Beach parties and nightlife',
      'Spice plantation visit',
    ],
    inclusions: [
      'Accommodation in 3-star beach resort',
      'Daily breakfast and dinner',
      'Airport transfers',
      'Sightseeing as per itinerary',
      'Professional tour guide',
      'Water sports activities',
    ],
    exclusions: [
      'Airfare to/from Goa',
      'Personal expenses',
      'Lunch (except mentioned)',
      'Travel insurance',
      'Any additional activities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Welcome',
        activities: [
          'Arrival at Goa Airport',
          'Transfer to beach resort',
          'Check-in and welcome drinks',
          'Evening at Calangute Beach',
          'Welcome dinner with local music',
        ],
      },
      {
        day: 2,
        title: 'Water Sports & Adventure',
        activities: [
          'Breakfast at resort',
          'Water sports at Baga Beach',
          'Parasailing and jet skiing',
          'Lunch at beach shack',
          'Explore Anjuna Flea Market',
          'Sunset at Vagator Beach',
        ],
      },
      {
        day: 3,
        title: 'Culture & Heritage',
        activities: [
          'Visit to Old Goa churches',
          'Spice plantation tour',
          'Traditional Goan lunch',
          'Cruise on Mandovi River',
          'Casino experience (optional)',
          'Beach party night',
        ],
      },
      {
        day: 4,
        title: 'Departure',
        activities: [
          'Leisure breakfast',
          'Last-minute shopping',
          'Check-out from resort',
          'Transfer to airport',
          'Departure with memories',
        ],
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Amazing trip! The beaches were pristine and the water sports were thrilling. Our guide was very knowledgeable.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Rahul Patel',
      rating: 5,
      date: '1 month ago',
      comment: 'Perfect blend of relaxation and adventure. The sunset cruise was absolutely magical!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Sneha Reddy',
      rating: 4,
      date: '2 months ago',
      comment: 'Great experience overall. The spice plantation visit was educational and fun. Would recommend!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Image Gallery */}
      <div className="relative">
        <div className="h-96 md:h-[500px] overflow-hidden">
          <img
            src={trip.images[selectedImage]}
            alt={trip.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Back Button */}
          <Link
            to="/destinations"
            className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-earth-800 px-4 py-2 rounded-lg font-roboto font-medium hover:bg-white transition-colors"
          >
            ← Back to Destinations
          </Link>
          
          {/* Share & Favorite */}
          <div className="absolute top-6 right-6 flex space-x-2">
            <button className="bg-white/90 backdrop-blur-sm p-3 rounded-lg hover:bg-white transition-colors">
              <Heart className="h-5 w-5 text-gray-700" />
            </button>
            <button className="bg-white/90 backdrop-blur-sm p-3 rounded-lg hover:bg-white transition-colors">
              <Share2 className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {trip.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                selectedImage === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Trip Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-up">
              <div className="flex items-center text-gray-500 text-sm font-roboto mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {trip.location}
              </div>
              
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-earth-800 mb-4">
                {trip.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(trip.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-roboto font-medium ml-2">{trip.rating}</span>
                  <span className="font-roboto text-gray-600 ml-1">({trip.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center text-gray-600 font-roboto">
                  <Clock className="h-4 w-4 mr-1" />
                  {trip.duration}
                </div>
                
                <div className="flex items-center text-gray-600 font-roboto">
                  <Users className="h-4 w-4 mr-1" />
                  {trip.groupSize}
                </div>
              </div>
              
              <p className="font-roboto text-gray-700 leading-relaxed">
                {trip.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-6 animate-slide-up">
              <div className="border-b border-gray-200">
                <div className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 font-roboto font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-earth-600 text-earth-600'
                          : 'border-transparent text-gray-600 hover:text-earth-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-poppins font-semibold text-xl text-earth-800 mb-4">
                        Trip Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {trip.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-roboto text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                      <div className="text-center">
                        <Shield className="h-8 w-8 text-earth-600 mx-auto mb-2" />
                        <span className="font-roboto text-sm text-gray-600">Safe & Secure</span>
                      </div>
                      <div className="text-center">
                        <Car className="h-8 w-8 text-earth-600 mx-auto mb-2" />
                        <span className="font-roboto text-sm text-gray-600">Transport</span>
                      </div>
                      <div className="text-center">
                        <UtensilsCrossed className="h-8 w-8 text-earth-600 mx-auto mb-2" />
                        <span className="font-roboto text-sm text-gray-600">Meals</span>
                      </div>
                      <div className="text-center">
                        <Camera className="h-8 w-8 text-earth-600 mx-auto mb-2" />
                        <span className="font-roboto text-sm text-gray-600">Photo Ops</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    {trip.itinerary.map((day, index) => (
                      <div key={day.day} className="border-l-4 border-earth-200 pl-6 pb-6 last:pb-0">
                        <div className="flex items-center mb-3">
                          <div className="bg-earth-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-roboto font-bold text-sm -ml-10 mr-4">
                            {day.day}
                          </div>
                          <h3 className="font-poppins font-semibold text-lg text-earth-800">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="font-roboto text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Inclusions Tab */}
                {activeTab === 'inclusions' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-green-700 mb-4">
                        ✅ What's Included
                      </h3>
                      <ul className="space-y-2">
                        {trip.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="font-roboto text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-red-700 mb-4">
                        ❌ Not Included
                      </h3>
                      <ul className="space-y-2">
                        {trip.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-3 mt-0.5">×</span>
                            <span className="font-roboto text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-poppins font-semibold text-lg text-earth-800">
                        Customer Reviews ({trip.reviews})
                      </h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(trip.rating)
                                  ? 'text-yellow-500 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-roboto font-bold text-lg ml-2">{trip.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-roboto font-semibold text-earth-800">
                                  {review.name}
                                </h4>
                                <span className="font-roboto text-sm text-gray-500">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'text-yellow-500 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="font-roboto text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 animate-slide-in-right">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="font-poppins font-bold text-3xl text-earth-600">
                    ₹{trip.price.toLocaleString()}
                  </span>
                  <span className="font-roboto text-lg text-gray-500 line-through">
                    ₹{trip.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="font-roboto text-sm text-gray-600">per person</p>
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-roboto font-medium inline-block mt-2">
                  Save ₹{trip.originalPrice - trip.price}
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block font-roboto font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block font-roboto font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-earth-500 focus:border-earth-500">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>
              
              <Link
                to={`/book/${trip.id}`}
                className="w-full bg-earth-600 hover:bg-earth-700 text-white py-4 px-6 rounded-lg font-roboto font-semibold text-lg transition-colors duration-300 flex items-center justify-center group mb-4"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="text-center">
                <p className="font-roboto text-sm text-gray-600 mb-2">
                  🔒 Secure booking • No hidden fees
                </p>
                <p className="font-roboto text-sm text-gray-600">
                  Free cancellation up to 24 hours before trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;