import React from 'react';

const deals = [
  {
    id: 1,
    name: 'Wireless Headphones',
    originalPrice: 2999,
    dealPrice: 1999,
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=300',
  },
  {
    id: 2,
    name: 'Smart Watch',
    originalPrice: 4999,
    dealPrice: 3499,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=300',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    originalPrice: 1999,
    dealPrice: 1299,
    image: 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&w=300',
  },
];

const Deals: React.FC = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-8">Exclusive Deals</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {deals.map((deal) => (
        <div key={deal.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src={deal.image} alt={deal.name} className="w-32 h-32 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2">{deal.name}</h2>
          <div className="mb-2">
            <span className="text-gray-500 line-through mr-2">₹{deal.originalPrice}</span>
            <span className="text-red-600 font-bold text-lg">₹{deal.dealPrice}</span>
          </div>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Limited Time Offer</span>
        </div>
      ))}
    </div>
  </div>
);

export default Deals; 