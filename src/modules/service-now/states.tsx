import "./states.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../locale/i18next";

import { ROUTE_IDBRF, ROUTE_ACCESS, ROUTE_HOME } from "../../routes/";

import Heading from '../../components/heading/';
import Button from '../../components/button/';
import Paragraph from '../../components/paragraph/';

interface RootState {
	employeeId: string,
	name: string,
	ritmCode: string,
	status: number
}

const selectState = (state: RootState) => state

const StateCall = (props) => {
	const { t } = useTranslation();
	const history = useHistory();
	const state = useSelector(selectState);

	const status = (state.status === 1 ? "success" : "error");

	if (!state.employeeId && !state.ritmCode) {
		history.push(ROUTE_HOME)
	}

	const handleClick = (to) => history.push(to);

	return (
		<div className="container -row -full_height">

			<div className={`states -${status}`}>
				<Heading
					title={t(`servicenow.states.${status}.heading`, { name: state.name })}
					modifiers={`-${status}`}
				/>

				<Paragraph
					text={t(`servicenow.states.${status}.text`)}
					modifiers={`-${status}`}
				/>

				<Button
					type="button"
					appearance={`button -default -${status} -margin15`}
					container="form_group -grow0 -order0"
					label={t('form.register')}
					onClick={e => handleClick(ROUTE_IDBRF)}
				/>
				{status === `success` ?
					<div className="form_group -grow0 -order0">
						<Link
							to={{ pathname: ROUTE_ACCESS }}
							target="_parent"
							className="button -submit -margin15">
							{t('form.access')}
						</Link>
					</div>
					:
					<div></div>
				}


			</div>
		</div>
	);
}

export default StateCall;