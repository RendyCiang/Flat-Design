import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct || null);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 w-full max-w-lg bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={handleGoBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <button 
        onClick={handleGoBack}
        className="flex items-center text-gray-600 hover:text-blue-500 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-500 mb-6">${product.price.toFixed(2)}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="block text-gray-700 font-medium mr-4">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <Button 
              onClick={handleAddToCart}
              fullWidth
              size="lg"
              className="flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Details</h2>
            <ul className="text-gray-600 space-y-2">
              <li>Category: <span className="font-medium">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></li>
              <li>Availability: <span className="text-green-500 font-medium">In Stock</span></li>
              <li>Shipping: <span className="font-medium">Free shipping</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;