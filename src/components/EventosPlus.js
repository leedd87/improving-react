import React, { Component } from "react";
import Boton from "./Boton";

export class MasSobreEventos extends Component {
	handleClick = (e, mensaje) => {
		console.log(e);
		console.log(e.nativeEvent);
		console.log(e.target);
		console.log(e.nativeTarget);
		console.log(mensaje);
	};

	render() {
		return (
			<div>
				<h2>Mas sobre Eventos</h2>
				<button onClick={(e) => this.handleClick(e, "Hola!")}>
					Saludar
				</button>
				{/*Evento personalizado*/}
				<Boton
					myOnClick={(e) =>
						this.handleClick(e, "Hola este es un evento personalizado")
					}
				/>
			</div>
		);
	}
}
