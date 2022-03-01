import React, { useState, useEffect } from "react";

function Reloj({ hour }) {
	return <h3>{hour}</h3>;
}

export default function RelojHooks() {
	const [hour, setHour] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let temporizador;

		visible
			? (temporizador = setInterval(() => {
					setHour(new Date().toLocaleTimeString());
			  }, 1000))
			: clearInterval(temporizador);

		return () => {
			console.log("Fase de desmontaje");
			clearInterval(temporizador);
		};
	}, [visible]);

	return (
		<>
			<h2>Reloj con Hooks</h2>

			{visible && <Reloj hour={hour} />}
			<button onClick={() => setVisible(true)}>Iniciar</button>
			<button onClick={() => setVisible(false)}>Detener</button>
		</>
	);
}

// const RelojHooks = () => {
// 	return (
// 		<>
// 			<h2>Reloj Hooks con arrow function</h2>
// 		</>
// 	);
// };

// export default RelojHooks;
