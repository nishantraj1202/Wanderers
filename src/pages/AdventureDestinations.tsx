import React, { useState } from 'react';
import { MapPin, Mountain, Camera, Star, Clock, Users, Search, Filter, ChevronDown, ChevronUp, Cloud, Thermometer, Calendar, Navigation, Compass } from 'lucide-react';

const AdventureDestinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [selectedWeather, setSelectedWeather] = useState('all');
  const [showApiFeatures, setShowApiFeatures] = useState(false);
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

  const seasons = [
    { value: 'all', label: 'All Seasons' },
    { value: 'summer', label: 'Summer (Mar-Jun)' },
    { value: 'monsoon', label: 'Monsoon (Jul-Sep)' },
    { value: 'winter', label: 'Winter (Oct-Feb)' },
    { value: 'spring', label: 'Spring (Feb-Apr)' },
    { value: 'autumn', label: 'Autumn (Sep-Nov)' },
  ];

  const weatherTypes = [
    { value: 'all', label: 'All Weather' },
    { value: 'cool', label: 'Cool Climate (10-25°C)' },
    { value: 'moderate', label: 'Moderate (15-30°C)' },
    { value: 'warm', label: 'Warm (25-35°C)' },
    { value: 'cold', label: 'Cold (Below 15°C)' },
    { value: 'tropical', label: 'Tropical (Above 30°C)' },
  ];

  const apiFeatures = [
    {
      name: 'Geoapify',
      icon: Mountain,
      description: 'Adventure categories and seasonal filters',
      features: ['Adventure categorization', 'Seasonal recommendations', 'Activity mapping'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Wander India',
      icon: Compass,
      description: 'Cultural and regional insights',
      features: ['Cultural significance', 'Regional specialties', 'Local traditions'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'MapmyIndia',
      icon: Navigation,
      description: 'Location-based search and routing',
      features: ['Precise locations', 'Route planning', 'Distance calculations'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Weather APIs',
      icon: Cloud,
      description: 'Climate-based recommendations',
      features: ['Weather forecasts', 'Seasonal patterns', 'Climate suitability'],
      color: 'from-orange-500 to-orange-600'
    },
  ];
  const stateDestinations = [
    {
      state: 'Himachal Pradesh',
      region: 'north',
      bestSeasons: ['summer', 'winter'],
      weatherType: 'cool',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The adventure capital of India with snow-capped peaks, pristine valleys, and thrilling activities.',
      destinations: [
        {
          name: 'Manali',
          activities: ['trekking', 'paragliding', 'rafting', 'skiing'],
          bestSeasons: ['summer', 'winter'],
          weatherType: 'cool',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Gateway to adventure with Rohtang Pass, Solang Valley, and numerous trekking trails.',
          bestTime: 'March to June, December to February',
          rating: 4.8,
          temperature: '10-25°C',
          altitude: '2,050m',
        },
        {
          name: 'Spiti Valley',
          activities: ['trekking', 'camping', 'wildlife'],
          bestSeasons: ['summer'],
          weatherType: 'cold',
          image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Cold desert mountain valley with ancient monasteries and stunning landscapes.',
          bestTime: 'May to October',
          rating: 4.9,
          temperature: '5-20°C',
          altitude: '3,800m',
        },
        {
          name: 'Kasol',
          activities: ['trekking', 'camping'],
          bestSeasons: ['summer', 'autumn'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Mini Israel of India, perfect for backpackers and nature lovers.',
          bestTime: 'March to June, September to November',
          rating: 4.6,
          temperature: '15-30°C',
          altitude: '1,640m',
        },
      ],
    },
    {
      state: 'Uttarakhand',
      region: 'north',
      bestSeasons: ['summer', 'autumn'],
      weatherType: 'cool',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of gods with sacred peaks, pristine lakes, and challenging treks.',
      destinations: [
        {
          name: 'Rishikesh',
          activities: ['rafting', 'trekking', 'camping'],
          bestSeasons: ['autumn', 'winter', 'spring'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'World capital of yoga and adventure sports, famous for Ganges rafting.',
          bestTime: 'September to April',
          rating: 4.7,
          temperature: '15-35°C',
          altitude: '372m',
        },
        {
          name: 'Valley of Flowers',
          activities: ['trekking', 'wildlife'],
          bestSeasons: ['monsoon'],
          weatherType: 'cool',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'UNESCO World Heritage site with endemic alpine flowers and wildlife.',
          bestTime: 'July to September',
          rating: 4.9,
          temperature: '10-20°C',
          altitude: '3,658m',
        },
        {
          name: 'Auli',
          activities: ['skiing', 'trekking'],
          bestSeasons: ['winter'],
          weatherType: 'cold',
          image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Premier skiing destination with panoramic Himalayan views.',
          bestTime: 'December to March',
          rating: 4.5,
          temperature: '0-15°C',
          altitude: '2,800m',
        },
      ],
    },
    {
      state: 'Ladakh',
      region: 'north',
      bestSeasons: ['summer'],
      weatherType: 'cold',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Little Tibet with high-altitude deserts, pristine lakes, and ancient monasteries.',
      destinations: [
        {
          name: 'Leh',
          activities: ['trekking', 'camping', 'wildlife'],
          bestSeasons: ['summer'],
          weatherType: 'cold',
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Base for high-altitude adventures and monastery visits.',
          bestTime: 'May to September',
          rating: 4.8,
          temperature: '5-25°C',
          altitude: '3,500m',
        },
        {
          name: 'Pangong Lake',
          activities: ['camping', 'wildlife'],
          bestSeasons: ['summer'],
          weatherType: 'cold',
          image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Stunning high-altitude lake changing colors throughout the day.',
          bestTime: 'May to September',
          rating: 4.9,
          temperature: '0-20°C',
          altitude: '4,350m',
        },
        {
          name: 'Nubra Valley',
          activities: ['camping', 'trekking'],
          bestSeasons: ['summer'],
          weatherType: 'cold',
          image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Cold desert with sand dunes and double-humped camels.',
          bestTime: 'May to September',
          rating: 4.7,
          temperature: '5-30°C',
          altitude: '3,048m',
        },
      ],
    },
    {
      state: 'Goa',
      region: 'west',
      bestSeasons: ['winter', 'spring'],
      weatherType: 'tropical',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tropical paradise with pristine beaches, water sports, and vibrant nightlife.',
      destinations: [
        {
          name: 'Calangute Beach',
          activities: ['water-sports', 'paragliding'],
          bestSeasons: ['winter'],
          weatherType: 'warm',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Queen of beaches with exciting water sports and beach activities.',
          bestTime: 'November to March',
          rating: 4.5,
          temperature: '20-32°C',
          altitude: 'Sea Level',
        },
        {
          name: 'Dudhsagar Falls',
          activities: ['trekking', 'wildlife'],
          bestSeasons: ['monsoon', 'winter'],
          weatherType: 'tropical',
          image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Spectacular four-tiered waterfall in the Western Ghats.',
          bestTime: 'October to March',
          rating: 4.6,
          temperature: '22-35°C',
          altitude: '600m',
        },
        {
          name: 'Grande Island',
          activities: ['water-sports'],
          bestSeasons: ['winter', 'spring'],
          weatherType: 'tropical',
          image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Perfect for scuba diving, snorkeling, and dolphin watching.',
          bestTime: 'October to May',
          rating: 4.4,
          temperature: '25-35°C',
          altitude: 'Sea Level',
        },
      ],
    },
    {
      state: 'Kerala',
      region: 'south',
      bestSeasons: ['winter', 'spring'],
      weatherType: 'tropical',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'God\'s Own Country with backwaters, hill stations, and wildlife sanctuaries.',
      destinations: [
        {
          name: 'Munnar',
          activities: ['trekking', 'wildlife', 'camping'],
          bestSeasons: ['winter', 'spring'],
          weatherType: 'cool',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Tea plantation paradise with rolling hills and cool climate.',
          bestTime: 'September to March',
          rating: 4.7,
          temperature: '15-25°C',
          altitude: '1,600m',
        },
        {
          name: 'Thekkady',
          activities: ['wildlife', 'trekking'],
          bestSeasons: ['winter'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Home to Periyar Wildlife Sanctuary with elephant safaris.',
          bestTime: 'October to March',
          rating: 4.6,
          temperature: '18-30°C',
          altitude: '900m',
        },
        {
          name: 'Alleppey Backwaters',
          activities: ['water-sports', 'wildlife'],
          bestSeasons: ['winter'],
          weatherType: 'tropical',
          image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Venice of the East with houseboat cruises through canals.',
          bestTime: 'November to February',
          rating: 4.8,
          temperature: '23-32°C',
          altitude: 'Sea Level',
        },
      ],
    },
    {
      state: 'Rajasthan',
      region: 'west',
      bestSeasons: ['winter'],
      weatherType: 'warm',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of kings with desert adventures, majestic forts, and cultural experiences.',
      destinations: [
        {
          name: 'Jaisalmer',
          activities: ['camping', 'wildlife'],
          bestSeasons: ['winter'],
          weatherType: 'warm',
          image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Golden city with desert safaris and sand dune camping.',
          bestTime: 'October to March',
          rating: 4.6,
          temperature: '10-35°C',
          altitude: '229m',
        },
        {
          name: 'Mount Abu',
          activities: ['trekking', 'wildlife'],
          bestSeasons: ['winter', 'spring'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Only hill station in Rajasthan with Dilwara Jain temples.',
          bestTime: 'November to March',
          rating: 4.4,
          temperature: '12-28°C',
          altitude: '1,220m',
        },
        {
          name: 'Ranthambore',
          activities: ['wildlife'],
          bestSeasons: ['winter'],
          weatherType: 'warm',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Famous tiger reserve with ancient fort ruins.',
          bestTime: 'October to April',
          rating: 4.7,
          temperature: '15-40°C',
          altitude: '215m',
        },
      ],
    },
    {
      state: 'Karnataka',
      region: 'south',
      bestSeasons: ['winter', 'spring'],
      weatherType: 'moderate',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Diverse landscapes from Western Ghats to coastal beaches and historic sites.',
      destinations: [
        {
          name: 'Coorg',
          activities: ['trekking', 'wildlife', 'rafting'],
          bestSeasons: ['winter', 'spring'],
          weatherType: 'cool',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Scotland of India with coffee plantations and misty hills.',
          bestTime: 'October to March',
          rating: 4.6,
          temperature: '15-28°C',
          altitude: '1,525m',
        },
        {
          name: 'Gokarna',
          activities: ['water-sports', 'trekking'],
          bestSeasons: ['winter'],
          weatherType: 'warm',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Pristine beaches and temple town perfect for backpackers.',
          bestTime: 'October to March',
          rating: 4.5,
          temperature: '20-35°C',
          altitude: 'Sea Level',
        },
        {
          name: 'Bandipur National Park',
          activities: ['wildlife'],
          bestSeasons: ['winter', 'summer'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Tiger reserve with diverse wildlife and scenic landscapes.',
          bestTime: 'October to May',
          rating: 4.4,
          temperature: '18-35°C',
          altitude: '780m',
        },
      ],
    },
    {
      state: 'Arunachal Pradesh',
      region: 'northeast',
      bestSeasons: ['summer', 'autumn'],
      weatherType: 'cool',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Land of dawn-lit mountains with pristine forests and tribal culture.',
      destinations: [
        {
          name: 'Tawang',
          activities: ['trekking', 'wildlife'],
          bestSeasons: ['summer'],
          weatherType: 'cool',
          image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Birthplace of 6th Dalai Lama with stunning monastery.',
          bestTime: 'March to October',
          rating: 4.8,
          temperature: '5-20°C',
          altitude: '3,048m',
        },
        {
          name: 'Ziro Valley',
          activities: ['trekking', 'camping'],
          bestSeasons: ['summer', 'autumn'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'UNESCO World Heritage site with Apatani tribal culture.',
          bestTime: 'March to October',
          rating: 4.7,
          temperature: '15-30°C',
          altitude: '1,500m',
        },
        {
          name: 'Namdapha National Park',
          activities: ['wildlife', 'trekking'],
          bestSeasons: ['winter'],
          weatherType: 'moderate',
          image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Largest national park in Northeast with rare species.',
          bestTime: 'November to March',
          rating: 4.6,
          temperature: '10-25°C',
          altitude: '200m',
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
    const matchesSeason = selectedSeason === 'all' ||
      state.bestSeasons?.includes(selectedSeason) ||
      state.destinations.some(dest =>
        dest.bestSeasons?.includes(selectedSeason)
      );
    const matchesWeather = selectedWeather === 'all' ||
      state.weatherType === selectedWeather ||
      state.destinations.some(dest =>
        dest.weatherType === selectedWeather
      );

    return matchesSearch && matchesRegion && matchesActivity && matchesSeason && matchesWeather;
  });

  const toggleStateExpansion = (stateName: string) => {
    setExpandedState(expandedState === stateName ? null : stateName);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-sage-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 mb-6 border-2 border-earth-600 bg-earth-100 shadow-[4px_4px_0px_#000] rounded-full hover:shadow-[6px_6px_0px_#000] transition-all duration-300">
            <Mountain className="h-6 w-6 text-earth-600 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-roboto font-medium text-earth-800 group-hover:text-earth-600">
              Adventure Awaits
            </span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-earth-800 mb-6 transition-all duration-500 hover:scale-105">
            Adventure Destinations
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-earth-600 hover:from-earth-600 hover:to-sage-700 transition-all duration-500">
              Across India
            </span>
          </h1>

          <p className="font-roboto text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 md:px-0 hover:text-earth-800 transition-colors duration-300">
            Discover thrilling adventures with AI-powered recommendations. Get seasonal insights, weather-based suggestions,
            and location intelligence to find your perfect adventure destination!
          </p>
        </div>


        {/* API Features Section */}
        <div className="bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0_#000] p-8 mb-12 animate-slide-up transition-all duration-500 hover:shadow-[8px_8px_0_#000]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-200 border-2 border-black rounded-full px-6 py-3 mb-4 shadow-[3px_3px_0_#000] transition-all duration-300 hover:shadow-[5px_5px_0_#000]">
              <Cloud className="h-6 w-6 text-blue-700 mr-2" />
              <span className="font-roboto font-semibold text-black">Powered by Smart APIs</span>
            </div>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-black mb-4 hover:scale-105 transition-transform duration-300">
              Intelligent Adventure Planning
            </h2>
            <p className="font-roboto text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our platform integrates multiple APIs to provide you with the most accurate and up-to-date information
              for planning your perfect adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {apiFeatures.map((api, index) => (
              <div
                key={api.name}
                className="bg-white border-4 border-black rounded-xl shadow-[5px_5px_0_#000] p-6 hover:shadow-[7px_7px_0_#000] transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`bg-black border-2 border-black ${api.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0_#000]`}
                >
                  <api.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-extrabold text-lg text-black mb-2 text-center">
                  {api.name}
                </h3>
                <p className="font-roboto text-gray-700 text-sm mb-4 text-center">
                  {api.description}
                </p>
                <ul className="space-y-1">
                  {api.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs font-roboto text-black"
                    >
                      <div className="w-1.5 h-1.5 bg-black mr-2 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowApiFeatures(!showApiFeatures)}
              className="bg-black text-white border-4 border-black rounded-xl px-8 py-3 font-roboto font-bold shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:scale-105"
            >
              {showApiFeatures ? 'Hide' : 'Show'} Advanced Features
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_#000] p-8 mb-12 animate-slide-up transition-all duration-500 hover:shadow-[8px_8px_0_#000]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <input
                type="text"
                placeholder="Search states or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-xl bg-yellow-100 text-black font-roboto shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
              />
            </div>

            {/* Region Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-xl bg-lime-100 text-black font-roboto shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300"
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
              <Mountain className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-xl bg-orange-100 text-black font-roboto shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              >
                {activities.map(activity => (
                  <option key={activity.value} value={activity.value}>
                    {activity.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Filter */}
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-xl bg-sky-100 text-black font-roboto shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300"
              >
                {seasons.map(season => (
                  <option key={season.value} value={season.value}>
                    {season.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Weather Filter */}
            <div className="relative">
              <Thermometer className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
              <select
                value={selectedWeather}
                onChange={(e) => setSelectedWeather(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-xl bg-rose-100 text-black font-roboto shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all duration-300"
              >
                {weatherTypes.map(weather => (
                  <option key={weather.value} value={weather.value}>
                    {weather.label}
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
                setSelectedSeason('all');
                setSelectedWeather('all');
              }}
              className="bg-black text-white px-8 py-3 rounded-xl font-roboto font-bold border-4 border-black shadow-[4px_4px_0_#000] hover:bg-red-600 hover:shadow-[6px_6px_0_#000] transition-transform duration-300 transform hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        </div>


        {/* Advanced API Features */}
        {showApiFeatures && (
          <div className="bg-gradient-to-br from-purple-50/90 to-blue-50/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border border-white/20">
            <h3 className="font-poppins font-bold text-2xl text-earth-800 mb-6 text-center">
              🧩 Advanced Search Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Weather-based Recommendations */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Cloud className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="font-poppins font-semibold text-lg text-earth-800">Weather Intelligence</h4>
                </div>
                <p className="font-roboto text-gray-600 text-sm mb-4">
                  Get real-time weather data and climate-based destination recommendations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Thermometer className="h-3 w-3 mr-2 text-orange-500" />
                    Temperature-based filtering
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Cloud className="h-3 w-3 mr-2 text-blue-500" />
                    Seasonal weather patterns
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Calendar className="h-3 w-3 mr-2 text-green-500" />
                    Best time predictions
                  </div>
                </div>
              </div>

              {/* Location Intelligence */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Navigation className="h-6 w-6 text-purple-600 mr-3" />
                  <h4 className="font-poppins font-semibold text-lg text-earth-800">Location Intelligence</h4>
                </div>
                <p className="font-roboto text-gray-600 text-sm mb-4">
                  Precise location data with route planning and distance calculations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <MapPin className="h-3 w-3 mr-2 text-red-500" />
                    GPS coordinates
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Navigation className="h-3 w-3 mr-2 text-purple-500" />
                    Route optimization
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Mountain className="h-3 w-3 mr-2 text-green-500" />
                    Altitude information
                  </div>
                </div>
              </div>

              {/* Cultural Insights */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Compass className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="font-poppins font-semibold text-lg text-earth-800">Cultural Insights</h4>
                </div>
                <p className="font-roboto text-gray-600 text-sm mb-4">
                  Deep cultural and regional insights for authentic travel experiences.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Star className="h-3 w-3 mr-2 text-yellow-500" />
                    Local traditions
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Users className="h-3 w-3 mr-2 text-blue-500" />
                    Cultural significance
                  </div>
                  <div className="flex items-center text-xs font-roboto text-gray-600">
                    <Camera className="h-3 w-3 mr-2 text-purple-500" />
                    Photo opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Results Count */}
        <div className="mb-8 animate-slide-up">
          <p className="font-roboto text-lg text-gray-700 text-center">
            Showing <span className="font-bold text-earth-600">{filteredStates.length}</span> states with amazing adventures
            {(selectedSeason !== 'all' || selectedWeather !== 'all') && (
              <span className="text-sm text-gray-600 block mt-1">
                Filtered by {selectedSeason !== 'all' && `${seasons.find(s => s.value === selectedSeason)?.label}`}
                {selectedSeason !== 'all' && selectedWeather !== 'all' && ' & '}
                {selectedWeather !== 'all' && `${weatherTypes.find(w => w.value === selectedWeather)?.label}`}
              </span>
            )}
          </p>
        </div>

        {/* States Grid */}
        <div className="space-y-8">
          {filteredStates.map((state, index) => (
            <div
              key={state.state}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                        style={{ animationDelay: `${destIndex * 0.1}s` }}
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

                          {/* Weather info */}
                          <div className="absolute bottom-6 right-6 text-white">
                            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                              <div className="flex items-center text-sm font-roboto">
                                <Thermometer className="h-4 w-4 mr-1" />
                                {destination.temperature}
                              </div>
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

                          {/* Additional Info */}
                          <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-roboto text-gray-600">
                            <div className="flex items-center">
                              <Mountain className="h-3 w-3 mr-1 text-earth-500" />
                              {destination.altitude}
                            </div>
                            <div className="flex items-center">
                              <Thermometer className="h-3 w-3 mr-1 text-orange-500" />
                              {destination.temperature}
                            </div>
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
                setSelectedSeason('all');
                setSelectedWeather('all');
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

          <div className="relative border-4 border-black bg-white rounded-2xl p-10 shadow-[8px_8px_0_#000] animate-slide-up transition-all duration-500 hover:shadow-[10px_10px_0_#000]">
            <h2 className="font-poppins font-bold text-4xl mb-6 text-black">
              Ready for Your AI-Powered Adventure?
            </h2>
            <p className="font-roboto text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Experience the future of travel planning with our intelligent recommendation system.
              Get personalized suggestions based on weather, season, and your adventure preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-300 text-black border-4 border-black px-8 py-4 rounded-xl font-roboto font-bold text-lg shadow-[4px_4px_0_#000] hover:bg-yellow-400 hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:scale-105">
                Get AI Recommendations
              </button>

              <button className="bg-pink-100 text-black border-4 border-black px-8 py-4 rounded-xl font-roboto font-bold text-lg shadow-[4px_4px_0_#000] hover:bg-pink-200 hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:scale-105">
                Explore Smart Features
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdventureDestinations;