import React, { useState } from "react";

// export default function Formularios() {
// 	const [nombre, setNombre] = useState("");
// 	const [sabor, setSabor] = useState("");
// 	const [lenguaje, setLenguaje] = useState("");
// 	const [terminos, setTerminos] = useState(false);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		alert("El formulario se ha enviado");
// 	};

// 	return (
// 		<>
// 			<h2>Formularios</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="nombre">Nombre</label>
// 				<input
// 					type="text"
// 					id="nombre"
// 					name="nombre"
// 					value={nombre}
// 					onChange={(e) => setNombre(e.target.value)}
// 				/>
// 				<p>Elige tu Sabor JS Favorito:</p>
// 				<input
// 					type="radio"
// 					id="vainilla"
// 					name="sabor"
// 					value="vainilla"
// 					onChange={(e) => setSabor(e.target.value)}
// 				/>
// 				<label htmlFor="Vainilla">Vainilla</label>
// 				<input
// 					type="radio"
// 					id="react"
// 					name="sabor"
// 					value="react"
// 					onChange={(e) => setSabor(e.target.value)}
// 				/>
// 				<label htmlFor="react">React</label>
// 				<input
// 					type="radio"
// 					id="angular"
// 					name="sabor"
// 					value="angular"
// 					onChange={(e) => setSabor(e.target.value)}
// 				/>
// 				<label htmlFor="angular">Angular</label>
// 				<input
// 					type="radio"
// 					id="vuejs"
// 					name="sabor"
// 					value="vuejs"
// 					onChange={(e) => setSabor(e.target.value)}
// 				/>
// 				<label htmlFor="vuejs">VueJs</label>
// 				<p>Elige tu lenguaje de programacion favorito:</p>
// 				<select
// 					name={lenguaje}
// 					onChange={(e) => setLenguaje(e.target.value)}
// 					defaultValue=""
// 				>
// 					<option value="">---</option>
// 					<option value="js">Javascript</option>
// 					<option value="php">PHP</option>
// 					<option value="py">Python</option>
// 					<option value="go">GO</option>
// 					<option value="rb">Ruby</option>
// 				</select>
// 				<br />
// 				<label htmlFor="terminos">Acepto terminos y condiciones</label>
// 				<input
// 					type="checkbox"
// 					id="terminos"
// 					name="terminos"
// 					onChange={(e) => setTerminos(e.target.checked)}
// 				/>
// 				<br />
// 				<input type="submit" />
// 			</form>
// 		</>
// 	);
// }

export default function Formularios() {
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChecked = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("El formulario se ha enviado");
	};

	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={form.nombre}
					onChange={handleChange}
				/>
				<p>Elige tu Sabor JS Favorito:</p>
				<input
					type="radio"
					id="vainilla"
					name="sabor"
					value="vainilla"
					onChange={handleChange}
				/>
				<label htmlFor="Vainilla">Vainilla</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={handleChange}
				/>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="angular"
					name="sabor"
					value="angular"
					onChange={handleChange}
				/>
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="vuejs"
					name="sabor"
					value="vuejs"
					onChange={handleChange}
				/>
				<label htmlFor="vuejs">VueJs</label>
				<p>Elige tu lenguaje de programacion favorito:</p>
				<select name="lenguaje" onChange={handleChange} defaultValue="">
					<option value="">---</option>
					<option value="js">Javascript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">GO</option>
					<option value="rb">Ruby</option>
				</select>
				<br />
				<label htmlFor="terminos">Acepto terminos y condiciones</label>
				<input
					type="checkbox"
					id="terminos"
					name="terminos"
					onChange={handleChecked}
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
}
