import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import workoutReducer from './features/WorkoutList/Containers/Workout.Reducer'

const createAppReducer = (history) => combineReducers({
  router: connectRouter(history),
  workoutReducer: workoutReducer
})

const rootReducer = (history) => (state, action) => {
  return createAppReducer(history)(state,action)
};

export default rootReducer;