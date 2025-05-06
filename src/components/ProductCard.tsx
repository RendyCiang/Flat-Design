import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative mb-4 aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-xl font-bold text-blue-500 mb-2">${product.price.toFixed(2)}</p>
      </Link>
      <Button 
        onClick={() => addToCart(product, 1)}
        fullWidth 
        className="mt-2 flex items-center justify-center"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard