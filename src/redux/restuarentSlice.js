import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



   // api call using thunk
  export const fetchRestuarent = createAsyncThunk('restuarentList/fetchRestuarent',()=>{
   const result  = axios.get('/restaurant.json').then(Response=>Response.data.restaurants)
     console.log(result);
     return result
  })



const restuarentSlice = createSlice({
    name:'restuarentList',
    initialState : {
        loading:false,// pending state
        allRestuarent:[],//resolve state
        searchRestuarent:[],
        error:""//reject state
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchRestuarent.pending,(state)=>{
          state.loading = true
        })

        builder.addCase(fetchRestuarent.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestuarent =action.payload
            state.searchRestuarent=action.payload
            state.error =""
        })

        builder.addCase(fetchRestuarent.rejected,(state,action)=>{
            state.loading=false
            state.allRestuarent=""
            state.error=action.error.message
        })

    },
    reducers :{
      search : (state,action)=>{
        state.allRestuarent = state.searchRestuarent.filter(item=> item.neighborhood.toLowerCase().includes(action.payload))
      }
    }
})
export const {search} = restuarentSlice.actions
export default restuarentSlice.reducer



/* thunk
------------
 *)  accept and an action type string that returns a promise and generates thunk that dispathches pending/fullfilled/reject
   action type based on that promise
 *) thunk is not part of slice seprating method tool kit
 */

//builder-it holds the value or response from the thunk
//addcase- it is a method of builder it can chane the value of state

//extra reducer- slicnte ullil api cheyyunnah kond