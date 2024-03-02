import React, { useReducer } from 'react'

const WorkingWithUseReducer = () => {
    const initialState = [];
    const reducer = (state = initialState, action) => {
        console.log(action);
        switch (action.type) {
            case "ADD_ITEM":
                state= state.length === 0 ? [action.payload] : [...state, action.payload]
                console.log(state,'<===statebbb ');
                return state;
            case "REMOVE_ITEM":
                let newArray = state.slice(0, state.length - 1);
                state= state.length>0?newArray:[]
                console.log(state,'<==remove');
                return state;
            case "CLEAR_ITEM":
                state = []
                return state;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state,'<=======satte heheh');
    return (
        <div>
            <button onClick={() => { dispatch({ type: "ADD_ITEM",payload:"1"}) }}>Add item</button>
            <button onClick={() => { dispatch({ type: "REMOVE_ITEM" }) }}>Remove item</button>
            <button onClick={() => { dispatch({ type: "CLEAR_ITEM" }) }}>Clear cart</button>
        </div>
    )
}

export default WorkingWithUseReducer