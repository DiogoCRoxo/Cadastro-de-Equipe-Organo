import { useState } from "react";
import "./campoTexto.css";

const CampoTexto = (props) => {
	// let valor = "";

	const [valor, setValor] = useState('')

	const aoDigitado = (e) => {
		props.aoAlterado(e.target.value)
	};

	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			<input
			value={props.valor}
				onChange={aoDigitado}
				required={props.obrigatorio}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default CampoTexto;