import React from 'react';
//import './PTT.css';
import './App.css';

const Opcion = (props)=> {
	
	
	return (
	
	<div className="opcion" onClick={props.elegir}>
	{props.valor.eleccion}
	</div>

	)
}

export default Opcion;
