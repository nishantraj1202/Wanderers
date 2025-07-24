import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, MapPin, Clock, Users, Filter, Search, UserPlus, ExternalLink, Heart,
  Settings, Car, Calendar, User, Phone, Mail, Home, Plane, Camera, Mountain,
  X, ChevronDown, Plus, Minus
} from 'lucide-react';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [activeService, setActiveService] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingType, setBookingType] = useState('');

  // Booking form states
  const [groupBookingForm, setGroupBookingForm] = useState({
    numberOfPeople: 1,
    preferredDate: '',
    arrivalTime: '',
    destination: '',
    accommodation: 'standard',
    activities: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [customTourForm, setCustomTourForm] = useState({
    destinations: [],
    duration: 3,
    numberOfPeople: 1,
    travelDate: '',
    arrivalTime: '',
    experiences: [],
    budget: 'medium',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [carRentalForm, setCarRentalForm] = useState({
    carType: '',
    passengers: 1,
    rentalDays: 1,
    estimatedKm: 100,
    pickupLocation: '',
    dropLocation: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const destinations = [
    {
      id: 1,
      name: 'Goa Beach Paradise',
      location: 'Goa, India',
      state: 'goa',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 12999,
      originalPrice: 15999,
      duration: '4 Days 3 Nights',
      groupSize: '6-12 people',
      rating: 4.8,
      reviews: 124,
      category: 'beach',
      type: 'nature',
      highlights: ['Beach Activities', 'Water Sports', 'Nightlife', 'Local Cuisine'],
      description: 'Experience the perfect beach getaway with pristine shores, vibrant culture, and unforgettable sunsets.',
    },
    {
      id: 2,
      name: 'Manali Adventure',
      location: 'Himachal Pradesh, India',
      state: 'himachal',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 15999,
      originalPrice: 19999,
      duration: '5 Days 4 Nights',
      groupSize: '8-15 people',
      rating: 4.9,
      reviews: 89,
      category: 'mountain',
      type: 'nature',
      highlights: ['Trekking', 'Adventure Sports', 'Snow Activities', 'Mountain Views'],
      description: 'Embrace the thrill of the mountains with adventure activities and breathtaking Himalayan views.',
    },
    {
      id: 3,
      name: 'Golden Temple Amritsar',
      location: 'Punjab, India',
      state: 'punjab',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 8999,
      originalPrice: 11999,
      duration: '3 Days 2 Nights',
      groupSize: '10-20 people',
      rating: 4.7,
      reviews: 156,
      category: 'cultural',
      type: 'religious',
      highlights: ['Golden Temple', 'Wagah Border', 'Local Food', 'History Tours'],
      description: 'Immerse yourself in rich Sikh culture, spirituality, and the legendary hospitality of Punjab.',
    },
    {
      id: 4,
      name: 'Kerala Backwaters',
      location: 'Kerala, India',
      state: 'kerala',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 18999,
      originalPrice: 22999,
      duration: '6 Days 5 Nights',
      groupSize: '4-10 people',
      rating: 4.9,
      reviews: 203,
      category: 'nature',
      type: 'nature',
      highlights: ['Houseboat Stay', 'Ayurveda', 'Spice Gardens', 'Wildlife'],
      description: 'Cruise through serene backwaters, experience Ayurvedic treatments, and discover Gods Own Country.',
    },
    {
      id: 5,
      name: 'Rajasthan Royal Heritage',
      location: 'Rajasthan, India',
      state: 'rajasthan',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 21999,
      originalPrice: 26999,
      duration: '7 Days 6 Nights',
      groupSize: '8-16 people',
      rating: 4.8,
      reviews: 167,
      category: 'cultural',
      type: 'historical',
      highlights: ['Palace Hotels', 'Desert Safari', 'Folk Culture', 'Architecture'],
      description: 'Live like royalty in magnificent palaces and experience the grandeur of the desert state.',
    },
    {
      id: 6,
      name: 'Ladakh Expedition',
      location: 'Ladakh, India',
      state: 'ladakh',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 28999,
      originalPrice: 34999,
      duration: '8 Days 7 Nights',
      groupSize: '6-12 people',
      rating: 4.9,
      reviews: 91,
      category: 'adventure',
      type: 'nature',
      highlights: ['High Altitude', 'Monasteries', 'Bike Rides', 'Camping'],
      description: 'Conquer the rugged terrain of Little Tibet and witness landscapes that defy imagination.',
    },
    {
      id: 7,
      name: 'Varanasi Spiritual Journey',
      location: 'Uttar Pradesh, India',
      state: 'up',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 9999,
      originalPrice: 12999,
      duration: '4 Days 3 Nights',
      groupSize: '8-15 people',
      rating: 4.6,
      reviews: 134,
      category: 'cultural',
      type: 'religious',
      highlights: ['Ganga Aarti', 'Ancient Temples', 'Boat Rides', 'Spiritual Tours'],
      description: 'Experience the spiritual heart of India with ancient rituals and sacred traditions.',
    },
    {
      id: 8,
      name: 'Andaman Islands Paradise',
      location: 'Andaman & Nicobar, India',
      state: 'andaman',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 24999,
      originalPrice: 29999,
      duration: '6 Days 5 Nights',
      groupSize: '4-12 people',
      rating: 4.8,
      reviews: 98,
      category: 'beach',
      type: 'nature',
      highlights: ['Scuba Diving', 'Pristine Beaches', 'Water Sports', 'Island Hopping'],
      description: 'Discover untouched tropical paradise with crystal clear waters and vibrant marine life.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'nature', label: 'Nature' },
    { value: 'adventure', label: 'Adventure' },
  ];

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'goa', label: 'Goa' },
    { value: 'himachal', label: 'Himachal Pradesh' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'ladakh', label: 'Ladakh' },
    { value: 'up', label: 'Uttar Pradesh' },
    { value: 'andaman', label: 'Andaman & Nicobar' },
  ];

  const placeTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'nature', label: 'Nature' },
    { value: 'historical', label: 'Historical' },
    { value: 'beach', label: 'Beach' },
    { value: 'religious', label: 'Religious' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under ₹15,000' },
    { value: 'mid', label: '₹15,000 - ₹25,000' },
    { value: 'premium', label: 'Above ₹25,000' },
  ];

  const carTypes = [
    { value: 'hatchback', label: 'Hatchback', passengers: 4, image: '🚗' },
    { value: 'sedan', label: 'Sedan', passengers: 4, image: '🚙' },
    { value: 'suv', label: 'SUV', passengers: 7, image: '🚐' },
    { value: 'luxury', label: 'Luxury Car', passengers: 4, image: '🏎️' },
    { value: 'tempo', label: 'Tempo Traveller', passengers: 12, image: '🚌' },
  ];

  const activities = [
    'Adventure Sports', 'Cultural Tours', 'Wildlife Safari', 'Water Sports',
    'Trekking', 'Photography', 'Food Tours', 'Spiritual Tours'
  ];

  const experiences = [
    'Luxury Stay', 'Adventure Activities', 'Cultural Immersion', 'Food & Cuisine',
    'Photography Tours', 'Wildlife Encounters', 'Spiritual Journey', 'Local Markets'
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesState = selectedState === 'all' || destination.state === selectedState;
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'budget' && destination.price < 15000) ||
      (priceRange === 'mid' && destination.price >= 15000 && destination.price <= 25000) ||
      (priceRange === 'premium' && destination.price > 25000);

    return matchesSearch && matchesCategory && matchesState && matchesPrice;
  });

  const handleServiceClick = (service: string) => {
    setActiveService(service);
    if (service === 'group' || service === 'family' || service === 'religious') {
      setBookingType('group');
      setShowBookingModal(true);
    } else if (service === 'customized') {
      setBookingType('custom');
      setShowBookingModal(true);
    } else if (service === 'car-rental') {
      setBookingType('car');
      setShowBookingModal(true);
    }
  };

  const handleActivityToggle = (activity: string, formType: string) => {
    if (formType === 'group') {
      const currentActivities = groupBookingForm.activities;
      const updatedActivities = currentActivities.includes(activity)
        ? currentActivities.filter(a => a !== activity)
        : [...currentActivities, activity];
      setGroupBookingForm(prev => ({ ...prev, activities: updatedActivities }));
    }
  };

  const handleExperienceToggle = (experience: string) => {
    const currentExperiences = customTourForm.experiences;
    const updatedExperiences = currentExperiences.includes(experience)
      ? currentExperiences.filter(e => e !== experience)
      : [...currentExperiences, experience];
    setCustomTourForm(prev => ({ ...prev, experiences: updatedExperiences }));
  };

  const handleDestinationToggle = (destination: string) => {
    const currentDestinations = customTourForm.destinations;
    const updatedDestinations = currentDestinations.includes(destination)
      ? currentDestinations.filter(d => d !== destination)
      : [...currentDestinations, destination];
    setCustomTourForm(prev => ({ ...prev, destinations: updatedDestinations }));
  };

  const submitBookingForm = () => {
    // Handle form submission based on booking type
    console.log('Booking submitted:', bookingType, {
      group: groupBookingForm,
      custom: customTourForm,
      car: carRentalForm
    });
    alert('Booking request submitted! We will contact you within 24 hours.');
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center bg-earth-100 rounded-full px-6 py-3 mb-6 border-4 border-black shadow-neobrutal transition-shadow duration-300 hover:shadow-neobrutal-hover cursor-default select-none">
            <MapPin className="h-6 w-6 text-earth-600 mr-2" />
            <span className="font-roboto font-medium text-earth-700">Destination Explorer</span>
          </div>
          <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-earth-800 mb-4 border-4 border-black inline-block px-6 py-2 rounded-lg shadow-neobrutal transition-shadow duration-300 hover:shadow-neobrutal-hover">
            Discover Amazing Destinations
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            From pristine beaches to majestic mountains, explore handpicked destinations that promise unforgettable experiences
          </p>
        </div>

        {/* Service Selection */}
        <div className="bg-white rounded-xl p-6 mb-8 animate-fade-in-up border-4 border-black shadow-neobrutal">
  <h3 className="font-poppins font-extrabold text-lg text-earth-800 mb-4 border-4 border-black inline-block px-4 py-1 rounded-lg shadow-neobrutal">
    Choose Your Travel Service
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
    <button
      onClick={() => handleServiceClick('group')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'group' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Users className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Group Tours
      </span>
    </button>

    <button
      onClick={() => handleServiceClick('family')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'family' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Heart className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Family
      </span>
    </button>

    <button
      onClick={() => handleServiceClick('religious')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'religious' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Star className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Religious
      </span>
    </button>

    <button
      onClick={() => handleServiceClick('foreign')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'foreign' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Plane className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Foreign
      </span>
    </button>

    <button
      onClick={() => handleServiceClick('customized')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'customized' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Settings className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Customized
      </span>
    </button>

    <button
      onClick={() => handleServiceClick('car-rental')}
      className={`flex flex-col items-center p-3 border-4 rounded-lg transition-all duration-300 group shadow-neobrutal
        ${activeService === 'car-rental' ? 'border-black bg-earth-50 shadow-neobrutal-hover' : 'border-black bg-cream-50 hover:shadow-neobrutal-hover'}
      `}
    >
      <Car className="h-6 w-6 text-earth-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="font-roboto text-sm font-medium text-earth-800 group-hover:text-earth-900">
        Car Rental
      </span>
    </button>
  </div>
</div>

        {/* Search and Filters */}
       <div className="bg-white border-4 border-black rounded-xl p-6 mb-8 shadow-[6px_6px_0_0_black] animate-fade-in-up">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    
    {/* Search */}
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-lg focus:ring-0 focus:outline-none font-roboto bg-cream-50 text-black shadow-[4px_4px_0_0_black] transition-all duration-200"
      />
    </div>

    {/* State Filter */}
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-lg font-roboto appearance-none bg-cream-50 text-black shadow-[4px_4px_0_0_black] transition-all duration-200"
      >
        {states.map(state => (
          <option key={state.value} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
    </div>

    {/* Category Filter */}
    <div className="relative">
      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border-4 border-black rounded-lg font-roboto appearance-none bg-cream-50 text-black shadow-[4px_4px_0_0_black] transition-all duration-200"
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
        className="w-full px-4 py-3 border-4 border-black rounded-lg font-roboto appearance-none bg-cream-50 text-black shadow-[4px_4px_0_0_black] transition-all duration-200"
      >
        {priceRanges.map(range => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>

    {/* Clear Filters */}
    <button
      onClick={() => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSelectedState('all');
        setPriceRange('all');
        setActiveService('');
      }}
      className="bg-sage-300 text-black border-4 border-black px-6 py-3 rounded-lg font-roboto font-bold shadow-[4px_4px_0_0_black] hover:bg-sage-400 transition-all duration-200"
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
      className="bg-white border-4 border-black rounded-xl overflow-hidden shadow-[6px_6px_0_0_black] hover:shadow-[8px_8px_0_0_black] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover border-b-4 border-black"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-roboto font-bold shadow-[2px_2px_0_0_black] border-2 border-black">
          Save ₹{destination.originalPrice - destination.price}
        </div>
        <div className="absolute top-4 right-4 bg-yellow-200 px-3 py-1 rounded-full shadow-[2px_2px_0_0_black] border-2 border-black">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-600 fill-current" />
            <span className="font-roboto text-sm font-bold text-black">{destination.rating}</span>
            <span className="font-roboto text-xs text-gray-800">({destination.reviews})</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-700 text-sm font-roboto mb-2">
          <MapPin className="h-4 w-4 mr-1 text-black" />
          {destination.location}
        </div>

        <h3 className="font-poppins font-bold text-xl text-black mb-2">
          {destination.name}
        </h3>

        <p className="font-roboto text-gray-700 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.slice(0, 3).map((highlight, idx) => (
            <span key={idx} className="bg-lime-200 text-black px-2 py-1 rounded-full text-xs font-roboto border-2 border-black shadow-[1px_1px_0_0_black]">
              {highlight}
            </span>
          ))}
          {destination.highlights.length > 3 && (
            <span className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs font-roboto border-2 border-black shadow-[1px_1px_0_0_black]">
              +{destination.highlights.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm font-roboto text-gray-800 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-black" />
            {destination.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-black" />
            {destination.groupSize}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-poppins font-extrabold text-2xl text-green-700">
              ₹{destination.price.toLocaleString()}
            </span>
            <span className="font-roboto text-sm text-gray-500 line-through ml-2">
              ₹{destination.originalPrice.toLocaleString()}
            </span>
            <div className="font-roboto text-xs text-gray-600">per person</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/trip/${destination.id}`}
            className="flex-1 text-center bg-black text-white py-3 px-4 border-2 border-black rounded-lg font-roboto font-semibold hover:bg-gray-800 transition-all duration-200 shadow-[2px_2px_0_0_black]"
          >
            View More
          </Link>
          <Link
            to={`/book/${destination.id}`}
            className="flex-1 text-center bg-yellow-300 text-black py-3 px-4 border-2 border-black rounded-lg font-roboto font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-[2px_2px_0_0_black]"
          >
            Book Now
          </Link>
        </div>
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
                setSelectedState('all');
                setPriceRange('all');
                setActiveService('');
              }}
              className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-poppins font-bold text-2xl text-earth-800">
                    {bookingType === 'group' && 'Group Tour Booking'}
                    {bookingType === 'custom' && 'Customized Tour Builder'}
                    {bookingType === 'car' && 'Car Rental Booking'}
                  </h3>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Group Tour Form */}
                {bookingType === 'group' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Number of People *
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setGroupBookingForm(prev => ({
                              ...prev,
                              numberOfPeople: Math.max(1, prev.numberOfPeople - 1)
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-roboto font-semibold text-lg px-4">
                            {groupBookingForm.numberOfPeople}
                          </span>
                          <button
                            onClick={() => setGroupBookingForm(prev => ({
                              ...prev,
                              numberOfPeople: prev.numberOfPeople + 1
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Preferred Travel Date *
                        </label>
                        <input
                          type="date"
                          value={groupBookingForm.preferredDate}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Arrival Time
                        </label>
                        <input
                          type="time"
                          value={groupBookingForm.arrivalTime}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, arrivalTime: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Destination *
                        </label>
                        <select
                          value={groupBookingForm.destination}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, destination: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        >
                          <option value="">Select Destination</option>
                          {destinations.map(dest => (
                            <option key={dest.id} value={dest.name}>{dest.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Accommodation Preference
                        </label>
                        <select
                          value={groupBookingForm.accommodation}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, accommodation: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        >
                          <option value="standard">Standard</option>
                          <option value="deluxe">Deluxe</option>
                          <option value="luxury">Luxury</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Activities & Experiences
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {activities.map(activity => (
                          <label key={activity} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={groupBookingForm.activities.includes(activity)}
                              onChange={() => handleActivityToggle(activity, 'group')}
                              className="rounded border-gray-300 text-earth-600 focus:ring-earth-500"
                            />
                            <span className="font-roboto text-sm">{activity}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          value={groupBookingForm.contactName}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={groupBookingForm.contactEmail}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={groupBookingForm.contactPhone}
                          onChange={(e) => setGroupBookingForm(prev => ({ ...prev, contactPhone: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Custom Tour Form */}
                {bookingType === 'custom' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Where do you want to visit? *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto border border-gray-200 rounded-lg p-3">
                        {destinations.map(dest => (
                          <label key={dest.id} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customTourForm.destinations.includes(dest.name)}
                              onChange={() => handleDestinationToggle(dest.name)}
                              className="rounded border-gray-300 text-earth-600 focus:ring-earth-500"
                            />
                            <span className="font-roboto text-sm">{dest.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Duration (Days) *
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setCustomTourForm(prev => ({
                              ...prev,
                              duration: Math.max(1, prev.duration - 1)
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-roboto font-semibold text-lg px-4">
                            {customTourForm.duration} days
                          </span>
                          <button
                            onClick={() => setCustomTourForm(prev => ({
                              ...prev,
                              duration: prev.duration + 1
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Number of People *
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setCustomTourForm(prev => ({
                              ...prev,
                              numberOfPeople: Math.max(1, prev.numberOfPeople - 1)
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-roboto font-semibold text-lg px-4">
                            {customTourForm.numberOfPeople}
                          </span>
                          <button
                            onClick={() => setCustomTourForm(prev => ({
                              ...prev,
                              numberOfPeople: prev.numberOfPeople + 1
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Travel Date *
                        </label>
                        <input
                          type="date"
                          value={customTourForm.travelDate}
                          onChange={(e) => setCustomTourForm(prev => ({ ...prev, travelDate: e.target.value }))}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Add-on Experiences
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {experiences.map(experience => (
                          <label key={experience} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customTourForm.experiences.includes(experience)}
                              onChange={() => handleExperienceToggle(experience)}
                              className="rounded border-gray-300 text-earth-600 focus:ring-earth-500"
                            />
                            <span className="font-roboto text-sm">{experience}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          value={customTourForm.contactName}
                          onChange={(e) => setCustomTourForm(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={customTourForm.contactEmail}
                          onChange={(e) => setCustomTourForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={customTourForm.contactPhone}
                          onChange={(e) => setCustomTourForm(prev => ({ ...prev, contactPhone: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Car Rental Form */}
                {bookingType === 'car' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Type of Car *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {carTypes.map(car => (
                          <label key={car.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="carType"
                              value={car.value}
                              checked={carRentalForm.carType === car.value}
                              onChange={(e) => setCarRentalForm(prev => ({ ...prev, carType: e.target.value }))}
                              className="mr-3"
                            />
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{car.image}</span>
                              <div>
                                <div className="font-roboto font-medium">{car.label}</div>
                                <div className="font-roboto text-sm text-gray-600">Up to {car.passengers} passengers</div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Number of Passengers *
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setCarRentalForm(prev => ({
                              ...prev,
                              passengers: Math.max(1, prev.passengers - 1)
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-roboto font-semibold text-lg px-4">
                            {carRentalForm.passengers}
                          </span>
                          <button
                            onClick={() => setCarRentalForm(prev => ({
                              ...prev,
                              passengers: prev.passengers + 1
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Rental Duration (Days) *
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setCarRentalForm(prev => ({
                              ...prev,
                              rentalDays: Math.max(1, prev.rentalDays - 1)
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-roboto font-semibold text-lg px-4">
                            {carRentalForm.rentalDays} days
                          </span>
                          <button
                            onClick={() => setCarRentalForm(prev => ({
                              ...prev,
                              rentalDays: prev.rentalDays + 1
                            }))}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Estimated Kilometers
                        </label>
                        <input
                          type="number"
                          value={carRentalForm.estimatedKm}
                          onChange={(e) => setCarRentalForm(prev => ({ ...prev, estimatedKm: parseInt(e.target.value) || 0 }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="100"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          value={carRentalForm.pickupLocation}
                          onChange={(e) => setCarRentalForm(prev => ({ ...prev, pickupLocation: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="Enter pickup location"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          value={carRentalForm.contactName}
                          onChange={(e) => setCarRentalForm(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={carRentalForm.contactEmail}
                          onChange={(e) => setCarRentalForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={carRentalForm.contactPhone}
                          onChange={(e) => setCarRentalForm(prev => ({ ...prev, contactPhone: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-roboto font-semibold text-blue-800 mb-2">
                        Pricing & Fuel Policy
                      </h4>
                      <ul className="space-y-1 text-sm font-roboto text-blue-700">
                        <li>• Base rate: ₹12/km for hatchback, ₹15/km for sedan, ₹20/km for SUV</li>
                        <li>• Driver allowance: ₹300/day</li>
                        <li>• Fuel: Customer responsibility</li>
                        <li>• Toll & parking: Customer responsibility</li>
                        <li>• Security deposit required</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex space-x-3 mt-8">
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-roboto font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitBookingForm}
                    className="flex-1 bg-gradient-to-r from-earth-600 to-sage-600 hover:from-earth-700 hover:to-sage-700 text-white py-3 px-4 rounded-lg font-roboto font-semibold transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;