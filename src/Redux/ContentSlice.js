import {createSlice} from "@reduxjs/toolkit";

export const ContentSlice = createSlice({
    name: "content",
    initialState: {value: {}},
    reducers: {
        set: (state, {payload}) => {
            state.value = payload
        }
    }
})

export const {set} = ContentSlice.actions
export default ContentSlice.reducer