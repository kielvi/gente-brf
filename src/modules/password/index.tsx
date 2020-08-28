import "./password.scss";
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { getPassword, autoComplete } from '../../actions';
import { yupResolver } from "@hookform/resolvers";

import { ROUTE_HOME } from "../../routes/";

import Notiflix from "notiflix";
import "../../utils/notiflixSchema";

import { useTranslation } from "react-i18next";
import "../../locale/i18next";

import Heading from '../../components/heading/';
import BaseInput from '../../components/input/';
import Button from '../../components/button/';

interface RootState {
	employeeId: string,
	name: string,
	docNumber: string,
	birthDate: Date,
	hireDate: Date,
	mothersName: string,
	country: string,
	ritmCode: string,
	newPassword: string,
}


const selectState = (state: RootState) => state

export default function Password() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const history = useHistory();
	const state = useSelector(selectState);

	if (!state.employeeId && !state.ritmCode) history.push(ROUTE_HOME)

	const SignupSchema = yup.object().shape({
		password: yup.string().min(10, t('form.password.rules.minLen'))
			.matches(/^(?=.*[A-Z])/, t('form.password.rules.uppercase'))
			.matches(/^(?=.*[a-z])/, t('form.password.rules.lowercase'))
			.matches(/^[0-9]*$/, t('form.password.rules.number'))
			.matches(/^(?=.*[!$%&'()*+,-./:;<=>?@[\]\\^_`{|}~])/, t('form.password.rules.special'))
	});

	const { register, handleSubmit, errors, setError } = useForm({
		defaultValues: {
			employeeId: state.employeeId,
			name: state.name,
			ritmCode: state.ritmCode,
			mothersName: state.mothersName,
			hireDate: state.hireDate,
			birthDate: state.birthDate,
			docNumber: state.docNumber,
			country: state.country,
			newPassword: state.newPassword,
		},
		resolver: yupResolver(SignupSchema)
	})

	function error(message) {
		setError('newPassword', {
			type: 'manual',
			message
		})
	}

	const label_min = useRef<HTMLLIElement>(null);
	const label_uppercase = useRef<HTMLLIElement>(null);
	const label_lowercase = useRef<HTMLLIElement>(null);
	const label_number = useRef<HTMLLIElement>(null);
	const label_special = useRef<HTMLLIElement>(null);
	const label_mother = useRef<HTMLLIElement>(null);
	const label_name = useRef<HTMLLIElement>(null);
	const label_id = useRef<HTMLLIElement>(null);

	const handleInputChange = (e: string) => {
		const valid = '-is_valid';

		e.length >= 10 ?
			label_min.current.classList.add(valid)
			:
			label_min.current.classList.remove(valid);

		e.match(/^(?=.*[A-Z])/) ?
			label_uppercase.current.classList.add(valid)
			:
			label_uppercase.current.classList.remove(valid);

		e.match(/^(?=.*[a-z])/) ?
			label_lowercase.current.classList.add(valid)
			:
			label_lowercase.current.classList.remove(valid);

		e.match(/^(?=.*[0-9])/) ?
			label_number.current.classList.add(valid)
			:
			label_number.current.classList.remove(valid);

		e.match(/^(?=.*[!@#$%^&*])/) ?
			label_special.current.classList.add(valid)
			:
			label_special.current.classList.remove(valid);

		if (state?.mothersName) {
			let mothersName = state?.mothersName.split(' ');;
			let is_mothersValid = true;
			mothersName.forEach(a => {
				if (e.toLocaleLowerCase().includes(a.toLocaleLowerCase())) {
					is_mothersValid = false;
					error(t('form.password.rules.mother'));
				}
			})
			if (is_mothersValid) {
				label_mother.current.classList.add(valid)
				error(false);
			} else {
				label_mother.current.classList.remove(valid);
			}
		}
		let nameCheck = false;
		if(state?.name){
			state.name.split(' ').forEach((element:string) => {
				if(e.toLowerCase().includes(element.toLowerCase())){
					nameCheck=true;
				}
			});
			nameCheck ? label_name.current.classList.remove(valid): label_name.current.classList.add(valid);
		}
		label_id.current.classList.remove(valid);
		if(!e.includes(state?.employeeId)){
			label_id.current.classList.add(valid);
		}
		if (e.length === 0) {
			label_id.current.classList.remove(valid);
			label_mother.current.classList.remove(valid)
			label_name.current.classList.remove(valid)
		};
		
	}

	const onSubmit = async data => {
		Notiflix.Loading.Circle(t('loading.waiting'));
		const response = await getPassword(data, dispatch, history);
		Notiflix.Loading.Remove();

		if (response && response.data.errorMessage) {
			Notiflix.Report.Failure(t(`${response.data.errorMessage}`), '', t('form.close'));
		}
	};

	return (
		<div className="container -full_height">
			<Heading title={t('form.password.heading')} />

			<form className="form -noflex" onSubmit={handleSubmit(onSubmit)}>

				<BaseInput
					name="newPassword"
					type="password"
					eye={true}
					ref={register()}
					placeholder={t('form.password.password.placeholder')}
					container="form_group"
					appearance="input"
					autoComplete={autoComplete}
					error={errors.newPassword?.message}
					onKeyUp={e => handleInputChange(e.currentTarget.value)}
				/>

				<div className="password_rules">
					<div className="password_rules-title">{t('form.password.rules.heading')}</div>
					<ul className="password_rules-content">
						<li className="password_rules-item" ref={label_min}>{t('form.password.rules.minLen')}</li>
						<li className="password_rules-item" ref={label_uppercase}>{t('form.password.rules.uppercase')}</li>
						<li className="password_rules-item" ref={label_lowercase}>{t('form.password.rules.lowercase')}</li>
						<li className="password_rules-item" ref={label_number}>{t('form.password.rules.number')}</li>
						<li className="password_rules-item" ref={label_special}>{t('form.password.rules.special')}</li>
						{state?.mothersName &&
							<li className="password_rules-item" ref={label_mother}>{t('form.password.rules.mother')}</li>
						}
						<li className="password_rules-item" ref={label_name}>{t('form.password.rules.name')}</li>
						<li className="password_rules-item" ref={label_id}>{t('form.password.rules.idbrf')}</li>
						<li className="password_rules-item -observation" >{t('form.password.rules.older')}</li>
					</ul>
				</div>


				<Button
					type="submit"
					appearance="button -send -margin15"
					container="form_group -grow0"
					label={t('form.send')}
				/>
			</form>
		</div>
	);
}
