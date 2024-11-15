import { useTheme } from "../../context/ThemContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        backgroundColor: theme.colors.footerBackground,
        color: theme.colors.text,
      }}
    >
      <p>Creado por José Javier Sanahuja como parte de mi portafolio profesional.</p>
    </footer>
  );
};

export default Footer