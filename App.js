import React from 'react';
import './App.css';
import Inicio from './components/Inicio.js';
import ZonaJuego from './components/ZonaJuego.js';


function App() {
  return (
    <div>
    <Inicio/>
    <ZonaJuego
    imgPiedra="..\img\Piedra.png"
    imgPapel="..\img\Papel.png"
    imgTijeras="..\img\Tijera.png"
    imgPiedraPC="..\img\PiedraPC.png"
    imgPapelPC="..\img\PapelPC.png"
    imgTijerasPC="..\img\TijeraPC.png"
    />
    </div>
  );
}

export default App;
