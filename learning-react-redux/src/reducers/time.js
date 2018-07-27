const initialTimeState = {
  date: new Date().toISOString(),
  time: new Date().toLocaleTimeString()
};

export function timeReducer(prevState = initialTimeState, action) {
  switch (action.type) {
    case "DATE":
      return { ...prevState, date: new Date().toISOString() };
    case "TIME":
      return { ...prevState, time: new Date().toLocaleTimeString() };
    default:
      return prevState;
  }
}
