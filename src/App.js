import React, {useState, useEffect} from 'react';
import Opcion from './Opcion';
import './App.css';
import Resultado from './Resultado';

function App(){
	
	const [eleccionJugador, setEleccionJugador] = useState({});
	const [eleccionMaquina, setEleccionMaquina] = useState({});
	//const [imagen, setImagen]= useState([]);
	const papel = require(`./Papel.png`);
	const piedra = require(`./Piedra.png`);
	const tijera = require(`./Tijera.png`);

	
	
	
	const opciones = [
	{
		eleccion: "piedra",
		derrota: "tijera",
		imagen:[(<img src={piedra} className="piedra" alt="piedra" />)]
	},
	{
		eleccion: "papel",
		derrota: "piedra",
		imagen:[(<img src={papel} className="papel" alt="papel" />)]

	},
	{
		eleccion: "tijera",
		derrota: "papel",
		imagen:[(<img src={tijera} className="tijera" alt="tijera" />)]
	}
	]
	
	const elegirOpcion=(event)=> {
		const jugador = opciones.find(e=>e.eleccion === event.target.textContent);
		setEleccionJugador(jugador);
		eleccionRival();
	}
	
	const eleccionRival=()=> {
		const eleccion=opciones[Math.floor(Math.random() * opciones.length)];
		
		setEleccionMaquina(eleccion);
	}
	
	
	return (
	<body className="body">
	<div className="App">
	<Resultado className="resultadoFinal" jugador={eleccionJugador} maquina={eleccionMaquina}/>
	<main>
	<section>
		<div className="Jugador"> Jugador </div>
		<div className="eleccion"> {eleccionJugador.eleccion} </div>
		<div className="eleccion"> {eleccionJugador.imagen} </div>
	</section>
	<section>
		<div className="maquina"> Maquina </div>
		<div className="eleccion"> {eleccionMaquina.eleccion}</div>
		<div className="eleccion"> {eleccionMaquina.imagen} </div>

	</section>
	</main>
	
	
		<div className="opciones">
		{
			opciones.map((e, index) => <Opcion elegir={elegirOpcion}valor={opciones[index]}/>)
		}
		
		</div>
		
	
	</div>
	<footer className="footer">
	<h3 > Integrantes</h3>
	<h4 className="integrantes"> Alfonso Ulises - Genaro Montiel - Lisandro Corredoyra - Jorgelin Chañi - Jose Castro - Emanuel Avila </h4>
	</footer>
	</body>
	
	
	
	);
}

export default App;
