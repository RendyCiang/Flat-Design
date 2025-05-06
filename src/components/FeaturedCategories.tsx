import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Cutting-edge tech for modern life'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comfortable, sustainable fashion'
  },
  {
    id: 'home',
    name: 'Home',
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Beautiful, functional home goods'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Clean, natural beauty products'
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform group-hover:translate-y-[-4px]">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;