import React, { useReducer } from 'react';
const reducerFunction = (state, action) => {
    switch(action.type){
        case "Increment":
            return {count: state.count + 1};
        case "Derement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        default:
            return {count:0}
    }
}

const Reducer2 = () => {
    const initialValue = {count:0};
    const [state,dispatch] = useReducer(reducerFunction,initialValue)
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"Derement"})}>Derement</button>
            <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        </div>
    )
}

export default Reducer2