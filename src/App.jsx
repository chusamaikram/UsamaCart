import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import CartPage from "./pages/CartPage"
import { FilterProvider } from "./store/FilterContext"
import { CartProvider } from "./store/CartContext"

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      </FilterProvider>
    </CartProvider>
  )
}

export default App
