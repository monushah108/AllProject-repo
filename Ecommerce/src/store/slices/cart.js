import { createSelector, createSlice } from "@reduxjs/toolkit";



const findIndexItem = (state,action) => {
    return state.item.findIndex((item) => action.payload.id == item.id)
}

const Slice =  createSlice({
    name:'cart',
    initialState:{
        item:[],
        loading:false,
        error:null
    }, 
    reducers:{
        updateCart(state,action) {
            const existingIndex = findIndexItem(state,action)
            if(existingIndex !== -1) state.item[existingIndex].quantity += 1
            else  state.item.push({...action.payload , quantity : 1})
        },
        removeItem(state,action){
           const existingIndex = findIndexItem(state,action)
           state.item.splice(existingIndex,1)
        },
        increaseCartItemQuantity(state,action){
            const existingIndex = findIndexItem(state,action)
            state.item[existingIndex].quantity += 1

        },
        decreaseCartItemQuantity(state,action){
            const existingIndex = findIndexItem(state,action)
            state.item[existingIndex].quantity -= 1
            if(state.item[existingIndex].quantity === 0)  state.item.splice(existingIndex , 1)
        }

    }
})

const getCartItems = (state) => state.cart.item;

export const getAllCartItems = createSelector(
  [getCartItems ,(state) => state.Product.products],
  (cartItems, products) => {
    return cartItems.map(({ id, quantity }) => {
      const cartProduct = products.find((product) => product.id === id);
      return { ...cartProduct, quantity };
    });
  }
);

export const getcartError = (state) => state.cart.error
export const getcartLoading = (state) => state.cart.loading
export const getcartItems = (state) => state.cart.item

export const {
    updateCart ,
    removeItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity
} = Slice.actions


export default Slice.reducer