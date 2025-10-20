import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-bold tracking-wider">
            La Tiendita
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Inicio
            </Link>
            <Link 
              to="/productos" 
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Productos
            </Link>
            <Link 
              to="/carrito" 
              className="relative text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
            >
              Changuito
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/admin" 
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;