import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const App = () => {

  return (
    <>
      <h1> reudx practice</h1>
      <div>
        <h3>Counter</h3>
        <CounterContainer />
      </div>
      <div>
        <h3>Todos</h3>
        <TodosContainer />
      </div>
    </>
  )
}

export default App;