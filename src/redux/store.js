import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import loaderReducer from "./loaderSlice";

const store = configureStore({  
    reducer:{
      loaderReducer,
        userReducer
    
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;