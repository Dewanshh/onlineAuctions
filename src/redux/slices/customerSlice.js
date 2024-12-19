import { createSlice } from "@reduxjs/toolkit";

const initialState={
    customers:null
}

const customerSlice=createSlice({
    name:'customers',
    initialState,
    reducers:{
        setCustomers:(state,action)=>{
            state.customers=action.payload;
        },
        clearCustomers:(state,action)=>{
            state.customers=null;
        }
    }
})

export const { setCustomers, clearCustomers } = customerSlice.actions;

export default customerSlice.reducer;