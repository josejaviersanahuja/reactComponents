import Footer from './Footer';
import Header from './Header';
import './Root.css'
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div>
      {/* Encabezado con navegación */}
      <Header />

      {/* Espacio para el contenido dinámico */}
      <main>
        <Outlet />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Root