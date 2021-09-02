import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contents: [
        {
            id: "123",
            title: "Camera",
            picphoto: "https://images-na.ssl-images-amazon.com/images/I/71EzZHveM-L._AC_SL1500_.jpg",
            price: 150
        },        
        {
            id: "124",
            title: "Coffy",
            picphoto: "https://images-na.ssl-images-amazon.com/images/I/51eqU4jOrLL._AC_SL1199_.jpg",
            price: 50
        },
        {
            id: "125",
            title: "Sound",
            picphoto: "https://images-na.ssl-images-amazon.com/images/I/71ITEaodrZL._AC_SL1500_.jpg",
            price: 100
        }
    ]
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

        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasket = (state) => state.basket.contents

export default basketSlice.reducer

// suma koszyka
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)