import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Notiflix from "notiflix";
import "../../utils/notiflixSchema";
import { formatCpf, formatDate } from "../../utils/masks";

import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "../../locale/i18next";

import { ROUTE_HOME, ROUTE_PASSWORD } from "../../routes/";

import {
	getIDBRF,
	getUserInformation,
	autoComplete
} from "../../actions";

import Heading from "../../components/heading/";
import BaseInput from "../../components/input/";
import Button from "../../components/button/";

interface RootState {
	employeeId: string;
	name: string;
	docNumber: string;
	birthDate: Date;
	hireDate: Date;
	mothersName: string;
	country: string;
	ritmCode: string;
	newPassword: string;
}

const selectState = (state: RootState) => state;



export default function Profile() {
	const state = useSelector(selectState);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const history = useHistory();

	const shapeInit = {
		employeeId: yup
			.string()
			.required(
				t("form.idBrf.idBrf.required")
			) /* .max(6, t('form.idBrf.idBrf.maxDigits')), */,

		birthDate: yup
			.string()
			.required(t("form.profile.birthDate.required"))
			.matches(
				/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
				t("form.profile.birthDate.invalid")
			),

		hireDate: yup
			.string()
			.required(t("form.profile.hireDate.required"))
			.matches(
				/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
				t("form.profile.hireDate.invalid")
			),
	};

	const docNumber = {
		docNumber: yup
			.string()
			.required(t("form.profile.docNumber.required"))
			.matches(
				/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
				t("form.profile.docNumber.invalid")
			),
	};

	const SignupSchema = yup.object().shape(
		state.country === "Brazil"
			? {
				...shapeInit,
				...docNumber,
			}
			: shapeInit
	);

	function error(message) {
		setError("employeeId", {
			type: "manual",
			message,
		});
	}

	const {
		register,
		handleSubmit,
		errors,
		setError,
		unregister,
	} = useForm({
		defaultValues: {
			employeeId: state.employeeId,
			docNumber: "",
			name: state.name,
			birthDate: "",
			hireDate: "",
			mothersName: state.mothersName,
			country: state.country,
		},
		resolver: yupResolver(SignupSchema),
	});

	if (state.country !== "Brazil") unregister("docNumber");

	const onSubmit = async (data) => {
		Notiflix.Loading.Circle(t("loading.waiting"));
		const response = await getUserInformation(data, dispatch, history, state);
		Notiflix.Loading.Remove();

		if (response && response.data.errorMessage) {
			Notiflix.Report.Failure(
				t(`${response.data.errorMessage}`),
				"",
				t("form.close")
			);
		} else {
			history.push(ROUTE_PASSWORD);
		}
	};

	const backToHome = () => history.push(ROUTE_HOME);

	const changeID = async (e) => {
		if (!e) return false;

		Notiflix.Loading.Circle(t("loading.waiting"));
		const response = await getIDBRF(e, dispatch, history);

		if (response && response.data.errorMessage) {
			error(t('form.idBrf.idBrf.userNotFound.title'));
		}

		Notiflix.Loading.Remove();
	};

	const [valueCPF, setValueCPF] = useState("");
	const [valueBirth, setValueBirth] = useState("");
	const [valueAdm, setValueAdm] = useState("");

	return (
		<div className="container -full_height">
			<Heading title={t("form.profile.heading", { name: state.name })} />

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<BaseInput
					name="employeeId"
					ref={register()}
					placeholder={t("form.idBrf.idBrf.placeholder")}
					container="form_group"
					appearance="input"
					autoComplete={autoComplete}
					error={errors.employeeId?.message}
					onBlur={(e) => changeID(e.currentTarget.value)}
				/>

				{state.country === "Brazil" && (
					<BaseInput
						name="docNumber"
						maxLength={14}
						ref={register()}
						placeholder={t("form.profile.docNumber.placeholder")}
						container="form_group"
						appearance="input"
						autoComplete={autoComplete}
						error={errors.docNumber?.message}
						value={valueCPF}
						onChange={(e) => setValueCPF(formatCpf(e.currentTarget.value))}
					/>
				)}

				<BaseInput
					name="birthDate"
					ref={register()}
					placeholder={t("form.profile.birthDate.placeholder")}
					container="form_group"
					appearance="input"
					autoComplete={autoComplete}
					error={errors.birthDate?.message}
					value={valueBirth}
					onChange={(e) => setValueBirth(formatDate(e.currentTarget.value))}
				/>
				<BaseInput
					name="hireDate"
					ref={register({
						required: {
							value: true,
							message: t("form.profile.hireDate.required"),
						},
						pattern: {
							value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
							message: "Data em inválida",
						},
					})}
					placeholder={t("form.profile.hireDate.placeholder")}
					container="form_group -mb_103"
					appearance="input"
					autoComplete={autoComplete}
					error={errors.hireDate?.message}
					value={valueAdm}
					onChange={(e) => setValueAdm(formatDate(e.currentTarget.value))}
				/>

				<Button
					type="button"
					appearance="button -cancel -margin15"
					container="form_group -grow0"
					label={t("form.cancel")}
					onClick={(e) => backToHome()}
				/>
				<Button
					type="submit"
					appearance="button -submit -margin15"
					container="form_group -grow0"
					label={t("form.submit")}
				/>
			</form>
		</div>
	);
}
