// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import { useEffect } from 'react';

// 🔹 Komponen untuk menginisialisasi RealEye SDK
const RealEyeIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.text = `
      import EmbeddedPageSdk from "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.7.1.js";
      window.addEventListener("DOMContentLoaded", () => {
        const debugMode = false;
        const stimulusId = null;
        const forceRun = false;
        window.reSdk = new EmbeddedPageSdk(debugMode, stimulusId, forceRun);
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
};

// 🔒 Komponen Route yang hanya bisa diakses saat login
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// 📦 Semua routing dan layout
function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <RealEyeIntegration /> {/* ⬅️ Inisialisasi RealEye SDK */}
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// 🧠 Root komponen utama
function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
