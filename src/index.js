import { render } from "react-dom";
import React, { Component, useState, useReducer, useContext } from "react";
import { storeCtx, nameCtx } from "./storeCtx";
import { reducerOne } from "./reducer";
import { Good } from "./Good";

const initialState = { count: 0, color: "pink" };

// reducer function will always return a new state to the store

function Counter({ initialCount }) {
  const { state, dispatch } = useContext(storeCtx);

  return (
    <>
      <input style={{ background: state.color }} />
      Count: {state.count}
      <button
        onClick={() =>
          dispatch({
            type: "reset",
            payload: initialCount || initialState.count
          })
        }
      >
        Reset
      </button>
      {/* action is increment*/}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {/* action is decrement*/}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <nameCtx.Provider value={{ name: "Sharath" }}>
        <Good />
      </nameCtx.Provider>
    </>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducerOne, initialState);
  return (
    <>
      <storeCtx.Provider value={{ state, dispatch }}>
        <Counter initialCount={10} />
      </storeCtx.Provider>
    </>
  );
}

render(<App />, document.getElementById("root"));

// Pub(Publisher)(Provider) - Sub(subscriber)(useContext) Model
