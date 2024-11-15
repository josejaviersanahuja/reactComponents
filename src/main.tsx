import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Root from './routes/Root/index.tsx'
import Home from './routes/Home/index.tsx'
import About from './routes/About/index.tsx'
import ErrorPage from './ErrorPage.tsx';
import ButtonsPage from './routes/ButtonsPage/index.tsx';
import Carousel from './routes/Carrusel/index.tsx';
import ModalsPage from './routes/ModalsPage/index.tsx';
import Spinners from './routes/Spinners/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Es el componente principal que actúa como el "layout" de la aplicación. Puede incluir un header, footer, y espacio para renderizar las rutas hijas usando outlet.
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Ruta predeterminada ("/")
        element: <Home />, // Página principal del portafolio
      },
      {
        path: "about", // Ruta "/about"
        element: <About />, // Página "Sobre nosotros"
      },
      {
        path: "buttons",
        element: <ButtonsPage />,
      },
      {
        path: "carousel",
        element: <Carousel />,
      },
      {
        path: "modals",
        element: <ModalsPage />,
      },
      {
        path: "spinners",
        element: <Spinners />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
