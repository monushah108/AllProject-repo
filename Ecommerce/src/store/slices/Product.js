import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts', async () => {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            return data
        }
        catch (err){
            throw err
        }
    }
)

const filterItem = (state) => {
  return state.products.filter(item => {
    const userInput = state.searchQueary.toLocaleLowerCase().trim()
    const tags = item.tags.find(item => userInput.split(' ').includes(item)) 
     if(item.title.toLocaleLowerCase().includes(userInput)){
        return item.title
     } else if(item.category.toLocaleLowerCase().includes(userInput)) {
        return item.category
     } else if(tags){
        return item.tags
     }

  })
}


const Slice =  createSlice({
    name:'product',
    initialState:{
        products : [],
        filterproduct:[],
        searchQueary:'',
        loading:false,
        error:null
    },
    reducers : {
       
        searchProduct(state,action){
            state.searchQueary = action.payload.input
            const searchItem = filterItem(state,action)
            state.filterproduct = searchItem
        }
        
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false
            state.products = action.payload.products || []
            state.error = ''

           
        } ).addCase(fetchProducts.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message || 'something went Wrong!'
        }).addCase(fetchProducts.pending,(state) => {
            state.loading = true
        })
    }
})

export const getFilterProduct = (state) => state.Product.filterproduct
export const getProductList = (state) => state.Product.products;
export const fetchLoadingState = (state) => state.Product.loading
export const fetchErrorState = (state) => state.Product.error
export const getSearchQuery = (state) => state.Product.searchQueary 

export const {searchProduct } = Slice.actions;


export default Slice.reducer