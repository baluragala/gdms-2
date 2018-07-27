const initalCounterState = { counter: 0 };

export function counterReducer(prevState = initalCounterState, action) {
  switch (action.type) {
    case "INC":
      return { counter: prevState.counter + action.by };
    case "DEC":
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}
