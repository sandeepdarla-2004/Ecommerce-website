import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Category } from '../../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
      </div>
      
      <div className="space-y-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange('')}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === '' 
              ? 'bg-blue-100 text-blue-700 font-medium' 
              : 'hover:bg-gray-50'
          }`}
        >
          All Products
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category.slug)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
              selectedCategory === category.slug 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'hover:bg-gray-50'
            }`}
          >
            <span>{category.name}</span>
            <span className="text-sm text-gray-500">({category.productCount})</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;