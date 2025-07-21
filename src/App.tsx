import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import Header from './components/UI/Header';
import Hero from './components/UI/Hero';
import ProductCard from './components/UI/ProductCard';
import ProductModal from './components/UI/ProductModal';
import ProductDetailsPage from './components/UI/ProductDetailsPage';
import CartSidebar from './components/UI/CartSidebar';
import CategoryFilter from './components/UI/CategoryFilter';
import PaymentModal from './components/UI/PaymentModal';
import About from './components/UI/About';
import Contact from './components/UI/Contact';
import Deals from './components/UI/Deals';
import Login from './components/UI/Login';
import Checkout from './components/UI/Checkout';
import { products, categories } from './data/products';
import { Product, CartItem } from './types';

function AppRouter() {
  // All state and handlers from App moved here
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Countdown timer state
  const [timer, setTimer] = useState(2 * 60 * 60 + 30 * 60); // 2 hours 30 minutes in seconds

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    // Listen for product navigation events
    const handleProductNavigation = (event: CustomEvent) => {
      const product = event.detail;
      setSelectedProduct(product);
      setShowProductDetails(true);
      setIsModalOpen(false);
      setIsCartOpen(false);
    };

    // Listen for checkout events
    const handleCheckoutEvent = () => {
      setIsPaymentOpen(true);
      setShowProductDetails(false);
    };

    window.addEventListener('navigateToProduct', handleProductNavigation as EventListener);
    window.addEventListener('openCheckout', handleCheckoutEvent);

    return () => {
      window.removeEventListener('navigateToProduct', handleProductNavigation as EventListener);
      window.removeEventListener('openCheckout', handleCheckoutEvent);
    };
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const navigate = useNavigate();
  const handleViewDetails = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product: Product, quantity: number = 1, color: string = '', size: string = '') => {
    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id && 
               item.selectedColor === (color || product.colors[0]) && 
               item.selectedSize === (size || product.sizes[0])
    );

    if (existingItemIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += quantity;
      setCartItems(newCartItems);
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        selectedColor: color || product.colors[0],
        selectedSize: size || product.sizes[0]
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(cartItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // New: Get product by ID for product detail route
  const getProductById = (id: string) => products.find((p) => p.id === id);

  // New: Product details route element
  const ProductDetailsRoute = () => {
    const { id } = useParams();
    const product = getProductById(id!);
    if (!product) return <div className="p-8 text-center">Product not found.</div>;
    return (
      <ProductDetailsPage
        product={product}
        onAddToCart={handleAddToCart}
        onClose={() => window.history.back()}
      />
    );
  };

  // Show product details page (legacy modal logic)
  // if (showProductDetails && selectedProduct) {
  //   return (
  //     <ProductDetailsPage
  //       product={selectedProduct}
  //       onAddToCart={handleAddToCart}
  //       onClose={() => {
  //         setShowProductDetails(false);
  //         setSelectedProduct(null);
  //       }}
  //     />
  //   );
  // }

  const [wishlistCount, setWishlistCount] = useState(2); // Placeholder
  const [userName, setUserName] = useState('Sandeep'); // Placeholder
  const handleWishlistClick = () => {};
  const handleUserClick = () => {};

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <>
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        wishlistCount={wishlistCount}
        onWishlistClick={handleWishlistClick}
        userName={userName}
        onUserClick={handleUserClick}
      />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <section id="home">
              <Hero />
            </section>
            <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div id="categories" className="lg:col-span-1">
                  <CategoryFilter 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>
                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedCategory ? categories.find(cat => cat.slug === selectedCategory)?.name : 'All Products'}
                      </h2>
                      <p className="text-gray-600">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                        {searchQuery && ` for "${searchQuery}"`}
                      </p>
                    </div>
                  </div>
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProducts.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={() => handleAddToCart(product)}
                          onViewDetails={handleViewDetails}
                          index={index}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </main>
            {/* Modals */}
            <ProductModal
              product={selectedProduct}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddToCart={handleAddToCart}
            />
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
            />
            <PaymentModal
              isOpen={isPaymentOpen}
              onClose={() => setIsPaymentOpen(false)}
              cartItems={cartItems}
              cartTotal={cartTotal}
            />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetailsRoute />} />
        <Route path="/cart" element={<CartSidebar isOpen={true} onClose={() => navigate('/')} cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={handleCheckout} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;