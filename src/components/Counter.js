import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {

    return (
        <>
            <div>{number}</div>
            <div>
                <button onClick={onIncrease} value={1}>Inc</button>
                <button onClick={onDecrease}>Dec</button>
            </div>
        </>
    )
}

export default Counter;