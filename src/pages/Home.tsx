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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-green-50 border-[3px] border-black rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="public/77357241-63fc-4b05-9ddd-ee72a43b2b73.mp4"type="video/mp4" />
          </video>
          <audio autoPlay loop muted={isMuted} className="hidden">
            <source src="src/assets/audio.mp3" type="audio/mp3" />
          </audio>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 bg-yellow-300 border-2 border-black text-black p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 z-20 shadow-[3px_3px_0_rgba(0,0,0,1)]"
          title={isMuted ? 'Unmute nature sounds' : 'Mute sounds'}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>

        <div className="absolute top-20 left-10 w-20 h-20 bg-white border-2 border-black rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 border-2 border-black rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-lime-400 border-2 border-black rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 text-center text-black max-w-6xl mx-auto px-4 animate-fade-in">
          <div className="inline-flex items-center bg-yellow-200 border-2 border-black rounded-full px-6 py-2 mb-6 animate-fade-in shadow-[3px_3px_0_rgba(0,0,0,1)]">
            <Star className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="font-roboto text-sm font-medium">India's #1 Mountain Adventure Company</span>
          </div>

          <h1 className="font-poppins font-bold text-6xl md:text-8xl mb-6 leading-tight animate-fade-in text-black">
            Explore <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500">
              the Great Outdoors
            </span>
          </h1>

          <p className="font-roboto text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover curated mountain experiences, crafted with AI to give you the ultimate adventure journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in">
            <Link
              to="/destinations"
              className="group relative bg-black text-yellow-300 hover:bg-white hover:text-black px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
            >
              <div className="absolute inset-0 bg-yellow-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Mountain className="mr-3 h-6 w-6 z-10" />
              Start Your Adventure
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform z-10" />
            </Link>

            <Link
              to="/adventure-destinations"
              className="group relative bg-black text-lime-300 hover:bg-white hover:text-black px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
            >
              <div className="absolute inset-0 bg-lime-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Compass className="mr-3 h-6 w-6 z-10" />
              Explore Adventure Sites
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform z-10" />
            </Link>

            <button className="group relative border-2 border-black bg-white text-black hover:bg-yellow-200 px-10 py-5 rounded-2xl font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <Play className="mr-3 h-6 w-6" />
              Watch Journey
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-black rounded-full flex justify-center mb-2">
              <div className="w-1 h-4 bg-black rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-black text-xs font-roboto">Scroll to explore</span>
          </div>
        </div>
      </section>


      {/* Enhanced CTA Section */}
      <section className="py-24 bg-cream-100 text-earth-900 relative overflow-hidden border-y-8 border-black">
        {/* Background shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-16 left-16 w-64 h-64 border-4 border-black rounded-full bg-orange-200 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-black rounded-full bg-yellow-300 animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-black rounded-full bg-pink-200 animate-spin-slow"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-white border-4 border-black rounded-full px-6 py-3 mb-8 shadow-md">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="font-roboto font-bold text-lg">Join the Adventure Community</span>
            </div>

            <h2 className="font-poppins font-extrabold text-5xl md:text-6xl mb-8 leading-tight">
              Your Mountain Adventure <br />
              <span className="bg-yellow-400 text-black px-2 py-1 border-4 border-black inline-block rounded-md">
                Awaits
              </span>
            </h2>

            <p className="font-roboto text-lg md:text-xl mb-12 text-earth-800 max-w-3xl mx-auto leading-relaxed border-l-4 border-black pl-4">
              Don’t let another season pass without experiencing the raw beauty and transformative power
              of the mountains. Your journey of a lifetime starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/destinations"
                className="group relative bg-white border-4 border-black hover:bg-cream-300 px-10 py-5 rounded-xl font-roboto font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Mountain className="mr-3 h-6 w-6 text-black" />
                Begin Your Journey
                <ArrowRight className="ml-3 h-6 w-6 text-black group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group border-4 border-black bg-pink-300 text-black hover:bg-white hover:text-earth-900 px-10 py-5 rounded-xl font-roboto font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
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