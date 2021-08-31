import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contents: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        addToBasket: (state, action) => {
           state.contents = [...state.contents, action.payload]
        },
    }
})

export const { addToBasket } = basketSlice.actions

export const selectBasket = (state) => state.basket.contents

export default basketSlice.reducer