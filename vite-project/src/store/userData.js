import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:"",
    userId:"",
    email:"",
}
export const userSlice=createSlice({
    name:"user-data",
    initialState,
    reducers:{
        addDetails:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.userId=action.payload.userId;
        }
    }
})
export const {addDetails} =userSlice.actions
export default userSlice.reducer