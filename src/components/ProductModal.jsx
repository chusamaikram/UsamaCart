import React, { useState } from 'react'
import { useCart } from '../store/CartContext'

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!isOpen || !product) return null

  const { title, price, image, rating, category, description } = product

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 bg-opacity-50 backdrop-blur-sm "
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label='close-btn'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
            <img 
              src={image} 
              alt={title}
              className="w-full h-96 object-contain"
              width={384}
              height={384}
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-8">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4 capitalize">
              {category}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-200'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-slate-500">({rating?.count || 0} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-slate-900 mb-6">
              ${price}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal