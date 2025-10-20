const ProtectedRoute = () => {
  const isAuthenticated = false; // Cambia a true para probar acceso

  return isAuthenticated ? (
    <div>
      <h2>Panel de administración</h2>
      <p>Bienvenido, tienes acceso a esta sección privada.</p>
    </div>
  ) : (
    <div>
      <h2>Acceso denegado</h2>
      <p>No tienes permisos para ver esta página.</p>
    </div>
  );
};

export default ProtectedRoute;
