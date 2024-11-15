import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemContext";

const Header = () => {
  const { isDarkMode, setRound, theme, toggleTheme } = useTheme();
  console.log(isDarkMode);

  return (
    <header style={{ background: theme.colors.headerBackground, color: theme.colors.text }}>
      <h1 style={{ fontFamily: theme.typography.fontFamilies.heading }}>Mi Titulo </h1>

      <nav aria-label="Barra de navegación principal">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre este proyecto</Link></li>
          <li><Link to="/buttons">Botones</Link></li>
          <li><Link to="/carousel">Carrusel</Link></li>
          <li><Link to="/modals">Modales</Link></li>
          <li><Link to="/spinners">Spinners</Link></li>
        </ul>
      </nav>
      <aside>
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <button onClick={() => setRound(8)}>Aumentar Redondez</button>
      </aside>
    </header>
  );
};

export default Header