import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navigation: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
  ];

  return (
    <nav className="bg-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500" onClick={closeMenu}>
          FlatShop
        </Link>

        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium ${
                location.pathname === item.path ? 'text-blue-500' : 'text-gray-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button className="flex items-center text-gray-600">
                  <span className="mr-2">{user?.name}</span>
                  <User className="h-5 w-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden z-10">
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 bg-white"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 flex items-center"
              >
                <User className="h-5 w-5 mr-1" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white z-10 p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium ${
                  location.pathname === item.path ? 'text-blue-500' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/cart"
              className="text-gray-600 flex items-center"
              onClick={closeMenu}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="py-1 border-t border-gray-200 mt-2">
                  <div className="px-2 py-2 text-sm text-gray-600">
                    Signed in as <span className="font-bold">{user?.email}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-2 py-2 text-sm text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 flex items-center"
                onClick={closeMenu}
              >
                <User className="h-5 w-5 mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation