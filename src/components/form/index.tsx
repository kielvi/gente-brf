
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import './form.scss';

type Inputs = {
  example: string,
  exampleRequired: string,
};
const SignupSchema = yup.object().shape({
	idbrf: yup
			.number()
			.required()
			.positive()
			.integer()
});
/* 
	const validationSchema = Yup.object().shape({
		//aqui validamos se o email está no formato correto nao está em branco
		email: Yup.string()
		  .email('E-mail is not valid!')
		  .required('E-mail is required!'),
		//verificando se o campo não está em branco
		phone: Yup.string()
		  .required('Please provide a phone'),
		
		  //como o name é um atributo aninhado, tenho que trata-lo como objeto com o Yup
		  name: Yup.object({
			//verificando se o campo não está em branco
			first: Yup.string()
			  .required('First name is required'),
		  }) */

export default function Form() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(SignupSchema)
	});
	const onSubmit = data => {
		alert(JSON.stringify(data));
	};

	return (

	<form className="form" onSubmit={handleSubmit(onSubmit)}>

		<div>
		<label>QUAL O SEU ID BRF?</label>
		<input type="text" name="idbrf" ref={register} />
		{errors.idbrf && <p>{errors.idbrf.message}</p>}
		</div>
		<input type="submit" />
	</form>

	);
}
