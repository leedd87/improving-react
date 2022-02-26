import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Component";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
// import Eventos from "./components/Eventos";
import { EventosES6 } from "./components/EventosES6";
import { EventosES7 } from "./components/EventosES7";
import { MasSobreEventos } from "./components/EventosPlus";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<section>
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Universo</p>
				</section>
				<section>
					<Componente msg="Hi Im a component from a prop expresado" />
					<hr />
					<Propiedades
						cadena="esto es una cadenad de texto"
						numero={19}
						booleano={true}
						arreglo={[1, 2, 3, 4, 5]}
						objeto={{ nombre: "David", correo: "micorreo@correo.com" }}
						elementoReact={<i>Esto es un elemento React</i>}
						funcion={(num) => num * num}
						componenteReact={
							<Componente msg="soy un componente pasado como Prop" />
						}
					/>
					<hr />
					<Estado />
					<hr />
					<RenderizadoCondicional />
					<hr />
					<RenderizadoElementos />
					{/* <hr />
					<Eventos /> */}
					<hr />
					<EventosES6 />
					<hr />
					<EventosES7 />
					<hr />
					<MasSobreEventos />
				</section>
			</header>
		</div>
	);
}

export default App;
