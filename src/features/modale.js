import { createSlice } from "@reduxjs/toolkit"



const initialState = {
   open: false
}

const modaleSlice = createSlice({
    name: 'modale',
    initialState,
    reducers: {
        toggle: {
            reducer: (draft) => {
                draft.open = !draft.open
            }
        }
    }
})

export const { toggle } = modaleSlice.actions
export default modaleSlice.reducer;