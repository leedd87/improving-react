import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Component";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";

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
				</section>
			</header>
		</div>
	);
}

export default App;
