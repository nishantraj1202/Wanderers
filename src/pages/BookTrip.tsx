import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, CreditCard, Shield, ArrowLeft, Check } from 'lucide-react';

const BookTrip: React.FC = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Trip Details
    startDate: '',
    travelers: 1,
    roomType: 'standard',
    
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Traveler Details
    travelerDetails: [
      { firstName: '', lastName: '', age: '', gender: '' }
    ],
    
    // Additional Services
    travelInsurance: false,
    airportTransfer: true,
    specialRequests: '',
    
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  // Mock trip data
  const trip = {
    id: 1,
    name: 'Goa Beach Paradise',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 12999,
    duration: '4 Days 3 Nights',
    inclusions: ['Accommodation', 'Breakfast & Dinner', 'Sightseeing', 'Transfers'],
  };

  const steps = [
    { number: 1, title: 'Trip Details', description: 'Select dates and travelers' },
    { number: 2, title: 'Personal Info', description: 'Your contact information' },
    { number: 3, title: 'Traveler Details', description: 'Information for all travelers' },
    { number: 4, title: 'Add-ons', description: 'Optional services' },
    { number: 5, title: 'Payment', description: 'Complete your booking' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTravelerChange = (index: number, field: string, value: string) => {
    const updatedTravelers = [...formData.travelerDetails];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setFormData(prev => ({ ...prev, travelerDetails: updatedTravelers }));
  };

  const addTraveler = () => {
    setFormData(prev => ({
      ...prev,
      travelerDetails: [...prev.travelerDetails, { firstName: '', lastName: '', age: '', gender: '' }]
    }));
  };

  const removeTraveler = (index: number) => {
    if (formData.travelerDetails.length > 1) {
      const updatedTravelers = formData.travelerDetails.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, travelerDetails: updatedTravelers }));
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateTotal = () => {
    let total = trip.price * formData.travelers;
    if (formData.travelInsurance) total += 999;
    if (formData.airportTransfer) total += 1500;
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
    alert('Booking confirmed! You will receive a confirmation email shortly.');
  };

  return (
    <div className="bg-cream-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <Link
            to={`/trip/${id}`}
            className="inline-flex items-center text-earth-600 hover:text-earth-700 font-roboto font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Trip Details
          </Link>
          <h1 className="font-poppins font-bold text-3xl text-earth-800 mb-2">
            Book Your Trip
          </h1>
          <p className="font-roboto text-gray-600">
            Complete your booking for {trip.name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-up">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-roboto font-bold ${
                      currentStep >= step.number
                        ? 'bg-earth-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className="font-roboto font-medium text-gray-800">{step.title}</div>
                      <div className="font-roboto text-sm text-gray-600">{step.description}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-1 mx-4 ${
                        currentStep > step.number ? 'bg-earth-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Trip Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-poppins font-bold text-xl text-earth-800 mb-4">
                      Trip Details
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Start Date *
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Number of Travelers *
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Room Type
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { value: 'standard', label: 'Standard Room', price: 0 },
                            { value: 'deluxe', label: 'Deluxe Room', price: 2000 },
                            { value: 'suite', label: 'Suite', price: 5000 },
                          ].map(room => (
                            <label key={room.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="radio"
                                name="roomType"
                                value={room.value}
                                checked={formData.roomType === room.value}
                                onChange={handleInputChange}
                                className="mr-3"
                              />
                              <div>
                                <div className="font-roboto font-medium">{room.label}</div>
                                {room.price > 0 && (
                                  <div className="font-roboto text-sm text-gray-600">+₹{room.price}</div>
                                )}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-poppins font-bold text-xl text-earth-800 mb-4">
                      Personal Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Traveler Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="font-poppins font-bold text-xl text-earth-800">
                        Traveler Details
                      </h2>
                      <button
                        type="button"
                        onClick={addTraveler}
                        className="bg-earth-600 hover:bg-earth-700 text-white px-4 py-2 rounded-lg font-roboto font-medium transition-colors"
                      >
                        Add Traveler
                      </button>
                    </div>
                    
                    {formData.travelerDetails.map((traveler, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-roboto font-semibold text-lg">
                            Traveler {index + 1}
                          </h3>
                          {formData.travelerDetails.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeTraveler(index)}
                              className="text-red-600 hover:text-red-700 font-roboto text-sm"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block font-roboto font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              value={traveler.firstName}
                              onChange={(e) => handleTravelerChange(index, 'firstName', e.target.value)}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                            />
                          </div>
                          
                          <div>
                            <label className="block font-roboto font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              value={traveler.lastName}
                              onChange={(e) => handleTravelerChange(index, 'lastName', e.target.value)}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                            />
                          </div>
                          
                          <div>
                            <label className="block font-roboto font-medium text-gray-700 mb-2">
                              Age *
                            </label>
                            <input
                              type="number"
                              value={traveler.age}
                              onChange={(e) => handleTravelerChange(index, 'age', e.target.value)}
                              required
                              min="1"
                              max="100"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                            />
                          </div>
                          
                          <div>
                            <label className="block font-roboto font-medium text-gray-700 mb-2">
                              Gender *
                            </label>
                            <select
                              value={traveler.gender}
                              onChange={(e) => handleTravelerChange(index, 'gender', e.target.value)}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 4: Add-ons */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="font-poppins font-bold text-xl text-earth-800 mb-4">
                      Additional Services
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Travel Insurance</div>
                          <div className="font-roboto text-sm text-gray-600">Comprehensive coverage for your trip</div>
                        </div>
                        <div className="flex items-center">
                          <span className="font-roboto font-medium text-earth-600 mr-4">₹999</span>
                          <input
                            type="checkbox"
                            name="travelInsurance"
                            checked={formData.travelInsurance}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-earth-600"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-roboto font-medium text-gray-800">Airport Transfer</div>
                          <div className="font-roboto text-sm text-gray-600">Round-trip airport pickup and drop</div>
                        </div>
                        <div className="flex items-center">
                          <span className="font-roboto font-medium text-earth-600 mr-4">₹1,500</span>
                          <input
                            type="checkbox"
                            name="airportTransfer"
                            checked={formData.airportTransfer}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-earth-600"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-roboto font-medium text-gray-700 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto resize-none"
                        placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Step 5: Payment */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <h2 className="font-poppins font-bold text-xl text-earth-800 mb-4">
                      Payment Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Name on Card *
                        </label>
                        <input
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-roboto font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 font-roboto"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-roboto text-green-800">
                          Your payment information is secure and encrypted
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-roboto font-medium transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-roboto font-semibold transition-colors"
                    >
                      Complete Booking
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 animate-slide-in-right">
              <h3 className="font-poppins font-bold text-xl text-earth-800 mb-4">
                Booking Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-earth-800">
                    {trip.name}
                  </h4>
                  <p className="font-roboto text-gray-600">{trip.duration}</p>
                </div>
                
                <div className="space-y-2 text-sm font-roboto">
                  <div className="flex justify-between">
                    <span>Base Price (x{formData.travelers})</span>
                    <span>₹{(trip.price * formData.travelers).toLocaleString()}</span>
                  </div>
                  
                  {formData.travelInsurance && (
                    <div className="flex justify-between">
                      <span>Travel Insurance</span>
                      <span>₹999</span>
                    </div>
                  )}
                  
                  {formData.airportTransfer && (
                    <div className="flex justify-between">
                      <span>Airport Transfer</span>
                      <span>₹1,500</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span className="text-earth-600">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 text-sm font-roboto text-gray-600">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Free cancellation up to 48 hours
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Instant confirmation
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  24/7 customer support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;