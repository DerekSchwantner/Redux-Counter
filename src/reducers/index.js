import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
