import React, { Component } from "react";

//Properties initializer (sin usar el BIND)
export class EventosES7 extends Component {
	state = {
		contador: 0,
	};

	//Arrow functions

	sumar = (e) => {
		console.log("Sumando");
		console.log(this);
		this.setState({
			contador: this.state.contador + 1,
		});
	};

	restar = (e) => {
		console.log("Restando");
		console.log(this);
		this.setState({
			contador: this.state.contador - 1,
		});
	};

	render() {
		return (
			<div>
				<h2>Eventos en componentes de clase ES7</h2>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}
