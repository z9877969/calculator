const initialDispalayValue = "0";

export const reducerChangeDisplay = (state = initialDispalayValue, action) => {
  switch (action.type) {
    case "CHANGE_DISPLAY":
      return state === "0" ? action.payload.value.toString() : state + action.payload.value
    default:
      return state;
  }
};
