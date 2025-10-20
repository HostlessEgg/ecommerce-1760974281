import React from "react";
import { useCart } from "../context/CartContext"; // CAMBIAR ESTA LÍNEA
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addToCart, cartTotal } = useCart(); // Y usar useCart aquí

  // ... el resto del código permanece igual
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tu Changuito</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-600 text-lg mb-4">Tu changuito está vacío</p>
          <Link 
            to="/productos" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Explorar Productos
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            {cart.map((product, index) => (
              <div key={index} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-16 h-16 object-contain bg-gray-100 rounded-lg mr-4"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-indigo-600 font-bold">${product.price}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => removeFromCart(product.id)}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition duration-300"
                  >
                    −
                  </button>
                  <span className="font-medium w-8 text-center">
                    {product.quantity || 1}
                  </span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-indigo-600">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg shadow-green-200">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;