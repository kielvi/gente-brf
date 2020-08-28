import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        idbrf: "635544",
        informations: {
            name: "Marcio Henrique Sartor",
            cpf: "034.630.491-12",
            birthday: "23/02/1989",
            admission: "29/02/2016"
        },
        password: ""

    },
    reducers: {
        chooseIdbrf: (state, action) => { state.idbrf = action.payload },
        chooseInformations: (state, action) => { 
            console.log(state.idbrf)
            //action.payload.map(item => console.log(item))
            //state.informations = action.payload 
        },
        choosePassword: (state, action) => { state.password = action.payload }
    }
})

export const reducer = rootSlice.reducer;

export const { chooseIdbrf, chooseInformations, choosePassword } = rootSlice.actions