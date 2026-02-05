import React, { useState } from 'react'
import ProductModal from './ProductModal'
import { useCart } from '../store/CartContext'

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()
  const { id, title, price, image, rating, category } = product

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000) // Reset after 2 seconds
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
        {/* Product Image */}
        <div className="aspect-square bg-gray-50 p-4 relative">
          <img 
            src={image} 
            alt={title}
            width={298}
            height={298}

            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
          />
          {/* Quick View Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 bg-black/40 bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <span className="px-4 py-2 bg-white text-slate-900 font-medium rounded-lg shadow-lg">
              View More
            </span>
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          {/* Category Badge */}
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2 capitalize">
            {category}
          </span>
          
          {/* Title */}
          <h3 className="text-sm font-medium text-slate-900 mb-2 line-clamp-2 leading-5">
            {title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-200'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-500 ml-1">({rating?.count || 0})</span>
          </div>
          
          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900">${price}</span>
            <button 
              onClick={handleAddToCart}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                isAdded 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isAdded ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default ProductCard
