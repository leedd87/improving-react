import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		console.log("Moviendo el Scroll");

		const detectarScroll = () => {
			setScrollY(window.pageYOffset);
		};

		window.addEventListener("scroll", detectarScroll);

		return () => {
			window.removeEventListener("scroll", detectarScroll);
			console.log("Fase de Desmontaje");
		};
	}, [scrollY]); //este valor es el que se agrega cuando quiero que
	//el useEffect solo se aplique cuando haya cambios en el valor

	useEffect(() => {
		console.log("Fase de Montaje");
	}, []);

	useEffect(() => {
		console.log("Fase de Actualizacion");
	});

	useEffect(() => {
		return () => {
			console.log("Fase de Desmontaje");
		};
	});

	return (
		<>
			<h2>Hooks - useEffect y ciclo de vida</h2>
			<p>Scroll Y del navegador {scrollY}px</p>
		</>
	);
}
