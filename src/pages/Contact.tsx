import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@wanderersclub.com', 'support@wanderersclub.com'],
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Travel Street', 'Mumbai, Maharashtra 400001'],
      description: 'Visit us for personalized planning'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 9:00 AM - 8:00 PM', 'Sat-Sun: 10:00 AM - 6:00 PM'],
      description: 'Always here when you need us'
    },
  ];

  const faqs = [
    {
      question: 'How do I book a trip?',
      answer: 'You can book a trip by selecting your desired destination, choosing your travel dates, and completing the booking form. Our team will contact you within 24 hours to confirm details.'
    },
    {
      question: 'What is included in the trip packages?',
      answer: 'Our packages typically include accommodation, meals as specified, transportation, guided tours, and entry fees to attractions. Specific inclusions vary by package - check individual trip details.'
    },
    {
      question: 'Can I customize my trip?',
      answer: 'Absolutely! We offer customizable packages to suit your preferences, budget, and time constraints. Contact us to discuss your specific requirements.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We offer free cancellation up to 48 hours before the trip start date. For cancellations within 48 hours, a 25% processing fee applies. Full details are provided during booking.'
    },
    {
      question: 'Do you provide travel insurance?',
      answer: 'While travel insurance is not automatically included, we highly recommend it and can help you purchase comprehensive coverage for your trip.'
    },
    {
      question: 'Are group discounts available?',
      answer: 'Yes! We offer attractive group discounts for bookings of 8 or more people. Contact us for special group rates and custom packages.'
    },
  ];

  return (
    <div className="bg-cream-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-earth-800 mb-4">
            Get in Touch
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your next adventure? We're here to help you plan the perfect trip!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-100 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-earth-600" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-3">
                {item.title}
              </h3>
              <div className="space-y-1 mb-3">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="font-roboto text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="font-roboto text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
            <h2 className="font-poppins font-bold text-2xl text-earth-800 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-roboto font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-roboto font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block font-roboto font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-roboto font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">New Booking</option>
                    <option value="modification">Modify Existing Booking</option>
                    <option value="cancellation">Cancellation</option>
                    <option value="custom">Custom Trip Planning</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-roboto font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto resize-none"
                  placeholder="Tell us about your travel plans or ask any questions..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-earth-600 hover:bg-earth-700 text-white py-4 px-6 rounded-lg font-roboto font-semibold text-lg transition-colors duration-300 flex items-center justify-center group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-in-right">
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0147436653943!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635789431234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wanderers Club Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-2">
                  Visit Our Office
                </h3>
                <p className="font-roboto text-gray-600 mb-4">
                  Drop by for personalized trip planning and to meet our travel experts in person.
                </p>
                <div className="flex items-center text-earth-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-roboto text-sm">123 Travel Street, Mumbai, MH 400001</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 animate-slide-in-right">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="font-poppins font-semibold text-lg text-green-800">
                  WhatsApp Support
                </h3>
              </div>
              <p className="font-roboto text-green-700 mb-4">
                Get instant support and quick responses on WhatsApp. Perfect for urgent travel queries!
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-earth-50 border border-earth-200 rounded-xl p-6 animate-slide-in-right">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-earth-600 mr-3" />
                <h3 className="font-poppins font-semibold text-lg text-earth-800">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 font-roboto text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <p className="font-roboto text-sm text-gray-600 mt-4">
                💡 For urgent matters outside business hours, use WhatsApp support for faster response.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-earth-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-roboto text-lg text-gray-600">
              Quick answers to common questions about our travel services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="font-poppins font-semibold text-lg text-earth-800 mb-3">
                  {faq.question}
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;