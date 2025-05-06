import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect path from location state or default to home
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setError('');
      setIsLoading(true);
      
      const success = await login(email, password);
      
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log In to Your Account</h1>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            fullWidth
            required
          />
          
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            fullWidth
            required
          />
          
          <Button
            type="submit"
            fullWidth
            className="mt-4"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>For demo purposes, you can use:</p>
          <p className="mt-1">Email: user@example.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;