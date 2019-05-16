import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import * as workoutReducer from './features/WorkoutList/Containers/Workout.Reducer'

const createAppReducer = (history) => combineReducers(
    {router: connectRouter(history) },
    workoutReducer
    )

const rootReducer = (history) => (state, action) => {
  return createAppReducer(history)(state,action)
};

export default rootReducer;