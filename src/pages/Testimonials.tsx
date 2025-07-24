import React from 'react';
import { Star, Quote, Users, Heart, MapPin, Settings, Car } from 'lucide-react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Priya Sharma',
            location: 'Mumbai, India',
            trip: 'Goa Beach Paradise',
            rating: 5,
            comment: 'The most amazing beach vacation I\'ve ever had! The team at Wanderers Club made sure every detail was perfect. From the beautiful beachfront resort to the thrilling water sports, everything exceeded my expectations. The sunset cruise was absolutely magical!',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2 weeks ago',
        },
        {
            id: 2,
            name: 'Rahul Patel',
            location: 'Delhi, India',
            trip: 'Manali Adventure',
            rating: 5,
            comment: 'An incredible mountain adventure! The trekking routes were challenging yet rewarding, and the views were breathtaking. Our guide was extremely knowledgeable and made sure we were safe throughout the journey. The snow activities were a bonus!',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '1 month ago',
        },
        {
            id: 3,
            name: 'Sneha Reddy',
            location: 'Bangalore, India',
            trip: 'Amritsar Heritage',
            rating: 5,
            comment: 'A deeply spiritual and cultural experience. Visiting the Golden Temple was life-changing, and the hospitality we received was unmatched. The food tour was fantastic - we tried authentic Punjabi cuisine that was absolutely delicious!',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2 months ago',
        },
        {
            id: 4,
            name: 'Arjun Mehta',
            location: 'Pune, India',
            trip: 'Kerala Backwaters',
            rating: 5,
            comment: 'The houseboat experience was serene and rejuvenating. Cruising through the backwaters while enjoying traditional Kerala cuisine was unforgettable. The Ayurvedic spa treatments were the perfect way to relax. Highly recommend!',
            image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '3 months ago',
        },
        {
            id: 5,
            name: 'Kavya Joshi',
            location: 'Chennai, India',
            trip: 'Rajasthan Royal',
            rating: 4,
            comment: 'Living like royalty in the palace hotels was a dream come true! The architecture was stunning, and the desert safari was thrilling. The folk performances in the evening were mesmerizing. A truly regal experience!',
            image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '4 months ago',
        },
        {
            id: 6,
            name: 'Vikram Singh',
            location: 'Kolkata, India',
            trip: 'Ladakh Expedition',
            rating: 5,
            comment: 'The most challenging yet rewarding trip of my life! The high-altitude landscapes were otherworldly, and visiting the monasteries was peaceful. The bike rides through mountain passes were exhilarating. Truly a bucket-list experience!',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '5 months ago',
        },
    ];

    const travelQuotes = [
        {
            quote: "Travel makes one modest. You see what a tiny place you occupy in the world.",
            author: "Gustave Flaubert"
        },
        {
            quote: "The world is a book and those who do not travel read only one page.",
            author: "Augustine of Hippo"
        },
        {
            quote: "Travel is the only thing you buy that makes you richer.",
            author: "Anonymous"
        },
        {
            quote: "Adventure is worthwhile in itself.",
            author: "Amelia Earhart"
        },
    ];

    const stats = [
        { value: '4.9', label: 'Average Rating', description: 'Based on 500+ reviews' },
        { value: '98%', label: 'Satisfaction Rate', description: 'Happy customers' },
        { value: '10K+', label: 'Travelers', description: 'Served successfully' },
        { value: '50+', label: 'Destinations', description: 'Across India' },
    ];

    return (
        <div className="bg-green-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 px-4 animate-fade-in-up">
                    <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-black mb-4 
                 border-4 border-black bg-blue-300 inline-block px-6 py-2 shadow-neobrutal hover:scale-105 transition-transform duration-300">
                        What Our Travelers Say
                    </h1>

                    <p className="font-roboto text-lg text-black max-w-2xl mx-auto bg-white/90 border-4 border-black 
                px-6 py-4 mt-4 shadow-neobrutal rounded hover:translate-y-[-2px] transition-all duration-300">
                        Real stories from real travelers who embarked on unforgettable journeys with <span className="underline decoration-2 decoration-pink-500">Wanderers Club</span>
                    </p>
                </div>


                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-green-200 border-4 border-black rounded-lg p-6 text-center 
                 shadow-neobrutal hover:shadow-lg transition-all duration-300 transform 
                 hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
                        >
                            <div className="font-poppins font-extrabold text-3xl text-black mb-2">
                                {stat.value}
                            </div>
                            <div className="font-roboto font-bold text-black text-lg mb-1 underline decoration-pink-500">
                                {stat.label}
                            </div>
                            <div className="font-roboto text-sm text-gray-800">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-sage rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-4">
                                <Quote className="h-8 w-8 text-earth-400" />
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < testimonial.rating
                                            ? 'text-green-500 fill-current'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="font-roboto text-gray-700 text-center mb-6 leading-relaxed">
                                "{testimonial.comment}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center justify-center space-x-4 
                bg-white/30 backdrop-blur-md border border-white/20 
                rounded-xl shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">

                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border border-white/50 shadow-inner"
                                />

                                <div className="text-left">
                                    <h3 className="font-poppins font-semibold text-white drop-shadow-sm">
                                        {testimonial.name}
                                    </h3>
                                    <p className="font-roboto text-sm text-white/80">
                                        {testimonial.location}
                                    </p>
                                    <p className="font-roboto text-xs text-white/60 font-medium">
                                        {testimonial.trip}
                                    </p>
                                </div>
                            </div>


                            {/* Date */}
                            <div className="text-center mt-4">
                                <span className="font-roboto text-xs text-gray-500">
                                    {testimonial.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Travel Quotes Section */}
                <div className="bg-pink-300 border-4 border-black rounded-2xl p-8 md:p-12 mb-16 text-black shadow-neobrutal animate-fade-in-up">
                    <div className="text-center mb-8">
                        <h2 className="font-poppins font-extrabold text-3xl mb-4 border-2 border-black inline-block px-4 py-2 bg-white shadow-neobrutal">
                            Words That Inspire Wanderlust
                        </h2>
                        <p className="font-roboto text-lg text-black/80">
                            Timeless quotes that capture the essence of travel
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {travelQuotes.map((quote, index) => (
                            <div
                                key={index}
                                className="text-center border-4 border-black p-6 rounded-xl bg-white shadow-neobrutal transform transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
                            >
                                <Quote className="h-8 w-8 text-black mx-auto mb-4" />
                                <p className="font-roboto text-lg italic mb-4 leading-relaxed text-black">
                                    "{quote.quote}"
                                </p>
                                <p className="font-poppins font-semibold text-pink-600">
                                    — {quote.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA Section */}
                <div className="bg-sage-50 rounded-2xl p-8 md:p-12 text-center animate-slide-up border-4 border-black shadow-neobrutal">
                    {/* Services Section */}
                    <div className="mb-12">
                        <h2 className="font-poppins font-bold text-3xl text-earth-800 mb-6 border-4 border-black inline-block px-4 py-2 rounded-lg shadow-neobrutal">
                            Our Travel Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <Users className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Group Tour Packages
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    Join like-minded travelers on exciting group adventures with professional guides
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <Heart className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Family Packages
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    Kid-friendly destinations and activities perfect for family bonding and memories
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <Star className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Religious Packages
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    Spiritual journeys including Chardham Yatra and other sacred pilgrimages
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <MapPin className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Foreign Countries Packages
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    International travel experiences with visa support and local expertise
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <Settings className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Customized Tour Packages
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    Tailor-made travel experiences designed specifically for your preferences
                                </p>
                            </div>

                            <div className="bg-white rounded-xl border-4 border-black shadow-neobrutal p-6 hover:shadow-neobrutal-hover transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-inner">
                                    <Car className="h-8 w-8 text-earth-600" />
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                                    Rental Cars
                                </h3>
                                <p className="font-roboto text-gray-600 text-sm">
                                    Self-drive options with well-maintained vehicles for independent exploration
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-poppins font-bold text-3xl text-earth-800 mb-4 border-4 border-black inline-block px-4 py-2 rounded-lg shadow-neobrutal">
                        Ready to Create Your Own Story?
                    </h2>
                    <p className="font-roboto text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied travelers and create memories that will last a lifetime.
                        Your next adventure is just a click away!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-earth-600 hover:bg-earth-700 text-white px-8 py-4 rounded-lg font-roboto font-semibold text-lg transition-colors duration-300 transform hover:scale-105 border-4 border-black shadow-neobrutal">
                            Start Your Journey
                        </button>
                        <button className="border-2 border-earth-600 text-earth-600 hover:bg-earth-600 hover:text-white px-8 py-4 rounded-lg font-roboto font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-4 border-black shadow-neobrutal">
                            Share Your Story
                        </button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center animate-fade-in-up">
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-100">

                        {/* Verified Reviews */}
                        <div className="flex items-center space-x-2 px-3 py-2 border-4 border-black rounded-md bg-green-400 shadow-neobrutal hover:scale-105 transition-all duration-300">
                            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-sm">✓</span>
                            </div>
                            <span className="font-roboto text-black font-semibold">Verified Reviews</span>
                        </div>

                        {/* Secure Booking */}
                        <div className="flex items-center space-x-2 px-3 py-2 border-4 border-black rounded-md bg-blue-400 shadow-neobrutal hover:scale-105 transition-all duration-300">
                            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-sm">🔒</span>
                            </div>
                            <span className="font-roboto text-black font-semibold">Secure Booking</span>
                        </div>

                        {/* Top Rated */}
                        <div className="flex items-center space-x-2 px-3 py-2 border-4 border-black rounded-md bg-yellow-300 shadow-neobrutal hover:scale-105 transition-all duration-300">
                            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-sm">⭐</span>
                            </div>
                            <span className="font-roboto text-black font-semibold">Top Rated</span>
                        </div>

                        {/* 24/7 Support */}
                        <div className="flex items-center space-x-2 px-3 py-2 border-4 border-black rounded-md bg-purple-300 shadow-neobrutal hover:scale-105 transition-all duration-300">
                            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-xs">24/7</span>
                            </div>
                            <span className="font-roboto text-black font-semibold">Support</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;