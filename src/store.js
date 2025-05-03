import {configureStore} from "@reduxjs/toolkit"
import guessReducer from "./guessSlice"


export const store=configureStore({
    reducer:{
        guessedNum:guessReducer,
    }
})