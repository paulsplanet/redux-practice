import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/change_input";
const ENTER = "todos/enter";

/*
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})

let id = 0;
export const enter = text => ({
    type: ENTER,
    todo: {
        id: id++,
        text,
    }
});
*/
let id = 0;
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const enter = createAction(ENTER, text => ({
    id: id++,
    text,
}))

const initialState = {
    input: "",
    todos: [
        {
            id: 0,
            text: "first",
        }
    ]
};

/*
function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT:
            return { ...state, input: action.input };
        case ENTER:
            return { ...state, todos: state.todos.concat(action.todo) };
        default:
            return state;
    }
}

export default todos;
*/

export default handleActions({
    [CHANGE_INPUT]: (state, { payload: input }) => ({
        ...state,
        input: input,
    }),
    [ENTER]: (state, { payload: todo }) => ({
        ...state,
        todos: state.todos.concat(todo),
    })
}, initialState)
