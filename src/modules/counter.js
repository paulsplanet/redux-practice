import { createAction, handleActions } from "redux-actions";

const INCRE = "counter/increase";
const DECRE = "counter/decrease";

export const increase = () => ({type: INCRE});
export const decrease = createAction(DECRE)

const initialState = {
    number: 0,
    act: ""
}

export default handleActions({
    [INCRE]: (state, action) => ({
        ...state,
        number: state.number + 1,
        act: action  //counter/increase
    }),
    [DECRE]: (state, action) => ({
        ...state,
        number: state.number -1
    }),
}, initialState)


/*
function counter(state = initialState, action) {
    switch(action.type) {
        case INCRE:
            return {
                number: state.number + 1,
            };
        case DECRE: 
            return {
                number: state.number - 1,
            };
        default: 
            return state;        
    }
}

export default counter;
*/