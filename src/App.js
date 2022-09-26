import React, {useState} from 'react';
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
		imagen:[(<img src={piedra} className="piedra" alt="piedra" width="100" height="auto" />)]
	},
	{
		eleccion: "papel",
		derrota: "piedra",
		imagen:[(<img src={papel} className="papel" alt="papel" width="100" height="auto"/>)]

	},
	{
		eleccion: "tijera",
		derrota: "papel",
		imagen:[(<img src={tijera} className="tijera" alt="tijera" width="100" height="auto"/>)]
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
	   	
	<div className="participantes">
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
	</div>
	</main>
	
	
		<div className="opciones">
		{
			opciones.map((e, index) => <Opcion elegir={elegirOpcion}valor={opciones[index]}/>)
		}
		
		</div>
		
	
	</div>
	<footer className="footer">
	<h3 className= "titulo-integrantes"> Integrantes</h3>
	<div className="integrantes">
	<h4 className="Alfonso"> Alfonso Ulises </h4>
	<h4 className="Montiel"> Genaro Montiel </h4>
	<h4 className="Corredoyra"> Lisandro Corredoyra </h4>
	<h4 className="Chañi"> Jorgelin Chañi </h4>
	<h4 className="Castro"> Jose Castro </h4>
	<h4 className="Avila"> Emanuel Avila </h4>
	 
	</div>
	</footer>
	</body>
	
	
	
	);
}

export default App;
