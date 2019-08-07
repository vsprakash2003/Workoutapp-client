import constants from "./Workout.Constants";
import { getConfigProperty } from "../../../settings";
import { makeGetCall } from "../../../utils/Api";

const WORKOUT_LIST = getConfigProperty("workoutList");

/**
 * #desc getWorkoutListRequest - request sent for fetching workout list data
 * @return {object} - Returns type and response
 */

export function getWorkoutListRequest(req) {
  return {
    type: constants.GET_WORKOUT_LIST_REQUEST,
    req
  };
}

/**
 * #desc getWorkoutListSuccess - notifies when request sent callback
 * @return {object} - Returns type and response
 */

export function getWorkoutListSuccess(response) {
  return {
    type: constants.GET_WORKOUT_LIST_SUCCESS,
    response
  };
}

/**
 * #desc getWorkoutListFailure - notifies when request failed
 * @return {object} - Returns type and response
 */

export function getWorkoutListFailure(exception) {
  return {
    type: constants.GET_WORKOUT_LIST_FAILURE,
    exception
  };
}

/**
 * @desc getWorkOutList to get list of workouts
 * @param {string} url - url to get the list from
 * @return {object} - Returns promise
 */

export function getWorkoutList(url = WORKOUT_LIST) {
  return (dispatch, getState) => {
    dispatch(getWorkoutListRequest(true));
    return makeGetCall(url, getState)
      .then(res => res.json())
      .then(json => {
        dispatch(getWorkoutListSuccess(json));
        dispatch(getWorkoutListRequest(false));
      })
      .catch(ex => {
        dispatch(getWorkoutListFailure(ex));
        dispatch(getWorkoutListRequest(false));
      });
  };
}
