const initalCounterState = { counter: 0 };

export function counterReducer(prevState = initalCounterState, action) {
  console.log("counterReducer", action);
  switch (action.type) {
    case "INC":
      return { counter: prevState.counter + 1 };
    case "DEC":
      return { counter: prevState.counter - 1 };
    default:
      return prevState;
  }
}
