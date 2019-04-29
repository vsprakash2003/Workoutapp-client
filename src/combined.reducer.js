import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

const createAppReducer = (history) => combineReducers(
    {router: connectRouter(history) }
    )

const rootReducer = (history) => (state, action) => {
  return createAppReducer(history)(state,action)
};

export default rootReducer;