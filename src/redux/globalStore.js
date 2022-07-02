import { configureStore } from '@reduxjs/toolkit';
import  todoSlice from './todoSlice';
import  countSlice from './counterSlice';




 
export const store = configureStore({
    reducer :{
        todo : todoSlice,
        counter : countSlice
    }
    
    
}  
);