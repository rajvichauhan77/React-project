import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartList:[],
    cartLength:0,
    showCart:false

}

const cartSlice = createSlice({
    name: "cartproducts",
    initialState,
    reducers: {

        addCart(state, action){
            let item = action.payload

            let existItem = state.cartList.find((ele) => ele.id == item.id)
            console.log(item)

            if(existItem){
                existItem.qtn++;
                existItem.price += item.price
            }
            else{
                item.qtn = 1;
                state.cartList.push(item)
                state.cartLength++
                // console.log(cartList)
            }
        },

        showCart(state){
            state.showCart = !state.showCart
        },
        
    }
})

export const {addCart, showCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer
