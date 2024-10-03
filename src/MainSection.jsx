import React, { useState } from 'react';  // Importando useState
import './MainSection.css';

function MainSection({ title, description }) {
  const [message, setMessage] = useState("Clique no botão para ver uma mensagem!");

  const handleClick = () => {
    setMessage("Você clicou no botão! Bem-vindo ao futuro dos bancos digitais!");
  };

  return (
    <section className="main-section">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{message}</p>
      <button onClick={handleClick}>Clique Aqui</button>  {/* Evento onClick */}
    </section>
  );
}

export default MainSection;

