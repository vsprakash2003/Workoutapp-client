import constant from "./Workout.Constants"
import {getConfigProperty} from "../../Settings"
import {makePostCall} from "..utils/Api"
const WORKOUT_LIST = getConfigProperty("workoutList")


/**
 * @desc getWorkOutList to get list of workouts
 * @param {string} url - url to get the list from
 * @return {object} - Returns promise
 */

export function getWorkoutList(url = WORKOUT_LIST) {
    return (dispatch, getState) => {
        let postData = constant.DEFAULT_REQUEST_DATA
        dispatch(getWorkoutListRequest(true))
        return makePostCall(url, postData, getState)
            .then(res => res.json())
            .then(json => {
                dispatch(getWorkoutListSuccess(json))
                dispatch(getWorkoutListRequest(false))
            })
            .catch(ex => {
                dispatch(getWorkoutListFailure(ex))
                dispatch(getWorkoutListRequest(false))
            })
    }
}

/**
 * #desc getWorkoutListRequest - request sent for fetching workout list data
 * @return {object} - Returns type and response
 */

export function getWorkoutListRequest(req) {
    return {
        type: constant.GET_WORKOUT_LIST_REQUEST,
        req
    }
}

/**
 * #desc getWorkoutListSuccess - notifies when request sent callback
 * @return {object} - Returns type and response
 */

export function getWorkoutListSuccess(response) {
    return {
        type: constant.GET_WORKOUT_LIST_SUCCESS,
        response
    }
}

/**
 * #desc getWorkoutListFailure - notifies when request failed
 * @return {object} - Returns type and response
 */

export function getWorkoutListFailure(exception) {
    return {
        type: constant.GET_WORKOUT_LIST_FAILURE,
        exception
    }
}