import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
	return (
		<li>
			<a href={props.framework.web} target="_blank" rel="noreferrer">
				{props.framework.name}
			</a>
		</li>
	);
}

export default class RenderizadoElementos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seasons: ["Primavera", "Verano", "Otanio", "Invierno"],
		};
	}

	render() {
		console.log(data);
		return (
			<div>
				<h2>Renderizado de Elementos</h2>
				<h3>Estaciones del Anio</h3>
				<ol>
					{this.state.seasons.map((season) => (
						<li key={season}>{season}</li>
					))}
				</ol>
				<h3>Frameworks FrontEnd Javascript</h3>
				<ul>
					{data.frameworks.map((framework) => (
						<ElementoLista key={framework.id} framework={framework} />
					))}
				</ul>
			</div>
		);
	}
}
