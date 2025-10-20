import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './pages/ProtectedRoute';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;