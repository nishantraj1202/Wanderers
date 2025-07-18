import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin, Calendar, Award, Heart, Play, Mountain, Compass, Camera, Volume2, VolumeX } from 'lucide-react';

const Home: React.FC = () => {
  const [isMuted, setIsMuted] = React.useState(true);

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Travelers' },
    { icon: MapPin, value: '50+', label: 'Destinations' },
    { icon: Calendar, value: '500+', label: 'Trips Organized' },
    { icon: Award, value: '4.9', label: 'Average Rating' },
  ];

  const featuredDestinations = [
    {
      id: 1,
      name: 'Ladakh Expedition',
      image: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹28,999',
      duration: '8 Days',
      rating: 4.9,
      tag: 'Adventure',
    },
    {
      id: 2,
      name: 'Manali Mountains',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹15,999',
      duration: '5 Days',
      rating: 4.8,
      tag: 'Scenic',
    },
    {
      id: 3,
      name: 'Kashmir Paradise',
      image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹22,999',
      duration: '6 Days',
      rating: 4.9,
      tag: 'Premium',
    },
  ];

  const experiences = [
    {
      icon: Mountain,
      title: 'Mountain Adventures',
      description: 'Conquer peaks and witness breathtaking vistas',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Compass,
      title: 'Guided Expeditions',
      description: 'Expert guides for safe and memorable journeys',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Camera,
      title: 'Photo Opportunities',
      description: 'Capture moments that last forever',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Enhanced Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="src\assets\77357241-63fc-4b05-9ddd-ee72a43b2b73.mp4 (1).mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920")',
              }}
            ></div>
          </video>
          
          {/* Audio for bird sounds */}
          <audio
            autoPlay
            loop
            muted={isMuted}
            className="hidden"
          >
            <source src="src\assets\audio.mp3" type="audio/mp3" />
          </audio>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/30 to-transparent"></div>
        </div>
        
        {/* Sound Control Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
          title={isMuted ? 'Unmute nature sounds' : 'Mute sounds'}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-earth-400/20 backdrop-blur-sm rounded-full animate-bounce-gentle opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-sage-400/20 backdrop-blur-sm rounded-full animate-bounce-gentle opacity-50" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 animate-slide-up">
          {/* Premium badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6 animate-slide-up">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="font-roboto text-sm font-medium">India's #1 Mountain Adventure Company</span>
          </div>
          
          <h1 className="font-poppins font-bold text-6xl md:text-8xl mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
           <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
             
            </span>
          </h1>
          
          <p className="font-roboto text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
          
          </p>
          

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Link
              to="/destinations"
              className="group relative bg-gradient-to-r from-earth-600 to-earth-700 hover:from-earth-700 hover:to-earth-800 text-white px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Mountain className="mr-3 h-6 w-6" />
              Start Your Adventure 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <button className="group relative border-2 border-white/50 backdrop-blur-sm text-white hover:bg-white hover:text-earth-800 px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="mr-3 h-6 w-6" />
              Watch Journey 
            </button>
            
          </div>
          
          {/* Trust indicators */}
          
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center mb-2">
              <div className="w-1 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/60 text-xs font-roboto">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-earth-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-sage-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-earth-200 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl text-earth-800 mb-4">
              Trusted by Adventurers Worldwide
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands who have discovered the magic of mountain adventures with us
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center animate-slide-up hover:transform hover:-translate-y-2 transition-all duration-300" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-earth-100 to-earth-200 rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className="h-10 w-10 text-earth-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-poppins font-bold text-4xl text-earth-800 mb-2 group-hover:text-earth-600 transition-colors">
                  {stat.value}
                </div>
                <div className="font-roboto text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section className="py-24 bg-gradient-to-br from-sage-50 to-earth-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-5xl text-earth-800 mb-6">
              Why Choose Mountain Adventures?
            </h2>
            <p className="font-roboto text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We don't just take you to mountains – we help you connect with them. Every journey is crafted 
              to awaken your spirit of adventure and create bonds with nature that last forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-full p-3">
                    <experience.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-poppins font-bold text-2xl text-earth-800 mb-4 group-hover:text-earth-600 transition-colors">
                    {experience.title}
                  </h3>
                  <p className="font-roboto text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {experience.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-earth-200 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Destinations */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sage-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center bg-earth-100 rounded-full px-6 py-2 mb-6">
              <Mountain className="h-5 w-5 text-earth-600 mr-2" />
              <span className="font-roboto font-medium text-earth-700">Featured Expeditions</span>
            </div>
            <h2 className="font-poppins font-bold text-5xl text-earth-800 mb-6">
              Epic Mountain Destinations
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked destinations that offer the perfect blend of challenge, beauty, and unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-earth-600 to-earth-700 text-white px-4 py-2 rounded-full text-sm font-roboto font-medium">
                    {destination.tag}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-roboto text-sm font-medium text-white">{destination.rating}</span>
                    </div>
                  </div>
                  
                  {/* Duration overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center text-sm font-roboto mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {destination.duration}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-poppins font-bold text-2xl text-earth-800 mb-4 group-hover:text-earth-600 transition-colors">
                    {destination.name}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-poppins font-bold text-2xl text-earth-600">
                      {destination.price}
                    </div>
                    <div className="text-sm font-roboto text-gray-500">per person</div>
                  </div>
                  
                  <Link
                    to={`/trip/${destination.id}`}
                    className="group/btn w-full bg-gradient-to-r from-earth-600 to-earth-700 hover:from-earth-700 hover:to-earth-800 text-white py-4 px-6 rounded-2xl font-roboto font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                  >
                    Explore Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-earth-300 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/destinations"
              className="group inline-flex items-center bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Compass className="mr-3 h-6 w-6" />
              Discover All Destinations
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-earth-600 via-earth-700 to-earth-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-slide-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <Heart className="h-5 w-5 text-red-400 mr-2" />
              <span className="font-roboto font-medium">Join the Adventure Community</span>
            </div>
            
            <h2 className="font-poppins font-bold text-5xl md:text-6xl mb-8 leading-tight">
              Your Mountain Adventure 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Awaits
              </span>
            </h2>
            
            <p className="font-roboto text-xl mb-12 text-earth-100 max-w-3xl mx-auto leading-relaxed">
              Don't let another season pass without experiencing the raw beauty and transformative power 
              of the mountains. Your journey of a lifetime starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/destinations"
                className="group relative bg-white text-earth-800 hover:bg-cream-50 px-10 py-5 rounded-2xl font-roboto font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-earth-100 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Mountain className="mr-3 h-6 w-6" />
                Begin Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group border-2 border-white/50 backdrop-blur-sm text-white hover:bg-white hover:text-earth-800 px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Plan Custom Trip</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;