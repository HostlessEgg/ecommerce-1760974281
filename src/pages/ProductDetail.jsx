import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );
  
  if (!product) return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
      <Link to="/productos" className="text-indigo-600 hover:text-indigo-700">
        Volver a productos
      </Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        to="/productos" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        ← Volver a productos
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title}
              className="h-80 w-80 object-contain mix-blend-multiply"
            />
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                ★ {product.rating?.rate} ({product.rating?.count} reviews)
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-sm text-gray-500">Categoría:</span>
              <span className="ml-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar al Changuito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;