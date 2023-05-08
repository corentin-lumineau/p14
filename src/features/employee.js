import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    employees: [
     
    ]
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        create: {
            prepare: (data) => (
                {
                    payload: data
                }
            ),
            reducer: (draft, action) => {
                action.payload.selectedDepartment  = action.payload.selectedDepartment.label
                action.payload.selectedState = action.payload.selectedState.label
                draft.employees = [...draft.employees, action.payload]
            }
        }
    }
})

export const { create } = employeeSlice.actions;
export default employeeSlice.reducer;