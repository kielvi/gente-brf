import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../locale/i18next";
import axios from 'axios';

import {
	API_RITM_STATUS,
	ROUTE_HOME,
	ROUTE_WAITING,
	ROUTE_SUCCESS,
	ROUTE_ERROR
} from "../../routes/";

import Heading from '../../components/heading/';
import Loading from '../../components/loading/';
import Button from '../../components/button/';

interface RootState {
	ritmCode: string,
}

const selectState = (state: RootState) => state

export default function ServiceNow() {
	const { t } = useTranslation();
	const history = useHistory();
	const state = useSelector(selectState);

	const [url] = useState(`${API_RITM_STATUS}${state.ritmCode}`);

	const backToHome = () => history.push(ROUTE_HOME);

	useEffect(() => {
		const axiosData = async () => {
			const result = await axios(url);

			switch (result.data.status) {
				case 0:
				case 2:
					history.push(`${ROUTE_ERROR}`)
					break;
				case 1:
					history.push(`${ROUTE_SUCCESS}`)
					break;
				case 3:
				default:
					history.push(`${ROUTE_WAITING}`)
					break;
			}
		};

		axiosData();
	}, [url]);

	return (
		<div className="container -full_height -row">
			<Heading title={t('servicenow.heading')} />

			<Loading text={t('servicenow.loading')} modifiers="-mb132" />

			<Button
				type="button"
				appearance="button -cancel -red -margin15"
				container="form_group"
				label={t('form.cancel')}
				onClick={e => backToHome()}
			/>
		</div>
	);
}