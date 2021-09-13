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
        removeFromBasket: (state, action) => {
            const index = state.contents.findIndex(item => item.id === action.payload)       
            let newContents = [...state.contents]
             if(index >= 0){
                 newContents.splice(index, 1)
             }else{
                 console.warn(`Cant remove product (id: ${action.payload}) as its not in basket!`)
                }
            return{
                ...state.contents,
                contents: newContents
            }
        },
        emptyBasket: (state) => {
            state.contents = []
        }
    }
})

export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions

export const selectBasket = (state) => state.basket.contents

export default basketSlice.reducer

// suma koszyka
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)