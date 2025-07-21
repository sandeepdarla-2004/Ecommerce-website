import React from 'react';

const About: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    {/* Banner Image */}
    <img src="https://www.intellectoutsource.com/blog/images/inspiring-ecommerce-homepage-designs.jpg" alt="SDShop Banner" className="w-full h-56 object-cover rounded-lg mb-8" />
    <h1 className="text-3xl font-bold mb-4">🛍️ About Us</h1>
    <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
    <p className="text-gray-700 mb-4">
      Welcome to <span className="font-semibold">SDShop</span>, your one-stop destination for premium quality products and a seamless shopping experience. We’re more than just an online store—we’re a passionate team committed to delivering style, innovation, and satisfaction to your doorstep.
    </p>
    <h2 className="text-xl font-semibold mb-2">Our Story</h2>
    <p className="text-gray-700 mb-4">
      Founded in 2023, our journey began with a simple idea: to make quality products accessible to everyone. From a small startup to a trusted e-commerce brand, we’ve grown by listening to our customers, embracing technology, and staying true to our values.
    </p>
    {/* Team/Store Image */}
    <img src="https://ouchcart.com/cdn/shop/articles/Best-Furniture-Brands-In-India.jpg?v=1686335143&width=1200" alt="Our Team" className="w-full h-48 object-cover rounded-lg mb-8" />
    <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
    <p className="text-gray-700 mb-4">
      Whether you’re looking for the latest in fashion, cutting-edge gadgets, stylish home décor, or everyday essentials, we’ve curated our collections with you in mind.
    </p>
    <ul className="mb-4 text-gray-700 list-disc list-inside">
      <li>✅ High-quality products</li>
      <li>🚚 Fast & reliable shipping</li>
      <li>💬 Friendly customer support</li>
      <li>🔁 Hassle-free returns</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
    <p className="text-gray-700 mb-4">
      To create an effortless and enjoyable shopping experience that inspires trust, quality, and value—every time you visit.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
    <ul className="mb-4 text-gray-700 list-disc list-inside">
      <li>🔒 Secure Payments</li>
      <li>🛡️ Buyer Protection Guarantee</li>
      <li>⭐ Thousands of Happy Customers</li>
      <li>🌍 Shipping Across India (and globally soon!)</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Join the SDShop Family</h2>
    <p className="text-gray-700 mb-4">
      We’re more than a brand—we’re a community. Follow us on social media and be part of the journey.
    </p>
    <div className="flex space-x-4 mb-8">
      <a href="#" className="text-blue-600 hover:underline text-lg">📸 Instagram</a>
      <a href="#" className="text-blue-600 hover:underline text-lg">👍 Facebook</a>
      <a href="#" className="text-blue-600 hover:underline text-lg">🐦 Twitter</a>
      <a href="#" className="text-blue-600 hover:underline text-lg">📧 Newsletter</a>
    </div>
  </div>
);

export default About; 