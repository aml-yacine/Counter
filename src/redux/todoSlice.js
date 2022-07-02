import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos :[
    ]
}
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addtoDo :(state,action)=>{
            state.todos.push(action.payload)
        },
        deletetoDo :(state,action)=>{
            state.todos =  state.todos.filter((item,index)=>{
               return index !== action.payload
            })
        },
    }
})

export const {addtoDo , deletetoDo} = todoSlice.actions;
export default todoSlice.reducer












// //Action
// export const addToDoAction = (payload)=>{
// return {
//     type:"ADD_TODO",
//     payload:payload
// }
// }
// export const deleteToDoAction = (payload)=>{
//     return {
//         type:"DELETE_TODO",
//         payload:payload
//     }
//     }

// //state 
// const initialState = {
//     todos :[
//      ],
// }

// //reducer
// export const toDoReducer = (state = initialState , action)=>{
//     if(action.type === 'ADD_TODO'){
//         return {
//         ...state, todos:[...state.todos, action.payload]
//         }
//         // {todos: [{}{}{ title,content }] } 
//     }
//     if(action.type === 'DELETE_TODO'){
//         return {
//         ...state, todos:[...state.todos.filter((item,index) =>index !== action.payload)]
//         }
//     }
//     return state;
// }

