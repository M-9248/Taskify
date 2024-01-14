// import React, { useReducer } from 'react'
export interface Todo {
    id:number,
    todo:string,
    isDone:boolean
}

// type Action = {type:'add',payload:string}| 
// {type:'remove',payload:number} | 
// {type:'done',payload:number};


// export const TodoReducer = (state:Todo[],action:Action) => {
//     switch(action.type){
//         case "add":
//             return [
//                 ...state, {id:Date.now(),todo:action.payload,isDone:false}
//             ]
            
//         case "remove":
//             return state.filter((todo)=>todo.id!=action.payload)
//         case "done":
//             return state.map((todo)=>todo.id===action.payload?{...todo,isDone: !todo.isDone}:todo)
//         default :
//         return state;
//         }
// }

// export default TodoReducer ;