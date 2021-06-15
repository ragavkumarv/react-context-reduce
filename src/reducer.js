// {count: 2} // type is 'increment'
// {count: 2} // type is 'decrement'
export function reducerOne(state, action) {
  switch (action.type) {
    case "reset":
      return { ...state, count: action.payload };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "color":
      return { ...state, color: action.payload.toLowerCase() };
    default:
      return state;
  }
}
