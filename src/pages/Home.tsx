import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturedCategories from '../components/FeaturedCategories';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose FlatShop?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">We carefully select each product to ensure exceptional quality and durability.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders delivered quickly and reliably, with real-time tracking.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Shop with confidence knowing your payment information is always protected.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;