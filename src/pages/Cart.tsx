import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/ui/Button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-4">
          <ShoppingBag className="h-16 w-16 text-gray-300" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products">
          <Button>
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">Cart Items ({totalItems})</h2>
              <button 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>
            
            <div>
              {items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold text-blue-500">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button 
                fullWidth
                size="lg"
                className="flex items-center justify-center"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            
            <div className="mt-4 text-center text-gray-500 text-sm">
              <p>Free shipping on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;