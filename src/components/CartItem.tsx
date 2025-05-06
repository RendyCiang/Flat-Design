import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-blue-500 font-medium">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center ml-4">
        <button
          onClick={handleDecrease}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="mx-2 w-8 text-center">{quantity}</span>
        
        <button
          onClick={handleIncrease}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="ml-4 text-right">
        <p className="text-lg font-medium text-gray-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
        
        <button
          onClick={handleRemove}
          className="text-red-500 p-1"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem