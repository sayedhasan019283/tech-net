import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    count : 0,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            state.count += 1;
        },
        decrement : (state) => {
            state.count -= 1;
        },
        incrementByAmount : (state, action : PayloadAction<number>) => {
            state.count += action.payload
        },
        decrementByAmount : (state, action : PayloadAction<number>) => {
            state.count -= action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions

export default counterSlice.reducer;