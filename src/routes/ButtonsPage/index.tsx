const ButtonsPage: React.FC = () => {
  return (
    <section>
      <h1>Botones</h1>
      <p>Estos son botones estilizados para distintas acciones:</p>
      <div>
        <button className="btn btn-primary">Aceptar</button>
        <button className="btn btn-secondary">Cancelar</button>
        <button className="btn btn-neutral">Neutro</button>
      </div>
      {/* Estilos pueden definirse globalmente o aquí como un ejemplo */}
      <style>{`
        .btn {
          padding: 10px 20px;
          margin: 5px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn-primary {
          background-color: #4CAF50;
          color: white;
        }
        .btn-secondary {
          background-color: #f44336;
          color: white;
        }
        .btn-neutral {
          background-color: #e7e7e7;
          color: black;
        }
      `}</style>
    </section>
  );
};

export default ButtonsPage;