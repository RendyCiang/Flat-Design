import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Search input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Category filter */}
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory(null);
            }}
            className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;