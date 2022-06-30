import {createStore} from 'redux';

//action
export const addToDoAction = (payload)=>{
return {
    type:"ADD_TODO",
    payload:payload
}
}

export const deleteToDoAction = (payload)=>{
    return {
        type:"DELETE_TODO",
        payload:payload
    }
    }

//state 
const initialState = {
    todos :[ ],
}

const toDoReducer = (state = initialState , action)=>{
    if(action.type === 'ADD_TODO'){
        return {
        ...state, todos:[...state.todos, action.payload]
        }
    }
    if(action.type === 'DELETE_TODO'){
        return {
        ...state, todos:[...state.todos.filter((item,index) =>index !== action.payload)]
        }
    }
    return state;
}

export const store = createStore(
    toDoReducer
);