const Debug = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">DEBUG MODE</h1>
        <p className="mt-2">Si ves esto con estilos rojos, Tailwind funciona</p>
        <p className="mt-1">Si no ves estilos, hay problema con Tailwind</p>
      </div>
    </div>
  );
};

export default Debug;