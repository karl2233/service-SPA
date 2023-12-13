import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState:{
        allUsers:[],
    },

    reducers:{ 
        SetAllUSers:(state,action)=>{
            state.allUsers = action.payload

        }
    }
});

export const {SetAllUSers}=userSlice.actions;
export default userSlice.reducer
