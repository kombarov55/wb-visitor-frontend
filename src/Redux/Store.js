import {configureStore} from '@reduxjs/toolkit'
import contextReducer from "./ContentSlice"

export default configureStore({
    reducer: {
        content: contextReducer
    }
})