import React, { useState } from 'react';
import { MapPin, Mountain, Camera, Star, Clock, Users, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const AdventureDestinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState('all');
  const [expandedState, setExpandedState] = useState<string | null>(null);

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'north', label: 'North India' },
    { value: 'south', label: 'South India' },
    { value: 'east', label: 'East India' },
    { value: 'west', label: 'West India' },
    { value: 'northeast', label: 'Northeast India' },
    { value: 'central', label: 'Central India' },
  ];

  const activities = [
    { value: 'all', label: 'All Activities' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'rafting', label: 'River Rafting' },
    { value: 'climbing', label: 'Rock Climbing' },
    { value: 'wildlife', label: 'Wildlife Safari' },
    { value: 'water-sports', label: 'Water Sports' },
    { value: 'camping', label: 'Camping' },
    { value: 'paragliding', label: 'Paragliding' },
    { value: 'skiing', label: 'Skiing' },
  ];

  const stateDestinations = [
    {
      state: 'Himachal Pradesh',
      region: 'north',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The adventure capital of India with snow-capped peaks, pristine valleys, and thrilling activities.',
      destinations: [
        {
          name: 'Manali',
          activities: ['trekking', 'paragliding', 'rafting', 'skiing'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Gateway to adventure with Rohtang Pass, Solang Valley, and numerous trekking trails.',
          bestTime: 'March to June, December to February',
          rating: 4.8,
        },
        {
          name: 'Spiti Valley',
          activities: ['trekking', 'camping', 'wildlife'],
          image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Cold desert mountain valley with ancient monasteries and stunning landscapes.',
          bestTime: 'May to October',
          rating: 4.9,
        },
        {
          name: 'Kasol',
          activities: ['trekking', 'camping'],
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Mini Israel of India, perfect for backpackers and nature lovers.',
          bestTime: 'March to June, September to November',
          rating: 4.6,
        },
      ],
    },
    {
      state: 'Uttarakhand',
      region: 'north',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of gods with sacred peaks, pristine lakes, and challenging treks.',
      destinations: [
        {
          name: 'Rishikesh',
          activities: ['rafting', 'trekking', 'camping'],
          image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'World capital of yoga and adventure sports, famous for Ganges rafting.',
          bestTime: 'September to April',
          rating: 4.7,
        },
        {
          name: 'Valley of Flowers',
          activities: ['trekking', 'wildlife'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'UNESCO World Heritage site with endemic alpine flowers and wildlife.',
          bestTime: 'July to September',
          rating: 4.9,
        },
        {
          name: 'Auli',
          activities: ['skiing', 'trekking'],
          image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Premier skiing destination with panoramic Himalayan views.',
          bestTime: 'December to March',
          rating: 4.5,
        },
      ],
    },
    {
      state: 'Ladakh',
      region: 'north',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Little Tibet with high-altitude deserts, pristine lakes, and ancient monasteries.',
      destinations: [
        {
          name: 'Leh',
          activities: ['trekking', 'camping', 'wildlife'],
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Base for high-altitude adventures and monastery visits.',
          bestTime: 'May to September',
          rating: 4.8,
        },
        {
          name: 'Pangong Lake',
          activities: ['camping', 'wildlife'],
          image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Stunning high-altitude lake changing colors throughout the day.',
          bestTime: 'May to September',
          rating: 4.9,
        },
        {
          name: 'Nubra Valley',
          activities: ['camping', 'trekking'],
          image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Cold desert with sand dunes and double-humped camels.',
          bestTime: 'May to September',
          rating: 4.7,
        },
      ],
    },
    {
      state: 'Goa',
      region: 'west',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tropical paradise with pristine beaches, water sports, and vibrant nightlife.',
      destinations: [
        {
          name: 'Calangute Beach',
          activities: ['water-sports', 'paragliding'],
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Queen of beaches with exciting water sports and beach activities.',
          bestTime: 'November to March',
          rating: 4.5,
        },
        {
          name: 'Dudhsagar Falls',
          activities: ['trekking', 'wildlife'],
          image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Spectacular four-tiered waterfall in the Western Ghats.',
          bestTime: 'October to March',
          rating: 4.6,
        },
        {
          name: 'Grande Island',
          activities: ['water-sports'],
          image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Perfect for scuba diving, snorkeling, and dolphin watching.',
          bestTime: 'October to May',
          rating: 4.4,
        },
      ],
    },
    {
      state: 'Kerala',
      region: 'south',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'God\'s Own Country with backwaters, hill stations, and wildlife sanctuaries.',
      destinations: [
        {
          name: 'Munnar',
          activities: ['trekking', 'wildlife', 'camping'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Tea plantation paradise with rolling hills and cool climate.',
          bestTime: 'September to March',
          rating: 4.7,
        },
        {
          name: 'Thekkady',
          activities: ['wildlife', 'trekking'],
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Home to Periyar Wildlife Sanctuary with elephant safaris.',
          bestTime: 'October to March',
          rating: 4.6,
        },
        {
          name: 'Alleppey Backwaters',
          activities: ['water-sports', 'wildlife'],
          image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Venice of the East with houseboat cruises through canals.',
          bestTime: 'November to February',
          rating: 4.8,
        },
      ],
    },
    {
      state: 'Rajasthan',
      region: 'west',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of kings with desert adventures, majestic forts, and cultural experiences.',
      destinations: [
        {
          name: 'Jaisalmer',
          activities: ['camping', 'wildlife'],
          image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Golden city with desert safaris and sand dune camping.',
          bestTime: 'October to March',
          rating: 4.6,
        },
        {
          name: 'Mount Abu',
          activities: ['trekking', 'wildlife'],
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Only hill station in Rajasthan with Dilwara Jain temples.',
          bestTime: 'November to March',
          rating: 4.4,
        },
        {
          name: 'Ranthambore',
          activities: ['wildlife'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Famous tiger reserve with ancient fort ruins.',
          bestTime: 'October to April',
          rating: 4.7,
        },
      ],
    },
    {
      state: 'Karnataka',
      region: 'south',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Diverse landscapes from Western Ghats to coastal beaches and historic sites.',
      destinations: [
        {
          name: 'Coorg',
          activities: ['trekking', 'wildlife', 'rafting'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Scotland of India with coffee plantations and misty hills.',
          bestTime: 'October to March',
          rating: 4.6,
        },
        {
          name: 'Gokarna',
          activities: ['water-sports', 'trekking'],
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Pristine beaches and temple town perfect for backpackers.',
          bestTime: 'October to March',
          rating: 4.5,
        },
        {
          name: 'Bandipur National Park',
          activities: ['wildlife'],
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Tiger reserve with diverse wildlife and scenic landscapes.',
          bestTime: 'October to May',
          rating: 4.4,
        },
      ],
    },
    {
      state: 'Arunachal Pradesh',
      region: 'northeast',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of dawn-lit mountains with pristine forests and tribal culture.',
      destinations: [
        {
          name: 'Tawang',
          activities: ['trekking', 'wildlife'],
          image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Birthplace of 6th Dalai Lama with stunning monastery.',
          bestTime: 'March to October',
          rating: 4.8,
        },
        {
          name: 'Ziro Valley',
          activities: ['trekking', 'camping'],
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'UNESCO World Heritage site with Apatani tribal culture.',
          bestTime: 'March to October',
          rating: 4.7,
        },
        {
          name: 'Namdapha National Park',
          activities: ['wildlife', 'trekking'],
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Largest national park in Northeast with rare species.',
          bestTime: 'November to March',
          rating: 4.6,
        },
      ],
    },
  ];

  const filteredStates = stateDestinations.filter(state => {
    const matchesSearch = state.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         state.destinations.some(dest => 
                           dest.name.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesRegion = selectedRegion === 'all' || state.region === selectedRegion;
    const matchesActivity = selectedActivity === 'all' || 
                           state.destinations.some(dest => 
                             dest.activities.includes(selectedActivity)
                           );
    
    return matchesSearch && matchesRegion && matchesActivity;
  });

  const toggleStateExpansion = (stateName: string) => {
    setExpandedState(expandedState === stateName ? null : stateName);
  };

  return (
    <div className="bg-gradient-to-br from-cream-50 to-sage-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center bg-earth-100 rounded-full px-6 py-3 mb-6">
            <Mountain className="h-6 w-6 text-earth-600 mr-2" />
            <span className="font-roboto font-medium text-earth-700">Adventure Awaits</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-earth-800 mb-6">
            Adventure Destinations
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-earth-600">
              Across India
            </span>
          </h1>
          <p className="font-roboto text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover thrilling adventures in every corner of India. From snow-capped Himalayas to pristine beaches, 
            from dense forests to vast deserts - your next adrenaline rush awaits!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search states or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto text-lg bg-white/90 backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Region Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto text-lg appearance-none bg-white/90 backdrop-blur-sm transition-all duration-300"
              >
                {regions.map(region => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Activity Filter */}
            <div className="relative">
              <Mountain className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto text-lg appearance-none bg-white/90 backdrop-blur-sm transition-all duration-300"
              >
                {activities.map(activity => (
                  <option key={activity.value} value={activity.value}>
                    {activity.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedActivity('all');
              }}
              className="bg-gradient-to-r from-sage-600 to-earth-600 hover:from-sage-700 hover:to-earth-700 text-white px-8 py-3 rounded-xl font-roboto font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-slide-up">
          <p className="font-roboto text-lg text-gray-700 text-center">
            Showing <span className="font-bold text-earth-600">{filteredStates.length}</span> states with amazing adventures
          </p>
        </div>

        {/* States Grid */}
        <div className="space-y-8">
          {filteredStates.map((state, index) => (
            <div 
              key={state.state} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-white/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* State Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={state.image}
                  alt={state.state}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-poppins font-bold text-3xl text-white mb-2">
                    {state.state}
                  </h2>
                  <p className="font-roboto text-lg text-gray-200 leading-relaxed">
                    {state.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleStateExpansion(state.state)}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {expandedState === state.state ? 
                    <ChevronUp className="h-6 w-6" /> : 
                    <ChevronDown className="h-6 w-6" />
                  }
                </button>
              </div>

              {/* Destinations */}
              {expandedState === state.state && (
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.destinations.map((destination, destIndex) => (
                      <div 
                        key={destination.name} 
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up border border-gray-100"
                        style={{animationDelay: `${destIndex * 0.1}s`}}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="font-roboto text-sm font-medium">{destination.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="font-poppins font-bold text-xl text-earth-800 mb-3">
                            {destination.name}
                          </h3>
                          
                          <p className="font-roboto text-gray-700 text-sm mb-4 leading-relaxed">
                            {destination.description}
                          </p>
                          
                          {/* Activities */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {destination.activities.map((activity, actIndex) => (
                              <span 
                                key={actIndex} 
                                className="bg-gradient-to-r from-earth-100 to-sage-100 text-earth-700 px-3 py-1 rounded-full text-xs font-roboto font-medium border border-earth-200"
                              >
                                {activity.charAt(0).toUpperCase() + activity.slice(1).replace('-', ' ')}
                              </span>
                            ))}
                          </div>
                          
                          {/* Best Time */}
                          <div className="flex items-center text-gray-600 font-roboto text-sm mb-4">
                            <Clock className="h-4 w-4 mr-2 text-sage-600" />
                            Best Time: {destination.bestTime}
                          </div>
                          
                          <button className="w-full bg-gradient-to-r from-earth-600 to-sage-600 hover:from-earth-700 hover:to-sage-700 text-white py-3 px-4 rounded-xl font-roboto font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Explore Adventures
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Preview when collapsed */}
              {expandedState !== state.state && (
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600 font-roboto">
                        <MapPin className="h-4 w-4 mr-1" />
                        {state.destinations.length} destinations
                      </div>
                      <div className="flex items-center text-gray-600 font-roboto">
                        <Mountain className="h-4 w-4 mr-1" />
                        {[...new Set(state.destinations.flatMap(d => d.activities))].length} activities
                      </div>
                    </div>
                    <button
                      onClick={() => toggleStateExpansion(state.state)}
                      className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-2 rounded-lg font-roboto font-medium transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && (
          <div className="text-center py-16 animate-slide-up">
            <div className="text-gray-400 mb-6">
              <Mountain className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-gray-600 mb-4">
              No adventures found
            </h3>
            <p className="font-roboto text-gray-500 mb-6 text-lg">
              Try adjusting your search criteria or exploring different regions
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedActivity('all');
              }}
              className="bg-gradient-to-r from-earth-600 to-sage-600 hover:from-earth-700 hover:to-sage-700 text-white px-8 py-4 rounded-xl font-roboto font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Show All Adventures
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-earth-600 via-earth-700 to-sage-800 rounded-2xl p-12 text-center text-white animate-slide-up relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
          </div>
          
          <div className="relative">
            <h2 className="font-poppins font-bold text-4xl mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="font-roboto text-xl mb-8 text-earth-100 max-w-2xl mx-auto">
              Let us plan your perfect adventure trip with expert guides, safety equipment, and unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-earth-800 hover:bg-cream-50 px-8 py-4 rounded-xl font-roboto font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Plan My Adventure
              </button>
              <button className="border-2 border-white/50 backdrop-blur-sm text-white hover:bg-white hover:text-earth-800 px-8 py-4 rounded-xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDestinations;