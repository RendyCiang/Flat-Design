import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">FlatShop</h3>
            <p className="text-gray-600 mb-4">
              We offer high-quality products with a focus on simplicity, elegance, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Electronics</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Clothing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Beauty</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-600">123 Flat Street, Design City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-600">support@flatshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FlatShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;