import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center mb-8">
        <Link to="/cart" className="flex items-center text-gray-600 hover:text-blue-500 mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* Step indicator */}
            <div className="flex mb-8">
              <div className={`w-1/2 text-center relative ${step === 1 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>
                <div className={`h-8 w-8 rounded-full ${step === 1 ? 'bg-blue-500' : 'bg-gray-300'} mx-auto flex items-center justify-center text-white mb-2`}>
                  1
                </div>
                <span>Shipping</span>
                <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              <div className={`w-1/2 text-center ${step === 2 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>
                <div className={`h-8 w-8 rounded-full ${step === 2 ? 'bg-blue-500' : 'bg-gray-300'} mx-auto flex items-center justify-center text-white mb-2`}>
                  2
                </div>
                <span>Payment</span>
              </div>
            </div>

            {step === 1 ? (
              // Shipping form
              <form onSubmit={handleNextStep}>
                <h2 className="text-xl font-medium text-gray-900 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="mt-4">
                  Continue to Payment
                </Button>
              </form>
            ) : (
              // Payment form
              <form onSubmit={handlePlaceOrder}>
                <h2 className="text-xl font-medium text-gray-900 mb-6">Payment Information</h2>
                <div className="flex items-center mb-6">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Secure Payment</span>
                </div>
                <Input
                  label="Card Number"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Name on Card"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Order summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>
            
            <div className="border-b border-gray-200 pb-4 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between mb-2">
                  <div className="flex">
                    <span>
                      {item.product.name} {item.quantity > 1 && `× ${item.quantity}`}
                    </span>
                  </div>
                  <span className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-bold text-blue-500">
                ${(totalPrice + totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;