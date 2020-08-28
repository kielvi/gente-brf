import { 
	SET_IDBRF, 
	SET_INFORMATIONS, 
	SET_RITMCODE,
	SET_STATUS
} from '../actions';

const initialState = { 
/*  	employeeId: "598761",
	name: "Luccas Fonseca",
	mothersName: "Fernanda Cristina",
	hireDate: "2017-09-18T00:00:00Z",
	birthDate: "1993-09-12T00:00:00Z",
	docNumber: "088.985.269-38",
	country: "Brazil",
	ritmCode: "PRQ0457032",
	newPassword: "1Kielvisantoro@", */

	employeeId: "",
	name: "",
	ritmCode: "",
	mothersName: "",
	hireDate: "",
	birthDate: "",
	docNumber: "",
	country: "",
	newPassword: ""
};


export const userReducer = (state=initialState, action) => {
	switch(action.type) {

        case SET_IDBRF: return {
			...state, 
			employeeId: action.payload.employeeId, 
			name: action.payload.name,
			mothersName: action.payload.mothersName,
			country: action.payload.country
			//, serviceNow: action.payload
        };
        case SET_INFORMATIONS: return {
			...state,
			...action.payload
		};
		case SET_RITMCODE: return {
			...state,
			employeeId: action.payload.employeeId,
			ritmCode: action.payload.ritmCode
		};
		case SET_STATUS: return {
			...state,
			employeeId: action.payload.employeeId,
			ritmCode: action.payload.ritmCode,
			status: action.payload.status
		};
		default: return state;
	}
}
    