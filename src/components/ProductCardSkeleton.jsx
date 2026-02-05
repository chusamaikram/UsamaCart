import React from 'react'

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200 p-4">
        <div className="w-full h-full bg-gray-300 rounded"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-4">
        {/* Category Badge Skeleton */}
        <div className="w-20 h-5 bg-gray-200 rounded-full mb-2"></div>
        
        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="w-8 h-3 bg-gray-200 rounded ml-1"></div>
        </div>
        
        {/* Price & Button Skeleton */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
          <div className="w-20 h-8 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton