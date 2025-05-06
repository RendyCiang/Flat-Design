import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-blue-500 hover:text-blue-600 font-medium">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;