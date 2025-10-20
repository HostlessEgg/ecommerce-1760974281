import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // CAMBIAR ESTA LÍNEA
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { addToCart } = useCart(); // Y usar useCart aquí
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... el resto del código permanece igual
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Explora Nuestros Productos</h1>
      <p className="text-gray-600 mb-8">Descubre nuestra selección exclusiva</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {/* Product Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.title}
                className="h-40 w-40 object-contain mix-blend-multiply"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 h-12">
                {product.title}
              </h3>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  ★ {product.rating?.rate || 4.5}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Link 
                  to={`/producto/${product.id}`}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition duration-300"
                >
                  Ver detalle
                </Link>
                <button 
                  onClick={() => addToCart(product)}
                  className="flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-300 shadow-md shadow-indigo-200"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;