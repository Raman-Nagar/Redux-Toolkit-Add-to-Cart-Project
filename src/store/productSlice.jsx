import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
    //  OR
    
    // extraReducers:(builder)=>{
    //     builder
    //     .addCase(getData.pending, (state, action)=>{
    //         state.status = STATUSES.LOADING;
    //     })
    //     .addCase(getData.fulfilled, (state, action)=>{
    //         state.data = action.payload;
    //         state.status = STATUSES.IDLE;
    //     })
    //     .addCase(getData.rejected, (state, action)=>{
    //         state.status = STATUSES.ERROR;
    //     })
    // }

});

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer;

///////////////////////////////////////////////////////////////////////////////////////////////

//thunk middlewere for handle asycronuse actions

export function getData(){
    return async function getDataThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        }catch(err){
            dispatch(setStatus(STATUSES.ERROR))
            console.log(err)
        }
    }
}

//  OR

// export const getData = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     return data;
// })