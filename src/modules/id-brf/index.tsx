
import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Axios from 'axios';
import { useTranslation } from "react-i18next";
import "../../locale/i18next";

import Notiflix from "notiflix";
import "../../utils/notiflixSchema";

import { getIDBRF, autoComplete } from '../../actions';
import { ROUTE_HOME, API_CAPTCHA } from "../../routes/";

import Heading from '../../components/heading';
import BaseInput from '../../components/input';
import Button from '../../components/button';

import ReCAPTCHA from "react-google-recaptcha";

const IdBRF = (props) => {
	const recaptchaRef = React.useRef();

	const { t } = useTranslation();

	const SignupSchema = yup.object().shape({
		idbrf: yup
			.string()
			.required(t('form.idBrf.idBrf.required'))

	});
	/* .max(6, t('form.idBrf.idBrf.maxDigits')) */
	const dispatch = useDispatch();
	const history = useHistory();
	const { handleSubmit, errors, register, setError } = useForm({

		resolver: yupResolver(SignupSchema)
	})

	function error(message) {
		setError('idbrf', {
			type: 'manual',
			message
		})
	}

	const captchaRef = useRef(null);
	const onSubmit = async (data) => {

		const responseCaptcha = await captchaRef.current.executeAsync();
		captchaRef.current.reset();
		if (responseCaptcha) {
			//const res = await Axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRETKEY}&response=${responseCaptcha}`);
			const res = await Axios.get(`${API_CAPTCHA}GetCaptcha?responseCaptcha=${responseCaptcha}`);
			const { success } = res.data;

			if (success) {
				Notiflix.Loading.Circle(t('loading.waiting'));
				const response = await getIDBRF(data.idbrf, dispatch, history);
				Notiflix.Loading.Remove();

				if (response && response.data.errorMessage) {
					error(t('form.idBrf.idBrf.userNotFound.title'));
				}
			}
			else {
				Notiflix.Report.Failure(
					t(`Captcha inválido`),
					"",
					t("form.close")
				);
			}
		}
	};



	const backToHome = () => history.push(ROUTE_HOME);

	return (
		<div className="container -full_height">
			<Heading title={t('form.idBrf.heading')} />

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				{/* <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
				{/* 6LceAL0ZAAAAANHNGErNZH09U8O8QSLPUv2JDyIz process.env.REACT_APP_SITEKEY*/}
				<ReCAPTCHA
					ref={captchaRef}
					size="invisible"
					sitekey={process.env.REACT_APP_SITEKEY}
				/>
				<BaseInput
					name="idbrf"
					ref={register()}
					placeholder={t('form.idBrf.idBrf.placeholder')}
					container="form_group -mb_103"
					autoComplete={autoComplete}
					appearance="input"
					error={errors.idbrf?.message}
				/>
				{/* maxLength={6} */}
				<Button
					type="button"
					appearance="button -cancel -margin15"
					container="form_group -grow0"
					label={t('form.cancel')}
					onClick={e => backToHome()}
				/>

				<Button
					type="submit"
					appearance="button -submit -margin15"
					container="form_group -grow0"
					label={t('form.submit')}
				/>
			</form>
		</div >
	);
}

export default IdBRF;
