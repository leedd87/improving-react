import React from "react";

// function Boton(props) {
// 	return <button onClick={props.myOnClick}>Hecho con componente</button>;
// }

// const Boton = (props) => (
// 	<button onClick={props.myOnClick}>Mi Boton con Arrow Function</button>
// );

//arrow funcion es con ()
const Boton = ({ myOnClick }) => (
	<button onClick={myOnClick}>Mi Boton con Arrow Function</button>
);

export default Boton;
