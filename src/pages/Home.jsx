import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bienvenido a <span className="text-indigo-600">La Tiendita</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Descubre productos únicos y disfruta de una experiencia de compra excepcional. 
          Calidad, estilo y los mejores precios te esperan.
        </p>
        <Link 
          to="/productos"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200"
        >
          Explorar Productos
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Envío Rápido</h3>
          <p className="text-gray-600">Recibe tus productos en tiempo récord</p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Calidad Garantizada</h3>
          <p className="text-gray-600">Productos seleccionados y verificados</p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Soporte 24/7</h3>
          <p className="text-gray-600">Estamos aquí para ayudarte</p>
        </div>
      </div>
    </div>
  );
};

export default Home;