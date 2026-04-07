import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import CartPage from "./pages/CartPage"
import { FilterProvider } from "./context/FilterContext"
import { CartProvider } from "./context/CartContext"
import Footer from './components/Foooter'

function App() {
  return (
    <CartProvider>
      <FilterProvider>

        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </CartProvider>
  )
}

export default App
