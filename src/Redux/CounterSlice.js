import {createSlice} from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        inc: state => {
            state.value += 1
        },
        dec: state => {
            state.value -= 1
        },
        incByAmount: (state, {payload}) => {
            state.value += payload;
        }
    }
})

export const {inc, dec, incByAmount} = CounterSlice.actions
export default CounterSlice.reducer