import React, { useState } from 'react';
import { Heart, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'beaches', name: 'Beaches' },
    { id: 'mountains', name: 'Mountains' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'food', name: 'Food' },
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beaches',
      title: 'Sunset at Goa Beach',
      location: 'Goa, India',
      likes: 243,
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mountains',
      title: 'Manali Valley View',
      location: 'Himachal Pradesh, India',
      likes: 189,
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture',
      title: 'Golden Temple',
      location: 'Amritsar, Punjab',
      likes: 312,
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure',
      title: 'Kerala Backwaters',
      location: 'Kerala, India',
      likes: 156,
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture',
      title: 'Rajasthan Palace',
      location: 'Rajasthan, India',
      likes: 278,
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mountains',
      title: 'Ladakh Landscape',
      location: 'Ladakh, India',
      likes: 203,
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beaches',
      title: 'Beach Paradise',
      location: 'Goa, India',
      likes: 167,
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure',
      title: 'Mountain Trekking',
      location: 'Himachal Pradesh, India',
      likes: 134,
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Local Cuisine',
      location: 'India',
      likes: 89,
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture',
      title: 'Traditional Art',
      location: 'India',
      likes: 221,
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mountains',
      title: 'Himalayan Peak',
      location: 'Nepal',
      likes: 345,
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beaches',
      title: 'Tropical Paradise',
      location: 'Andaman Islands',
      likes: 298,
    },
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredPhotos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="bg-cream-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-earth-800 mb-4">
            Travel Gallery
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking moments captured by our travelers. Get inspired for your next adventure!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-roboto font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-earth-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-earth-100 hover:text-earth-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.05}s`}}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="font-poppins font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="font-roboto text-sm text-gray-200 mb-2">{photo.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="font-roboto text-sm">{photo.likes}</span>
                    </div>
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="font-roboto text-gray-600 text-lg">
              No photos found in this category.
            </p>
          </div>
        )}

        {/* Travel Stories Section */}
        <div className="mt-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-earth-800 mb-4">
              Travel Stories
            </h2>
            <p className="font-roboto text-lg text-gray-600">
              Watch inspiring travel stories from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((story, index) => (
              <div 
                key={story} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative">
                  <img
                    src={`https://images.pexels.com/photos/${1430677 + story}/pexels-photo-${1430677 + story}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={`Travel Story ${story}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <div className="w-0 h-0 border-l-[12px] border-l-earth-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                    Amazing Journey to {story === 1 ? 'Ladakh' : story === 2 ? 'Kerala' : 'Rajasthan'}
                  </h3>
                  <p className="font-roboto text-gray-600 text-sm mb-3">
                    Watch how {story === 1 ? 'Priya' : story === 2 ? 'Rahul' : 'Sneha'} discovered the beauty of India
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 font-roboto">
                    <span>2 min read</span>
                    <span>❤️ {120 + story * 15}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image */}
            <img
              src={filteredPhotos[selectedImage].src}
              alt={filteredPhotos[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
              <h3 className="font-poppins font-semibold text-lg mb-1">
                {filteredPhotos[selectedImage].title}
              </h3>
              <p className="font-roboto text-gray-200">
                {filteredPhotos[selectedImage].location}
              </p>
              <div className="flex items-center mt-2">
                <Heart className="h-4 w-4 mr-1" />
                <span className="font-roboto text-sm">{filteredPhotos[selectedImage].likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;