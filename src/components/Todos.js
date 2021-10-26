import React from "react";

const Todos = ({ input, todos, onChangeInput, onEnter }) => {
    const onChange = e => onChangeInput(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onEnter(input);
        onChangeInput("");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Todos;