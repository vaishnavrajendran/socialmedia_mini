import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:'0', name:'Ayyappan'},
    {id:'1', name:'Abhiraj'},
    {id:'2', name:'Vaishnav'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer