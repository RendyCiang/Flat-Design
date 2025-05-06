import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Simple Design, <br />Exceptional Products
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover our collection of thoughtfully designed products that combine beauty and functionality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-blue-500 hover:bg-gray-100 px-8"
                >
                  Shop Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-blue-600"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;