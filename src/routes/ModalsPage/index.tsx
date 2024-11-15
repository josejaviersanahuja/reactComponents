import { useState } from "react";
import "./ModalsPage.css"

const ModalsPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <section>
      <h1>Modales</h1>
      <button onClick={toggleModal}>Abrir Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Este es un modal informativo.</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default ModalsPage;