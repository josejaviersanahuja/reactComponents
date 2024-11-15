import './Root.css'
import { Outlet, Link } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div>
      {/* Encabezado con navegación */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre este proyecto</Link></li>
            <li><Link to="/buttons">Botones</Link></li>
            <li><Link to="/carousel">Carrusel</Link></li>
            <li><Link to="/modals">Modales</Link></li>
            <li><Link to="/spinners">Spinners</Link></li>
          </ul>
        </nav>
      </header>

      {/* Espacio para el contenido dinámico */}
      <main>
        <Outlet />
      </main>

      {/* Pie de página */}
      <footer>
        <p>Creado por José Javier Sanahuja como parte de mi portafolio profesional.</p>
      </footer>
    </div>
  );
};

export default Root