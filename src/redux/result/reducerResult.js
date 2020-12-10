const initialState = 0;

export const reducerResult = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ON_BTN_ADD":
      return state + payload.value;
    case "ON_BTN_MINUS":
      return state - payload.value;
    case "ON_BTN_MULT":
      return state * payload.value;
    case "ON_BTN_DEV":
      return state / payload.value;
    case "ON_BTN_RESULT":
      return state;
    default:
      return state;
  }
};
