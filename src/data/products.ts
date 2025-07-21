import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', icon: 'Smartphone', productCount: 156 },
  { id: '2', name: 'Furniture', slug: 'furniture', icon: 'Sofa', productCount: 89 },
  { id: '3', name: 'Fashion', slug: 'fashion', icon: 'Shirt', productCount: 234 },
  { id: '4', name: 'Home & Garden', slug: 'home-garden', icon: 'Home', productCount: 145 },
  { id: '5', name: 'Sports', slug: 'sports', icon: 'Dumbbell', productCount: 78 },
  { id: '6', name: 'Books', slug: 'books', icon: 'BookOpen', productCount: 312 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Experience crystal-clear audio quality with deep bass and crisp highs. Perfect for music lovers, gamers, and professionals.',
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    colors: ['Black', 'White', 'Blue'],
    sizes: ['Standard'],
    features: [
      'Active Noise Cancellation Technology',
      '30-hour Battery Life with Quick Charge',
      'Premium Drivers for Superior Sound Quality',
      'Wireless Bluetooth 5.0 Connectivity',
      'Comfortable Over-Ear Design',
      'Built-in Microphone for Calls',
      'Foldable Design for Easy Storage',
      'Compatible with All Devices'
    ]
  },
  {
    id: '2',
    name: 'Modern Ergonomic Office Chair',
    price: 649.99,
    originalPrice: 799.99,
    description: 'Professional ergonomic office chair designed for all-day comfort. Features premium materials, adjustable lumbar support, and breathable mesh back. Perfect for home offices and corporate environments.',
    category: 'furniture',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: true,
    colors: ['Black', 'Gray', 'White'],
    sizes: ['Standard'],
    features: [
      'Ergonomic Lumbar Support System',
      'Height Adjustable Gas Cylinder',
      'Breathable Mesh Back Design',
      '360-Degree Swivel Base',
      'Padded Armrests',
      'Tilt Mechanism with Lock',
      'Heavy-Duty Casters',
      '5-Year Manufacturer Warranty'
    ]
  },
  {
    id: '3',
    name: 'Premium Leather Jacket',
    price: 899.99,
    originalPrice: 1199.99,
    description: 'Handcrafted genuine leather jacket with timeless design. Made from premium cowhide leather with attention to detail. Perfect for casual and semi-formal occasions.',
    category: 'fashion',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      '100% Genuine Cowhide Leather',
      'Water Resistant Treatment',
      'Multiple Interior and Exterior Pockets',
      'YKK Zippers for Durability',
      'Quilted Lining for Comfort',
      'Classic Biker Style Design',
      'Hand-Stitched Details',
      'Lifetime Craftsmanship Warranty'
    ]
  },
  {
    id: '4',
    name: 'Smart Home Security Camera',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Advanced 4K Ultra HD security camera with AI-powered features. Monitor your home 24/7 with crystal-clear video quality and smart alerts.',
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2544569/pexels-photo-2544569.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    colors: ['White', 'Black'],
    sizes: ['Standard'],
    features: [
      '4K Ultra HD Video Recording',
      'Advanced Night Vision Technology',
      'AI-Powered Motion Detection',
      'Two-Way Audio Communication',
      'Cloud Storage Integration',
      'Mobile App Control',
      'Weather Resistant Design',
      'Easy Installation Setup'
    ]
  },
  {
    id: '5',
    name: 'Minimalist Coffee Table',
    price: 449.99,
    originalPrice: 599.99,
    description: 'Beautifully crafted minimalist coffee table featuring clean lines and hidden storage. Made from sustainable wood with a modern finish that complements any living space.',
    category: 'furniture',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviewCount: 445,
    inStock: true,
    colors: ['Oak', 'Walnut', 'White'],
    sizes: ['120cm', '140cm'],
    features: [
      'Hidden Storage Compartment',
      'Solid Wood Construction',
      'Scratch and Stain Resistant Finish',
      'Modern Minimalist Design',
      'Sustainable Materials',
      'Easy Assembly Instructions',
      'Adjustable Feet for Stability',
      '2-Year Furniture Warranty'
    ]
  },
  {
    id: '6',
    name: 'Athletic Running Shoes',
    price: 159.99,
    originalPrice: 199.99,
    description: 'Professional-grade running shoes engineered for performance and comfort. Features advanced cushioning technology and breathable materials for optimal running experience.',
    category: 'sports',
    images: [
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 1567,
    inStock: true,
    colors: ['Black', 'White', 'Blue', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    features: [
      'Advanced Cushioning Technology',
      'Breathable Mesh Upper',
      'Durable Rubber Outsole',
      'Lightweight Design',
      'Moisture-Wicking Interior',
      'Arch Support System',
      'Reflective Safety Elements',
      'Machine Washable'
    ]
  },
  {
    id: '7',
    name: 'Smartphone Pro Max',
    price: 1199.99,
    originalPrice: 1399.99,
    description: 'Cutting-edge flagship smartphone with professional-grade camera system, lightning-fast 5G connectivity, and all-day battery life. Perfect for photography enthusiasts and power users.',
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 3421,
    inStock: true,
    colors: ['Space Gray', 'Silver', 'Gold', 'Blue'],
    sizes: ['128GB', '256GB', '512GB'],
    features: [
      'Professional Triple Camera System',
      '5G Network Connectivity',
      'Advanced Face ID Security',
      'Wireless and Fast Charging',
      'A17 Pro Chip Performance',
      'All-Day Battery Life',
      'Water Resistant Design',
      'Premium Build Quality'
    ]
  },
  {
    id: '8',
    name: 'Designer Handbag',
    price: 549.99,
    originalPrice: 699.99,
    description: 'Exquisite designer handbag crafted from the finest materials. Features elegant design with multiple compartments and adjustable strap. Perfect for both casual and formal occasions.',
    category: 'fashion',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    colors: ['Black', 'Brown', 'Red', 'Navy'],
    sizes: ['Small', 'Medium', 'Large'],
    features: [
      'Premium Genuine Leather',
      'Multiple Interior Compartments',
      'Adjustable Shoulder Strap',
      'Gold-Plated Hardware',
      'Magnetic Closure System',
      'Protective Dust Bag Included',
      'Designer Authentication Card',
      'Lifetime Repair Service'
    ]
  },
  {
    id: '9',
    name: 'Gaming Laptop Ultra',
    price: 2499.99,
    originalPrice: 2999.99,
    description: 'Ultimate gaming laptop designed for serious gamers and content creators. Features the latest RTX graphics, high-refresh display, and advanced cooling system for peak performance.',
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 1245,
    inStock: true,
    colors: ['Black', 'Silver'],
    sizes: ['15.6"', '17.3"'],
    features: [
      'NVIDIA RTX 4080 Graphics Card',
      '144Hz QHD Display',
      '32GB DDR5 RAM',
      'RGB Mechanical Keyboard',
      'Advanced Cooling System',
      '1TB NVMe SSD Storage',
      'Wi-Fi 6E Connectivity',
      '3-Year Gaming Warranty'
    ]
  },
  {
    id: '10',
    name: 'Luxury Watch Collection',
    price: 1899.99,
    originalPrice: 2299.99,
    description: 'Exquisite Swiss-made luxury timepiece featuring automatic movement and premium materials. A perfect blend of traditional craftsmanship and modern precision.',
    category: 'fashion',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['38mm', '42mm'],
    features: [
      'Swiss Automatic Movement',
      'Sapphire Crystal Glass',
      '100m Water Resistance',
      'Premium Leather Strap',
      'Luminous Hands and Markers',
      'Date Display Function',
      'Luxury Gift Box Included',
      'International Warranty'
    ]
  },
  {
    id: '11',
    name: 'Home Theater System',
    price: 899.99,
    originalPrice: 1199.99,
    description: 'Professional-grade 7.1 surround sound system that transforms your living room into a cinema. Features wireless subwoofer and multiple connectivity options.',
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 723,
    inStock: true,
    colors: ['Black', 'White'],
    sizes: ['Standard'],
    features: [
      '7.1 Surround Sound Technology',
      'Wireless Subwoofer System',
      'Bluetooth 5.0 Connectivity',
      'Universal Remote Control',
      'Multiple Input Options',
      'Wall-Mountable Speakers',
      'Cinema Sound Modes',
      'Easy Setup Guide'
    ]
  },
  {
    id: '12',
    name: 'Professional Chef Knife Set',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Professional chef knife set crafted from premium German steel. Features ergonomic handles and includes essential knives for all cooking needs. Perfect for home chefs and culinary professionals.',
    category: 'home-garden',
    images: [
      'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 1456,
    inStock: true,
    colors: ['Silver', 'Black Handle'],
    sizes: ['8-Piece', '12-Piece'],
    features: [
      'Premium German Steel Blades',
      'Ergonomic Non-Slip Handles',
      'Hardwood Knife Block Included',
      'Professional Sharpening Steel',
      'Dishwasher Safe Design',
      'Precision Forged Construction',
      'Balanced Weight Distribution',
      'Lifetime Sharpening Service'
    ]
  }
];