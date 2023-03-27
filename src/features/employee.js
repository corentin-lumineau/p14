import { createSlice } from "@reduxjs/toolkit"

export const createUser = (birthDate, startedDate, selectedDepartment, selectedState, e) => {
    e.preventDefault();
    debugger;
}

const initialState = {
    employees: [

    ]
}

const { actions, reducer} = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        create: {
            prepare: (data) => ({
                payload: { data }
            }),
            reducer: (draft, action) => {
                draft.employees = [...draft.employees, action.payload]
            }
        }
    }
})

export default reducer;