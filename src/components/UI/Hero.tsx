import React, { useState, useEffect } from 'react';

const promoImages = [
  'https://www.shopickr.com/wp-content/uploads/2015/10/amazon-india-electronics-sale-2015-banner.jpg',
  'https://ouchcart.com/cdn/shop/articles/Best-Furniture-Brands-In-India.jpg?v=1686335143&width=1200',
  'https://www.trustbasket.com/cdn/shop/files/Garden_Accessories-_Desktop_2100x.png?v=1742475962',
  'https://www.intellectoutsource.com/blog/images/inspiring-ecommerce-homepage-designs.jpg',
];

const backgroundVideo = "/2.mp4";

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + promoImages.length) % promoImages.length);
  const next = () => setCurrent((current + 1) % promoImages.length);

  return (
    <section className="relative bg-white py-16 border-b overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-20">
        {/* Promo Slider */}
        <div className="relative mb-8">
          <img
            src={promoImages[current]}
            alt={`Promotion ${current + 1}`}
            className="w-full h-56 object-cover rounded-lg shadow-sm"
          />
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-100">&#8592;</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-100">&#8594;</button>
          <div className="flex justify-center mt-2 space-x-2">
            {promoImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-2 h-2 rounded-full ${current === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>SDShop</h1>
        <p className="text-lg text-white mb-8" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Discover quality products at great prices. Simple. Fast. Reliable.
        </p>
        <button 
          onClick={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-200 transition shadow"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;