import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee';
import modaleReducer from '../features/modale'

export default configureStore({
    reducer: {
        employee: employeeReducer,
        modale: modaleReducer
    }
})