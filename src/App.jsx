import React from './assets';
import Navbar from './navbar';
import Footer from './footer';
import MainSection from './MainSection';

function App() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Footer />
      {/* Adicione um texto para testar HMR */}
      <h2>Este é um teste de HMR! Faça uma alteração para ver a mágica acontecer!</h2>
    </div>
  );
}

export default App;

