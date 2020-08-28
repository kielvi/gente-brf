import axios from "axios";
import { convertDate } from "../utils/masks";

import {
	API_CACHE,
	API_USERS,
	API_UNLOCK,
	API_PASSWORD
} from "../routes/";

import {
	apiKey,
	ROUTE_WAITING,
	ROUTE_PROFILE,
	ROUTE_SUCCESS,
	ROUTE_ERROR,
} from "../routes/";

export const SET_IDBRF = "SET_IDBRF";
export const SET_INFORMATIONS = "SET_INFORMATIONS";
export const SET_RITMCODE = "SET_RITMCODE";
export const GET_SERVICENOW = "GET_SERVICENOW";
export const SET_STATUS = "SET_STATUS";

export const autoComplete = 'off';

export const getIDBRF = async (data, dispatch, history) => {
	try {
		const [verifyCache, verifyID] = await Promise.all([
			axios.get(`${API_CACHE}${data}`),
			axios.get(`${API_USERS}${data}`),
		]);

		if (verifyCache && verifyCache.data !== "") {
			dispatch({
				type: SET_RITMCODE,
				payload: {
					employeeId: data,
					ritmCode: verifyCache.data,
				},
			});
			history.push(ROUTE_WAITING);
			return verifyCache;
		} else {
			if (verifyID.data.errorMessage) return verifyID;

			dispatch({
				type: SET_IDBRF,
				payload: {
					employeeId: verifyID.data.id,
					name: verifyID.data.name,
					mothersName: verifyID.data.mothersName,
					country: verifyID.data.country,
				},
			});

			history.push(ROUTE_PROFILE);
			return verifyID;
		}
	} catch (error) {
		console.error(`error fetching data from api. error;`, error);
	}
};

export const getUserInformation = async (data, dispatch, history, state) => {
	try {
		const userInformation = {
			employeeId: data.employeeId,
			docNumber: data.docNumber,
			hireDate: convertDate(data.hireDate),
			birthDate: convertDate(data.birthDate),
			country: state.country,
			mothersName: state.mothersName,
		};
		console.log(state);
		const [verifyUserInformation] = await Promise.all([
			axios.post(`${API_UNLOCK}`, userInformation, {
				headers: {
					/* apiKey: { apiKey }, */
					"Content-Type": "application/json",
				},
			}),
		]);

		dispatch({
			type: SET_INFORMATIONS,
			payload: userInformation,
		});
		dispatch({
			type: SET_RITMCODE,
			payload: {
				employeeId: userInformation.employeeId,
				ritmCode: verifyUserInformation.data.ritmCode,
			},
		});

		return verifyUserInformation;
	} catch (error) {
		console.error(`error fetching data from api. error;`, error);
	}
};

export const getPassword = async (data, dispatch, history) => {
	try {
		//JSON.stringify(`${user}`)

		const verifyPassword = await axios
			.post(`${API_PASSWORD}`, data, {
				headers: {
					/* apiKey: { apiKey }, */
					"Content-Type": "application/json",
				},
			})
			.then(function (response) {
				if (response.data.errorMessage) return response;

				dispatch({
					type: SET_STATUS,
					payload: {
						employeeId: data.employeeId,
						name: data.name,
						ritmCode: response.data.ritmCode,
						country: data.country,
						status: response.data.status,
					},
				});

				switch (response.data.status) {
					case 0:
					case 2:
						history.push(`${ROUTE_ERROR}`);
						break;
					case 1:
						history.push(`${ROUTE_SUCCESS}`);
						break;
					default:
						history.push(`${ROUTE_WAITING}`);
						break;
				}
			});

		return verifyPassword;
	} catch (error) {
		console.error(`error fetching data from api. error;`, error);
	}
};
