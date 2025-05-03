import {createSlice} from "@reduxjs/toolkit"



const guessSlice=createSlice({
    name:'guess',
    initialState:{num:-1},
    reducers:{
        guessedNumber:(state,action)=>{
            state.num=action.payload
        }
    }
})



export default guessSlice.reducer;
export const {guessedNumber}=guessSlice.actions