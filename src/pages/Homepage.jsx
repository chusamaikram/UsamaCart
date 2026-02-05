import { useEffect, useState } from 'react'
import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useFilter } from '../store/FilterContext'

const Homepage = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { selectedCategory, searchTerm } = useFilter()

    const fetchProducts = async (retries = 3) => {
        try {
            setLoading(true)
            setError(null)
            
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
            
            const response = await fetch('https://fakestoreapi.com/products', {
                signal: controller.signal,
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            
            clearTimeout(timeoutId)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const data = await response.json()
            setProducts(data)
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Request timed out')
            }
            
            if (retries > 0) {
                console.log(`Retrying... ${retries} attempts left`)
                setTimeout(() => fetchProducts(retries - 1), 2000)
                return
            }
            
            setError('Failed to load products. Please try again.')
            console.error('Fetch error:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        let filtered = products

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory)
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        setFilteredProducts(filtered)
    }, [products, selectedCategory, searchTerm])

    return (
        <section className='py-5 sm:py-10'>
            <div className="container">
                {/* Error State */}
                {error && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Oops! Something went wrong</h2>
                        <p className="text-slate-600 mb-8">{error}</p>
                        <button 
                            onClick={() => fetchProducts()}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Results Info */}
                {!loading && !error && (
                    <div className="mb-6">
                        <p className="text-slate-600">
                            Showing {filteredProducts.length} products
                            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                            {searchTerm && ` for "${searchTerm}"`}
                        </p>
                    </div>
                )}

                {/* Products Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {loading ? (
                        // Show skeleton loading
                        [...Array(8)].map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))
                    ) : !error ? (
                        // Show actual products
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : null}
                </div>

                {/* No Results */}
                {!loading && !error && filteredProducts.length === 0 && products.length > 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500 text-lg">No products found</p>
                        <p className="text-slate-400">Try adjusting your search or category filter</p>
                    </div>
                )}

                <p className='text-center text-slate-500 text-lg font-medium mt-10'>No more results </p>
            </div>
        </section>
    )
}

export default Homepage
