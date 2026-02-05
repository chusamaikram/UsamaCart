import React from 'react'
import { Link } from 'react-router-dom'
import { useFilter } from '../store/FilterContext'
import { useCart } from '../store/CartContext'

const Header = () => {
    const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useFilter()
    const { getCartItemsCount } = useCart()

    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'jewelery', label: 'Jewelry' },
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "women's clothing", label: "Women's Clothing" }
    ]

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 py-3 sm:px-6">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-blue-400 transition-colors duration-200">
                        <div className='flex items-center gap-1'>
                            <span> 🛒 </span>
                            <span>UsamaCart</span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Category - Always visible */}
                        <div className=" hidden sm:flex px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="text-slate-700 outline-none bg-transparent"
                            >
                                {categories.map(cat => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Search - Hidden on mobile */}
                        <div className='hidden md:flex items-center gap-3 px-4 py-2.5 border rounded-lg border-gray-200 bg-gray-50'>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                            />
                            <button className="px-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart - Always visible */}
                        
                            <Link to="/cart" className="px-3 py-2 rounded-md bg-gray-50 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-2">
                                <span className="text-lg">🛒</span>
                                <span className="hidden sm:inline">Cart</span>
                                <span className='text-red-400'>({getCartItemsCount()})</span>
                            </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
