import React, { useContext } from "react";
import { storeCtx, nameCtx } from "./storeCtx";

export function Good() {
  const { state, dispatch } = useContext(storeCtx);
  const { name } = useContext(nameCtx);
  return (
    <>
      <br />
      <br />
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "color", payload: "red" })}>
        Red
      </button>
      <button onClick={() => dispatch({ type: "color", payload: "Green" })}>
        Green
      </button>
      <button onClick={() => dispatch({ type: "color", payload: "BLue" })}>
        Blue
      </button>
      <input style={{ background: state.color }} />
      {name} is a Good Guy
    </>
  );
}
