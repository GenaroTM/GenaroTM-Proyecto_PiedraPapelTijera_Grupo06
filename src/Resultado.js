import React from 'react';
import './App.css';

const Resultado=(props)=> {
	let resultadoFinal;
	
	if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
		resultadoFinal=<h1>Ganador: Jugador</h1>
	} else if (props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
		resultadoFinal=<h1>Ganador: la Máquina </h1>
	} else if(props.jugador.eleccion===props.maquina.eleccion && props.jugador.eleccion){
		resultadoFinal=<h1>Empate</h1>
		}
	
	return (
	<h1 className="resultadoFinal">{resultadoFinal}</h1>
	)
}

export default Resultado;
