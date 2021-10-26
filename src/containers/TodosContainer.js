import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, enter } from "../modules/todos";

const TodosContainer = ({ input, todos, changeInput, enter }) => {

    return(
        <Todos input={input} todos={todos} onChangeInput={changeInput} onEnter={enter} />
    )
}

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,   // changeInput is working under this format of code.
        enter,
    }
)(TodosContainer);

/*
const mapStateToProps = state => ({
    input: state.todos.input,
    todos: state.todos.todos,
})

const mapDispatchToProps = dispatch => ({
    changeInput: () => dispatch(changeInput()),
    enter: () => dispatch(enter()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosContainer);
*/