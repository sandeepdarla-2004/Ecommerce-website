import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw, 
  CreditCard,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  Flag,
  User,
  Verified,
  Gift,
  Percent,
  MapPin,
  Clock,
  Edit3,
  Check
} from 'lucide-react';
import { Product } from '../../types';
import { products } from '../../data/products';
import { findPincodeData, PincodeData } from '../../data/pincodes';
import { Link, useNavigate } from 'react-router-dom';

interface ProductDetailsPageProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, color: string, size: string) => void;
  onClose: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onAddToCart, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  // Pincode state
  const [pincode, setPincode] = useState("500001");
  const [isEditingPincode, setIsEditingPincode] = useState(false);
  const [tempPincode, setTempPincode] = useState("500001");
  const [deliveryInfo, setDeliveryInfo] = useState({
    city: "Hyderabad",
    isFreeDelivery: true,
    deliveryDate: "Tomorrow",
    deliveryTime: "by 8 PM"
  });

  // Countdown timer state for order window
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

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigate = useNavigate();

  const handleAddToCart = (qty = quantity, color = selectedColor, size = selectedSize) => {
    onAddToCart(product, qty, color, size);
  };

  // Pincode handling functions
  const handlePincodeEdit = () => {
    setIsEditingPincode(true);
    setTempPincode(pincode);
  };

  const handlePincodeChange = () => {
    // Validate pincode (6 digits)
    if (!/^\d{6}$/.test(tempPincode)) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    // Find pincode data
    const pincodeData = findPincodeData(tempPincode);
    
    if (pincodeData) {
      setPincode(tempPincode);
      setDeliveryInfo({
        city: pincodeData.city,
        isFreeDelivery: pincodeData.deliveryInfo.isFreeDelivery,
        deliveryDate: pincodeData.deliveryInfo.deliveryDate,
        deliveryTime: pincodeData.deliveryInfo.deliveryTime
      });
      setIsEditingPincode(false);
    } else {
      alert("Pincode not found. Please enter a valid pincode for Andhra Pradesh or Telangana.");
    }
  };

  const handlePincodeKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePincodeChange();
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const reviews = [
    {
      id: 1,
      author: "Rajesh Kumar",
      rating: 5,
      title: "Excellent quality product!",
      content: "Really impressed with the build quality and fast delivery. Highly recommended!",
      date: "15 December 2024",
      verified: true,
      helpful: 24,
      images: []
    },
    {
      id: 2,
      author: "Priya Sharma",
      rating: 4,
      title: "Good value for money",
      content: "Product is as described. Good quality and arrived on time. Would buy again.",
      date: "12 December 2024",
      verified: true,
      helpful: 18,
      images: []
    },
    {
      id: 3,
      author: "Amit Singh",
      rating: 5,
      title: "Outstanding!",
      content: "Exceeded my expectations. The quality is top-notch and delivery was super fast.",
      date: "10 December 2024",
      verified: true,
      helpful: 31,
      images: []
    }
  ];

  const relatedProducts = [
    { id: '13', name: 'Similar Product 1', price: 199.99, image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '14', name: 'Similar Product 2', price: 299.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '15', name: 'Similar Product 3', price: 399.99, image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '16', name: 'Similar Product 4', price: 499.99, image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  // Reset options when product changes
  useEffect(() => {
    setSelectedImage(0);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
  }, [product]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button 
            onClick={onClose}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-lg border mb-4 overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discountPercentage}% off
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Product Details */}
          <div className="lg:col-span-1">
            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
            {/* Countdown Timer */}
            <div className="bg-yellow-100 text-yellow-900 rounded p-4 mb-4 text-center text-lg font-semibold">
              {timer > 0 ? (
                <>Order within {hours} hrs {minutes} mins {seconds} secs for tomorrow delivery</>
              ) : (
                <>Order window closed for tomorrow delivery</>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-blue-600 hover:underline cursor-pointer">
                {product.rating} ({product.reviewCount} ratings)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-red-600">₹{(product.price * 83).toFixed(0)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ₹{(product.originalPrice * 83).toFixed(0)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Offers */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                <Percent className="w-4 h-4 mr-2" />
                Offers
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-green-600" />
                  <span>10% Instant Discount with HDFC Bank Cards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-green-600" />
                  <span>₹500 Cashback on first purchase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Percent className="w-4 h-4 text-green-600" />
                  <span>No Cost EMI available</span>
                </div>
              </div>
            </div>

            {/* About this Item */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">About this Item</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Information */}
            <div className="border rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-3">Product Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Brand:</span>
                  <span className="ml-2 font-medium">SDShop</span>
                </div>
                <div>
                  <span className="text-gray-600">Material:</span>
                  <span className="ml-2 font-medium">Premium Quality</span>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="ml-2 font-medium">{selectedColor}</span>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-medium">{selectedSize}</span>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <span className="ml-2 font-medium">1.2 kg</span>
                </div>
                <div>
                  <span className="text-gray-600">Warranty:</span>
                  <span className="ml-2 font-medium">1 Year</span>
                </div>
              </div>
            </div>

            {/* What's in the Box */}
            <div className="border rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-3">What's in the Box?</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 1 x {product.name}</li>
                <li>• 1 x User Manual</li>
                <li>• 1 x Warranty Card</li>
                <li>• 1 x Accessories Kit</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Buying Options */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Buying Options</h3>

                {/* Color Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color: {selectedColor}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-2 border rounded-lg text-sm ${
                          selectedColor === color
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size: {selectedSize}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 border rounded-lg text-sm ${
                          selectedSize === size
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-20"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => handleAddToCart()}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => {
                      handleAddToCart();
                      navigate('/checkout');
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="space-y-4 text-sm border-t pt-4">
                  {/* Pincode Section */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-900">Delivery to</span>
                      </div>
                      {!isEditingPincode && (
                        <button
                          onClick={handlePincodeEdit}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Change</span>
                        </button>
                      )}
                    </div>
                    
                    {isEditingPincode ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={tempPincode}
                          onChange={(e) => setTempPincode(e.target.value)}
                          onKeyPress={handlePincodeKeyPress}
                          placeholder="Enter pincode"
                          maxLength={6}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        <button
                          onClick={handlePincodeChange}
                          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                        >
                          <Check className="w-3 h-3" />
                          <span>Update</span>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium text-gray-900">{deliveryInfo.city} - {pincode}</p>
                      </div>
                    )}
                  </div>

                  {/* Delivery Information */}
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-green-600" />
                    <div>
                      <span className={`font-medium ${deliveryInfo.isFreeDelivery ? 'text-green-600' : 'text-orange-600'}`}>
                        {deliveryInfo.isFreeDelivery ? 'FREE delivery' : 'Delivery charges apply'}
                      </span>
                      <span className="text-gray-700 ml-1">
                        {deliveryInfo.deliveryDate} {deliveryInfo.deliveryTime}
                      </span>
                    </div>
                  </div>
                  
                  {!deliveryInfo.isFreeDelivery && (
                    <div className="text-xs text-gray-600 bg-yellow-50 border border-yellow-200 rounded p-2">
                      💡 Add items worth ₹500 more for FREE delivery
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Order within 2 hrs 30 mins for {deliveryInfo.deliveryDate.toLowerCase()} delivery</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RotateCcw className="w-4 h-4 text-blue-600" />
                    <span>7 days replacement policy</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span>2 year warranty</span>
                  </div>
                </div>

                {/* Wishlist and Share */}
                <div className="flex space-x-4 mt-6 pt-6 border-t">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
                    <Heart className="w-4 h-4" />
                    <span>Add to Wishlist</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          
          {/* Rating Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold">{product.rating}</span>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{product.reviewCount} global ratings</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="text-sm w-8">{stars} star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Top Reviews from India</h3>
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="flex items-center text-xs text-green-600">
                          <Verified className="w-3 h-3 mr-1" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{review.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{review.date}</p>
                    <p className="text-gray-800 mb-3">{review.content}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
                        <Flag className="w-4 h-4" />
                        <span>Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Bought Together */}
        <div className="mt-12 bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Bought Together</h2>
          <div className="flex items-center space-x-4 mb-4">
            <img src={product.images[0]} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
            <span className="text-2xl">+</span>
            <img src={relatedProducts[0].image} alt={relatedProducts[0].name} className="w-20 h-20 object-cover rounded-lg" />
            <span className="text-2xl">+</span>
            <img src={relatedProducts[1].image} alt={relatedProducts[1].name} className="w-20 h-20 object-cover rounded-lg" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Total: ₹{((product.price + relatedProducts[0].price + relatedProducts[1].price) * 83).toFixed(0)}</span>
            <button 
              onClick={() => {
                // Add all three products to cart
                onAddToCart(product, 1, product.colors[0], product.sizes[0]);
                const product1 = products.find(p => p.id === relatedProducts[0].id);
                const product2 = products.find(p => p.id === relatedProducts[1].id);
                if (product1) onAddToCart(product1, 1, product1.colors[0], product1.sizes[0]);
                if (product2) onAddToCart(product2, 1, product2.colors[0], product2.sizes[0]);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Add all to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-6">Customers Who Viewed This Item Also Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{relatedProduct.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-600">(234)</span>
                </div>
                <p className="font-bold text-lg">₹{(relatedProduct.price * 83).toFixed(0)}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const fullProduct = products.find(p => p.id === relatedProduct.id);
                    if (fullProduct) {
                      onAddToCart(fullProduct, 1, fullProduct.colors[0], fullProduct.sizes[0]);
                    }
                  }}
                  className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;