import React from 'react';
import './Navbar.css';  // Importando o CSS para aplicar os estilos

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
