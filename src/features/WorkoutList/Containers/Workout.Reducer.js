import constants from "./Workout.Constants";

/**
 * Declare initalState for workout container
 * @constant
 * @param {object} listQuery - Declare the initialState value for the listQuery
 * @default
 * @example const initialState = {
   listQuery : {}
  }
 */

const initialState = {
  workoutListData: {}
};

/**
 * Reducer function for list
 * @param {object} state - contains state object for the reducer list
 * @param {object} action - contains type and its data
 */

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_WORKOUT_LIST_SUCCESS: {
      return Object.assign({}, state, {
        workoutListData: action.response
      });
    }
    case constants.GET_WORKOUT_LIST_FAILURE: {
      return Object.assign({}, state, initialState);
    }
    default:
      return state;
  }
}

export { initialState };
export default reducer;
