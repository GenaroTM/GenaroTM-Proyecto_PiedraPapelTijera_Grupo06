import React from 'react';
class ZonaJuego extends React.Component {

    render() {
        return (
        <div id="zonaJuego" className="zonaJuego">

            <div id="img-ataque-jugador" className="box" />
            <img id="btn-piedra" className="btn-ataques" src={this.props.imgPiedra}/>
            <img id="btn-papel" className="btn-ataques" src={this.props.imgPapel}/>
            <img id="btn-tijeras" className="btn-ataques" src={this.props.imgTijeras}/>



            <div className="box"><p className="text-mensajes">VS</p></div>


            <div id="img-ataque-pc" className="box">
                <img id="piedraPc" className="btn-ataquesPc" src={this.props.imgPiedraPC}/>
                <img id="papelPc" className="btn-ataquesPc" src={this.props.imgPapelPC}/>
                <img id="tijerasPc" className="btn-ataquesPc" src={this.props.imgTijerasPC}/>
            </div>


        </div>

        );
    }

}
export default ZonaJuego;